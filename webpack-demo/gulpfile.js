var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConf = require('./webpack.config');

gulp.task('default', ['webpack-dev-server']);
// build development
gulp.task('build-dev', ['webpack:build-dev'], function () {
    gulp.watch(['app/**/*'], ['webpack:build-dev']);
});

// build production
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function (done) {
    var myConf = Object.create(webpackConf);

    // 生产环境使用的插件，不要放到webpack.conf里
    myConf.plugins = myConf.plugins.concat(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    webpack(myConf, function (err, stats) {
        if (err) {
            throw new gutil.PluginErr('webpack:build', err);
        }
        gutil.log('[webpack:build]', stats.toString({
            color: true
        }));
        // gulp异步task执行完毕
        done();
    })
});

var myDevConf = Object.create(webpackConf);
myDevConf.devtool = 'source-map';
myDevConf.debug = true;

// 把webpack实例缓存下来，这样就不用每次启动build-dev都新建一个实例
var devCompiler = webpack(myDevConf);

gulp.task('webpack:build-dev', function (done) {
    devCompiler.run(function (err, stats) {
        if (err) {
            throw new gutil.PluginErr('webpack:build-dev', err);
        }
        gutil.log('[webpack:build]', stats.toString({
            color: true
        }));
        // gulp异步task执行完毕
        done();
    });
});

gulp.task('webpack-dev-server', function (done) {
    var myConf = Object.create(webpackConf);
    // --inline的node api写法
    myConf.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
    myConf.devtool = 'eval';
    myConf.debug = true;
    myConf.plugins = webpackConf.plugins.concat(
        // 加上热替换组件
        new webpack.HotModuleReplacementPlugin()
    );

    new webpackDevServer(webpack(myConf), {
        contentBase: './dist',
        publicPath: myConf.output.publicPath,
        hot: true,
        stats: {
            color: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginErr('webpack:webpack-dev-server', err);
        }
        gutil.log("[webpack-dev-server]", "http://localhost:8080");
    });
});

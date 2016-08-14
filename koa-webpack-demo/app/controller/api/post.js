/**
 * @file blog posts api
 * @author YDSS
 */
'use strict';

const PostService = require('../../service/post');
const Result = require('../../util/result');
const ErrCode = require('../../constant/err_code');

// router.get('/find', (req, res, next) => {
//     const findArticle = articleAction.findArticle;
//
//     findArticle(req.query)
//         .then(ret => {
//             res.send({
//                 errno: responseState.OK,
//                 data: ret
//             });
//         }, err => {
//             res.send({
//                 errno: responseState.SQL_ERROR,
//                 data: err.message
//             });
//         });
// });
//
// router.post('/add', (req, res, next) => {
//     const addArticle = articleAction.addArticle;
//     let raw = decodeURIComponent(req.body.raw);
//
//     addArticle(raw)
//         .then(ret => {
//             res.send({
//                 errno: responseState.OK,
//                 data: ret
//             });
//         },
//         err => {
//             res.send({
//                 errno: responseState.SQL_ERROR,
//                 data: err.message
//             });
//         });
// });
//
// router.post('/update', (req, res, next) => {
//     const updateArticle = articleAction.updateArticle;
//     let {id, raw, updatedAt} = req.body;
//     raw = decodeURIComponent(raw);
//
//     updateArticle({
//         id,
//         raw,
//         updatedAt
//     })
//         .then(ret => {
//             res.send({
//                 errno: responseState.OK,
//                 data: ret
//             });
//         }, err => {
//             res.send({
//                 errno: responseState.SQL_ERROR,
//                 data: err.message
//             });
//         });
// });
//
// router.get('/del', (req, res, next) => {
//     const delArticle = articleAction.delArticle;
//     let articleId = req.query.id;
//
//     delArticle(articleId)
//         .then(ret => {
//             res.send({
//                 errno: responseState.OK,
//                 data: ret
//             });
//         }, err => {
//             res.send({
//                 errno: responseState.SQL_ERROR,
//                 data: err.message
//             });
//         });
// });
//
// export {router as article};

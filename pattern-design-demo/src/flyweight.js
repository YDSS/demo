/**
 * @file 享元模式
 * @author ydss
 */

/**
 * 简历类
 *
 * @class
 */
class Resume {
    
    /**
     * @param {Function} template 简历模板
     * @param {string} name 应聘者姓名
     * @param {string} content 在模板中填写的个人信息
     */
    constructor(template, name) {
        this.template = template;
        this.name = name;
        // this.content = content;
    }

    /**
     * 生成简历
     *
     * @return {string} 简历
     */
    create() {
        return this.template(this.name);
    }
}

// 生成50份使用相同模板的简历
let resumes = [];

function template(name) {
    return `resume ${name}`;
}
for (let i = 0; i < 50; i++) {
    // 这里用数字来代替姓名了
    resumes.push(new Resume(template, i + ''));
}

console.log(resumes);

// 享元模式
// class Resume {
//     
//     /**
//      * @param {Function} template 简历模板
//      * @param {string} name 应聘者姓名
//      * @param {string} content 在模板中填写的个人信息
//      */
//     constructor(template, name) {
//         this.template = template;
//         this.name = name;
//         // this.content = content;
//     }
// 
//     /**
//      * 生成简历
//      *
//      * @return {string} 简历
//      */
//     create() {
//         return this.template(this.name);
//     }
// }
// 
// const manage = (function () {
//     let outerState = {};
// 
//     return {
//         add(
// })();


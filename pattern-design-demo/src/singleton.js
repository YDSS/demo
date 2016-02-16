/**
 * @file 单例模式
 * @author ydss
 */

/* version one, 通过getInstance获取实例而非new */
/**
 * 汽车类
 *
 * @class
 */
// class Car {
// 
//     /**
//      * @param brand {string} 品牌
//      * @param speed {number} 时速
//      */
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//         this.instance = null;
//     }
// 
//     run() {
//         console.log(`this ${this.brand} car is runing with ${this.speed} km/h`);
//     }
// 
//     /**
//      * 获取Car实例，只有一个
//      *
//      * @return {Car} 单例
//      */
//     static getInstance(brand, speed) {
//         if (this.instance) {
//             return this.instance;
//         }
//         else {
//             return this.instance = new Car(brand, speed);
//         }
//     }
// }
// 
// let a = Car.getInstance('MZ', 100);
// console.log(a);
// let b = Car.getInstance('Auto', 50);
// console.log(b);
// 
// console.log(a === b);

/* version tow, 用闭包保存instance对象，可以使用new来创建Car */
// const Car = (function () {
//     
//     let instance = null;
// 
//     class Car {
//         
//         constructor(brand, speed) {
//             if (instance) {
//                 return instance;
//             }
// 
//             this.brand = brand;
//             this.speed = speed;
//             return instance = this;
//         }
// 
//         run() {
//             console.log(`this ${this.brand} car is runing with ${this.speed} km/h`);
//         }
//     }
// 
//     return Car;
// })();
// 
// let a = new Car('MZ', 100);
// console.log(a);
// let b = new Car('Auto', 50);
// console.log(b);
// console.log(a === b);

/* version three, 单例工厂, 把管理单例的职责放交给管理函数，
 * Car就是普通的类 */
// const carSingletonFactory = (function () {
//     let instance = null;
//     
//     return function (brand, speed) {
//         if (!instance) {
//             instance = new Car(brand, speed);
//         }
// 
//         return instance;
//     }
// })();
// 
// class Car {
// 
//     /**
//      * @param brand {string} 品牌
//      * @param speed {number} 时速
//      */
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
// 
//     run() {
//         console.log(`this ${this.brand} car is runing with ${this.speed} km/h`);
//     }
// }
// 
// let a = carSingletonFactory('MZ', 100);
// let b = carSingletonFactory('Auto', 50);
// console.log(a);
// console.log(b);
// console.log(a === b);

/* version four, 代理, 跟工厂模式差不多，只不过可以用new */
// const carSingletonProxy = (function () {
//     let instance = null;
// 
//     return function (brand, speed) {
//         if (!instance) {
//             instance = new Car(brand, speed);
//         }
// 
//         return instance;
//     }
// })();
// 
// class Car {
// 
//     /**
//      * @param brand {string} 品牌
//      * @param speed {number} 时速
//      */
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
// 
//     run() {
//         console.log(`this ${this.brand} car is runing with ${this.speed} km/h`);
//     }
// }
// 
// let a = new carSingletonProxy('MZ', 100);
// let b = new carSingletonProxy('Auto', 50);
// console.log(a);
// console.log(b);
// console.log(a === b);

let a = {b: 1};
function Person(name) {
    this.name = name;
    return a;
}

Person.prototype.sayHi = function () {
    console.log(`hi, I'm ${this.name}`);
}

console.log(new Person('ydss'));

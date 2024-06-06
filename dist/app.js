"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MethodDecorator() {
    return function (target, propertyName, descriptor) {
        console.log("call method 2");
        var objMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("dectorator this", this);
            return objMethod.apply(this, args);
        };
    };
}
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
    }
    MyClass2.prototype.myMethod = function (a, b) {
        console.log("call method 1");
        console.log('a = ', a);
        console.log('b = ', b);
        console.log("myMethod this", this);
    };
    __decorate([
        MethodDecorator()
    ], MyClass2.prototype, "myMethod", null);
    return MyClass2;
}());
var obj2 = new MyClass2();
obj2.myMethod("first", "last");
// function MethodDecorator() {
//     return (
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) => {
//       console.log("call method 2");
//       let objMethod = descriptor.value;
//       descriptor.value = function(...args: any[]) {
//         console.log("decorator this", this); // Должен быть контекст вызова (экземпляр класса)
//         console.log("args", args); // Проверка аргументов
//         return objMethod.apply(this,args) // Применение оригинального метода с текущим контекстом и аргументами
//       };
//     };
//   }
//   class MyClass {
//     @MethodDecorator()
//     myMethod(a: string, b: string) {
//       console.log("call method 1");
//       console.log('a = ', a);
//       console.log('b = ', b);
//       console.log("myMethod this", this); // Должен быть экземпляр класса
//     }
//   }
//   let obj = new MyClass();
//   obj.myMethod("first", "last");

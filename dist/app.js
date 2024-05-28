"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this.name = "name1";
        this.age = 1;
        this.number = 2;
        this.name = "123123";
    }
    User.prototype.getInfo = function () {
        console.log("aaaa");
    };
    return User;
}());
var UserChild = /** @class */ (function (_super) {
    __extends(UserChild, _super);
    function UserChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserChild;
}(User));
var obj1 = new User();
console.log(User.prototype);
console.log(UserChild.prototype);
console.log(obj1.__proto__);

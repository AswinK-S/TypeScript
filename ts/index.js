// function to sum that take only  number data type
var a = 3;
var b = 4;
function sum(n1, n2) {
    var res = n1 + n2;
    console.log('result of function', res);
}
sum(a, b);
// class in type script
var Mult = /** @class */ (function () {
    function Mult(num3, num4) {
        this.num3 = num3,
            this.num4 = num4;
    }
    Mult.prototype.getMult = function () {
        var mult = this.num3 * this.num4;
        console.log('result of class :', mult);
    };
    return Mult;
}());
var ans = new Mult(5, 6);
ans.getMult();
// array in typescript
var arr1 = ['aswin', 'akshay'];
var arr2 = [1, 2, 3, 5];
console.log('arr1 that store string  datas only', arr1);
console.log('arr2 that store number datas only', arr2);
// array that stores predefined data types
var ar1 = ['aswin', 24, true];
console.log('array that store multiple data types  :', ar1);
//function that take any data type as parameter
function display(data1, data2) {
    console.log('data1 :', data1, " data2 : ", data2);
}
display('hello', 10);

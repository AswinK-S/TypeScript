//------------------------------------------------------ function to sum that take only  number data type
var a = 3;
var b = 4;
function sum(n1, n2) {
    var res = n1 + n2;
    console.log('result of function', res);
}
sum(a, b);
//---------------------------------------------------------function that take any data type as parameter
function display(data1, data2) {
    console.log('data1 :', data1, " data2 : ", data2);
}
display('hello', 10);
//--------------------------------------------------function that returns number data type
function divison(div1, div) {
    if (div === void 0) { div = 2; }
    var result = div1 / div;
    return result;
}
console.log('divison function that returns number data type only accepting one value as parameter :', divison(118));
console.log('same division function that returns number data type after accepting 2 parameter:', divison(118, 9));
//------------------------------------------------------------ class in type script
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
//----------------------------------------------------------------- array in typescript
var arr1 = ['aswin', 'akshay'];
var arr2 = [1, 2, 3, 5];
console.log('arr1 that store string  datas only', arr1);
console.log('arr2 that store number datas only', arr2);
//---------------------------------------------------------------------------- (array that stores predefined data types ) tuples
var ar1 = ['aswin', 24, true];
console.log('array that store multiple data types  :', ar1);
//-----------------------------------------------------------------enum (its a list of constants)
var Size;
(function (Size) {
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size || (Size = {})); //enum will set the value of medium to 3 and large to 4 because the value of small is 2.
var large = Size.Large;
console.log('accessing the large value from enum : ', large);
//---------------------------------------------------------------- objects 
var Person;
Person = {
    name: 'Aswin',
    age: 24
};
console.log('object Person', Person);
var Person1 = {
    name: 'Aswin',
    contact: 2255
};
console.log('object using interface :', Person.name);

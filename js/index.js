"use strict";
// function to sum
let a = 3;
let b = 4;
function sum(n1, n2) {
    let res = n1 + n2;
    console.log('result of function', res);
}
sum(a, b);
// class in type script
class Mult {
    constructor(num3, num4) {
        this.num3 = num3,
            this.num4 = num4;
    }
    getMult() {
        let mult = this.num3 * this.num4;
        console.log('result of class :', mult);
    }
}
let ans = new Mult(5, 6);
ans.getMult();
// array in typescript
let arr1 = ['aswin', 'akshay'];
let arr2 = [1, 2, 3, 5];
console.log('arr1 that store string  datas only', arr1);
console.log('arr2 that store number datas only', arr2);
//# sourceMappingURL=index.js.map
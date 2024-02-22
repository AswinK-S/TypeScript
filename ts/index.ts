//------------------------------------------------------ function to sum that take only  number data type

let a: number =3
let b: number =4

function sum (n1:number,n2:number){
    let res:number = n1+n2
    console.log('result of function', res);
}

sum(a,b)

//---------------------------------------------------------function that take any data type as parameter

function display(data1:any, data2: any){
    console.log('data1 :', data1, " data2 : ",data2);
}

display('hello',10)

//--------------------------------------------------function that returns number data type

function divison(div1:number,div=2):number {
    let result:number = div1/div
    return result
}

console.log('divison function that returns number data type only accepting one value as parameter :',divison(118));
console.log('same division function that returns number data type after accepting 2 parameter:',divison(118,9));


//------------------------------------------------------------ class in type script
class Mult {

    private num3:number
    private num4:number

    public constructor(num3:number,num4:number){
        this.num3 = num3,
        this.num4 = num4
    }

    getMult(){
        let mult: number = this.num3 * this.num4
        console.log('result of class :',mult);
    }
}

let ans = new Mult(5,6)
ans.getMult()

//----------------------------------------------------------------- array in typescript

let arr1:string[] = ['aswin','akshay']
let arr2:number[] = [1,2,3,5]

console.log('arr1 that store string  datas only',arr1);
console.log('arr2 that store number datas only', arr2);

//---------------------------------------------------------------------------- (array that stores predefined data types ) tuples

let ar1 :[string,number,boolean] = ['aswin',24,true]
console.log('array that store multiple data types  :', ar1);

//-----------------------------------------------------------------enum (its a list of constants)

enum Size  {Small=2,Medium , Large} //enum will set the value of medium to 3 and large to 4 because the value of small is 2.

let large = Size.Large

console.log('accessing the large value from enum : ', large);

//---------------------------------------------------------------- objects 
 let Person : {
    name: string,
    age:number
 }

 Person ={
    name:'Aswin',
    age:24
 }

 console.log('object Person',Person);

 //-------------------------------------------------- object using interface

 interface individual {
    name:string,
    contact :number
 }

 const Person1:individual ={
    name:'Aswin',
    contact:2255
 }

 console.log('object  using interface :', Person.name);
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



// Type Aliases

type Employee ={
    id:Number,
    position:String,
    retire :(date: Date) => void
}                                    // we can use this Employee alias to create any number of objects



let emp:Employee={
    id:123,
    position:'developer',
    retire: (date:Date) =>{console.log(date);}
}

console.log('object created with type alias :',emp);
console.log('object created with type alias :',emp.retire(new Date()));


//-------------------------------------------------------------------- union types 
// a function or variable that can accept any type of data types.That means string or number or any etc.

//create a function that accept eithere string or number and return the number

function display1(data:number | string):number {
    if(typeof data == 'number'){
        console.log('its a number');
        return data
    }
    else {
        console.log('string received');
        return parseInt(data)

    }
}

console.log(display1(6));
console.log(display1('9'));
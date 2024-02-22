// Type Aliases
var emp = {
    id: 123,
    position: 'developer',
    retire: function (date) { console.log(date); }
};
console.log('object created with type alias :', emp);
console.log('object created with type alias :', emp.retire(new Date()));
//-------------------------------------------------------------------- union types 
// a function or variable that can accept multiple data types
//create a function that accept eithere string or number and return the number
function display(data) {
    if (typeof data == 'number') {
        console.log('its a number');
        return data;
    }
    else {
        console.log('string received');
        return parseInt(data);
    }
}
console.log(display(6));
console.log(display('9'));

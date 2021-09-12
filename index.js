// Write your solution in this file!
const employee = {name: 'Wen', streetAddress: '11 Broadway'}

function updateEmployeeWithKeyAndValue(stuff, key, value) { //where stuff is an object
    const newObj = {...stuff}; //using the spread method to clone the object stuff and assigning it to the object variable names newObj
    newObj[key] = value; //the key value pair where the value entered will be the value of that new object's index (based on the key)
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; //there's no spread method so whatever is entered in the key and value will change this (original) object
    return employee;
}

function deleteFromEmployeeByKey(oldObj, name, value) {
    const newObj = {...oldObj};
    newObj[name] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(person, key, value) {
    person[key] = value;
    return person;
}
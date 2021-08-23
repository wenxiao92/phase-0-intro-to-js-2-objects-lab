// Write your solution in this file!
const employee = {name: 'Wen', streetAddress: '11 Broadway'}

function updateEmployeeWithKeyAndValue(stuff, key, value) {
    const newObj = {...stuff};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
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
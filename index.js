let employee={ name:'Sam', streetAddress:'12'};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employees={...employee};
    employees[key]=value;
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let employeee={...employee};
    delete employeee[key];
    return employeee;
}

function destructivelyDeleteFromEmployeeByKey(emplyee, key){
    delete employee[key];
    return employee;
}
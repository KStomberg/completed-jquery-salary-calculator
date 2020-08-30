$(document).ready(function () {
  console.log("JS AND JQ Ready");
  submitButton();
});

let employees = [];

let totalYearlyCost = 0;

function submitButton() {
  $("#submitButton").on("click", function () {
    let firstNameInput = $("#firstName").val();
    let lastNameInput = $("#lastName").val();
    let idNumberInput = Number($("#idNumber").val());
    let jobTitleInput = $("#jobTitle").val();
    let annualSalaryInput = Number($("#annualSalary").val());
    let employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      idNumber: idNumberInput,
      jobTitle: jobTitleInput,
      annualSalary: annualSalaryInput,
    };
    employees.push(employee); 
    console.log(employees);
    $('.employeeList').append(
        `<tr> <td>` +
        employee.firstName +
        `</td> <td>` +
        employee.lastName +
        `</td> <td>` +
        employee.idNumber +
        `</td> <td>` +
        employee.jobTitle +
        `</td> <td class="employeeSalary">` +
        employee.annualSalary +
        `</td> </tr>`
        );
    salaryCalculator();
  });
}
let salaryCombiner;
function salaryCalculator() {
    for (const employee of employees) {
        salaryCombiner + Number(employee.annualSalary);
        totalYearlyCost = salaryCombiner;
    }
    return totalYearlyCost
    salaryCombiner = 0;
}
$(document).ready(function () {
  console.log("JS AND JQ Ready");
  submitButton();
});

let employees = []; // List of all employees

let totalYearlyCost = 0; // Total cost of all employee.annualSalary values

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
        `</td> <td> <button class="deleteButton">Delete</button>` +
        `</td> </tr>`
        );
    salaryCalculator();
    $('#totalSalary').html(
      `Total cost of all employee salaries:` +
      totalYearlyCost
    );
    if (totalYearlyCost > 20000) {
      $('#totalSalary').html(
        `Total cost of all employee salaries:` +
        totalYearlyCost
      );
      $('#totalSalary').css(`background-color`, `red`);
    } else {
      $('#totalSalary').html(
        `Total cost of all employee salaries:` +
        totalYearlyCost
      );
    }
    $('.deleteButton').on('click', function () {
      $(this).closest('tr').remove();
    });
  });
}
let salaryCombiner = 0;
function salaryCalculator() {
    for (const employee of employees) { // start for of
        salaryCombiner = salaryCombiner + Number(employee.annualSalary);
        totalYearlyCost = salaryCombiner;
        console.log(salaryCombiner);
    } // end for of
    salaryCombiner = 0;
    return totalYearlyCost;
  }
    
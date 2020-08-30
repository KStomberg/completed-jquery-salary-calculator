$(document).ready(function () {
  console.log("JS AND JQ Ready");
  submitButton();
});

let employees = [];

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
  });
}

/*
    let employee = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        idNumber: idNumberInput,
        jobTitle: jobTitleInput,
        annualSalary: annualSalaryInput
    } */

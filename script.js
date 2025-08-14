/**
 * File: script.js
 * Description: Main script to utilize front-end features
 * Author: Khoa Vo
 * Created on: 2025-06-27
 */
function subjectManager() {
  const userTypedSubject = document.getElementById("subject").value.trim();
  const userBasicSubject = document.getElementById("subject-choice").value;

  // If user typed a new subject
  if (userTypedSubject !== "") {
    return userTypedSubject;
  }

  // If user selected a subject from dropdown (not "default")
  if (userBasicSubject !== "default") {
    return userBasicSubject;
  }

  // If both are empty or invalid
  return false;
}

function userInput() {
  const subject = subjectManager();
  let input = { userName: "", userId: "", userCourse: "", userScore: "" };
  input.userName = document.getElementById("name").value.trim();
  input.userScore = document.getElementById("score").value.trim();
  input.userId = document.getElementById("student-id").value.trim();
  if (subject !== false) {
    input.userCourse = subject;
  }

  return input;
}

function userDisplay(inputData) {
  const mainList = document.getElementById("table-body");
  const row = document.createElement("tr");
  mainList.appendChild(row);
  for (const field in inputData) {
    const fieldInput = document.createElement("td");
    fieldInput.textContent = inputData[field].trim();
    row.appendChild(fieldInput);
  }
}

function avgCalculator() {}

function errorValidate(inputData) {
  for (const field in inputData) {
    if (inputData[field].trim() === "") {
      return true; // Found an empty string
    }
  }

  return false; // All values are non-empty
}

function errorDisplay() {
  const input = userInput();
  const toCheckInput = errorValidate(input);
  const errorPanel = document.getElementById("form-error-overlay");
  if (toCheckInput === false) {
    userDisplay(input);
  }

  return (errorPanel.style.display = "block");
}

function closeErr() {
  const errBtn = document.getElementById("close-error-btn");
  errBtn.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("form-error-overlay").style.display = "none";
  });
}

function clearData() {
  const form = document.getElementById("student-form");
  form.reset();
}

function run() {
  const mainBtn = document.getElementById("add-btn");
  mainBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const test = userInput();
    console.log(test);
    const test2 = errorDisplay();
    if (test2 === "block") {
      closeErr();
    }
    userDisplay(test);
    clearData();
  });
}

run();

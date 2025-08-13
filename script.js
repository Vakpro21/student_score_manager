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

function validate() {
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

function removeData() {}

function avgCalculator() {}

function errorDisplay() {}

function clearScreen() {
  const form = document.getElementById("student-form");
  form.reset();
}

function run() {
  document.getElementById("add-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const test = validate();
    console.log(test);
    clearScreen();
  });
}

run();

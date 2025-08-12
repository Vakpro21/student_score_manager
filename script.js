/**
 * File: script.js
 * Description: Main script to utilize front-end features
 * Author: Khoa Vo
 * Created on: 2025-06-27
*/
function subjectManager () {
    const userTypedSubject = document.getElementById("subject").value.trim();
    const userBasicSubject = document.getElementById("subject-choice").value;

    // If user typed a new subject
    if (userTypedSubject !== "") {
        return userTypedSubject;
    };

    // If user selected a subject from dropdown (not "default")
    if (userBasicSubject !== "default") {
        return userBasicSubject;
    };

    // If both are empty or invalid
    return false;
};

function validate () {
    let input = [];
    // const userName
    // const userId
    // const userScore
};

function removeData () {

};

function avgCalulator () {

};

function errorDisplay () {

};

function run () {
    document.getElementById("add-btn").addEventListener("submit", (event) => {
        event.preventDefault();
        const test = subjectManager ();
        console.log(test);
    });
};

run ();

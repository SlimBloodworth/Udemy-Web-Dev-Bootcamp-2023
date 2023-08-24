/* js-exercises.html page */
/*console.log("Hello World!"); - lesson #167*/
/*Personal Practice Hello User*/
function greetUser() {
    let userName = document.getElementById("userName").value;
    let greeting = "Hello " + userName + "!";
    let greetingOutPut = document.getElementById("outPut");
    greetingOutPut.value = greeting;
}
const submitButton = document.getElementById("jsUserSubmitBtn");
submitButton.addEventListener("click", greetUser);

/*personal Practice if, else if, and else: Section 16 Lessons #168 -170
const age = prompt("enter your age");

if (age <= 12){
    console.log("kiddo!");
}else if (age <= 18){
    console.log("teen");
}else{
    console.log("Adult");
}*/
/* Practice  Lesson #171 nesting Conditionals*/
/*const password = prompt("Please create a new password. Password must have at least 6 characters and cannot contain spaces.");

if (password.length >= 6){
    console.log("Password Good!");
}else{
    console.log("Password too short, must contain at least 6 characters.");
};

if (password.indexOf (' ') === -1){
    console.log("Password Good!");
}else {
    console.log("Password cannot contain spaces.");
};*/
/*Nested*/
/*This portion of the code only runs to see if there is a space IF the password is long enough: if (password.indexOf(' ') === -1) {
        console.log("Password Good!");*/
/*const password = prompt("Please create a new password. Password must have at least 6 characters and cannot contain spaces.");
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Password Good!");
    }else{
        console.log("Password Cannot contain spaces.");
    }
}else{
    console.log("Password too short, must contain at least 6 characters.");
};*/

/* Personal Practice:
const dayOfWeek = "Tuesday";

function todayIs (dayOfWeek) {
    if (dayOfWeek === "Monday") {
        console.log("Today is Monday!");
    }else{
        console.log("It's not Monday.");
    }
};

todayIs(dayOfWeek);*/
/*PERSONAL PRACTICE #2*/
function dayOfWeek() {
    const todayIs = document.getElementById("dayOfWeek").value;
    let dayOutPut = document.getElementById("dayOutPut");
    if(todayIs === "Monday"){
        dayOutPut.value = "You entered Monday!";
    }else if (todayIs === "Tuesday"){
        dayOutPut.value = "You entered Tuesday!";
    }else{
        dayOutPut.value = "Well, it's not Monday or Tuesday!";
    }
    dayOutPut.value = dayOfWeek(todayIs);
}
const daySubmitButton = document.getElementById("dayUserSubmitBtn");
daySubmitButton.addEventListener("click", dayOfWeek);


/*checking for truthy or falsy*/
/*const truthyOrFalsy = prompt("Enter Something'");
if (truthyOrFalsy){
    console.log("Truthy");
}else{
    console.log("Falsey");
};*/
/*PERSONAL PRACTICE #3*/
function ageAdmission(){
    const admissionAge = document.getElementById("ageUser").value;
    let admissionOutPut = document.getElementById("admissionOutPut");
    if(admissionAge >= 0 && admissionAge < 6 || admissionAge >= 65){
        admissionOutPut.value = "Free Admission";
    }else if(admissionAge >= 6 && admissionAge < 11){
        admissionOutPut.value = "$10 Admission";
    }else if(admissionAge >= 11 && admissionAge <= 64){
        admissionOutPut.value = "$20 Admission";
    }else{
        admissionOutPut.value = "That age does not exist. No Admission."
    }
}
const ageUserSubmitBtn= document.getElementById("ageUserSubmitBtn");
ageUserSubmitBtn.addEventListener("click", ageAdmission);

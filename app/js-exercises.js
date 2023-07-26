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
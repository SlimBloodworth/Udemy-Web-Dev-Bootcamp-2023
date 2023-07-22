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

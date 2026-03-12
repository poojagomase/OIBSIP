// Function to add two numbers entered by user
function add() {
 let a = Number(document.getElementById("num1").value);
 let b = Number(document.getElementById("num2").value);
 document.getElementById("result").innerHTML = "Result: " + (a + b);
}

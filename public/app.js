console.log("Hello from javascript");

function myFunction() {
    var firstname = document.getElementById("firstnameTxa").value;
    var lastname = document.getElementById("lastnameTxa").value;
    document.getElementById("demo").innerHTML = "Hej, " + firstname + " " + lastname;
}
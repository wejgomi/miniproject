// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);
var i = Math.floor((Math.random() * 100) + 1);
var n = 0;

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = parseInt(document.getElementById("input1").value);
    switch(true) {
        case (userinput1 == i):
            n++;
            document.getElementById("demo").innerHTML = "That's it !";
            document.getElementById("demo2").innerHTML = "Correct number was: " + i;
            document.getElementById("demo3").innerHTML = "Number of guesses: " + n;
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("Restart");       // Create a text node
            btn.appendChild(t);                                // Append the text to <button>
            document.body.appendChild(btn);
            btn.onclick = function(){
                location.reload();
            }
            break;
        case ((userinput1 - i) > -5 && (userinput1 - i) < 0):
            document.getElementById("demo").innerHTML = "Too hot but go higher";
            n++;
            break;
        case ((userinput1 - i) < 5  && (userinput1 - i) > 0):
            document.getElementById("demo").innerHTML = "Too hot but go smaller";
            n++;
            break;
        case ((userinput1 - i) > -10 && (userinput1 - i) < 0):
            document.getElementById("demo").innerHTML = "Hot but go higher";
            n++;
            break;
        case ((userinput1 - i) < 10 && (userinput1 - i) > 0):
            document.getElementById("demo").innerHTML = "Hot but go smaller";
            n++;
            break;
        case (userinput1 < i):
            document.getElementById("demo").innerHTML = "Go higher !";
            n++;
            break;
        case (userinput1 > i):
            document.getElementById("demo").innerHTML = "Go smaller !";
            n++;
            break;
        default:
            document.getElementById("demo").innerHTML = "That's not a number!";
    }
}
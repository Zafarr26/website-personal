/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mobileMenuOpen() {
    document.getElementById("gmDropdown").classList.toggle("show");
}

var display = document.getElementById("output");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && button.textContent != "C" && button.textContent != "x" && button.textContent != "÷" && button.textContent != "sqrt" && button.textContent != "sq" && button.textContent != "%" && button.textContent != "<=" && button.textContent != "+/-" && button.textContent != "sin" && button.textContent != "cos" && button.textContent != "tan" && button.textContent != "log" && button.textContent != "ln" && button.textContent != "^" && button.textContent != "n!" && button.textContent != "π" && button.textContent != "exp" && button.textContent != "radians" && button.textContent != "degrees") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "+/-") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "sq") {
      square();
    } else if (button.textContent === "sqrt") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "^") {
      exponent();
    } else if (button.textContent === "n!") {
      factorial();
    } else if (button.textContent === "exp") {
      exp();
    } else if (button.textContent === "radians") {
      radians();
    } else if (button.textContent === "degrees") {
      degrees();
    }
  });
});

// function nextLine() {
//   if(display.value.length > 19) {
//     document.write("\n");
//   }
// }
// ***button functions***
function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}

function syntaxError() {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}

function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value = display.value + "*";
}

function divide() {
  display.value = display.value + "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var result = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var result = 1;
    for (var i = display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = result;
  }
}

function pi() {
  // if(display.value === "") {
  //   display.value = Math.PI;
  // }
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value = display.value + "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}




const radius = 25;

const $input = document.querySelector('#input');
const $label = document.querySelector('[for="input"]');
const $visual = document.querySelector('#visual');

const $$angle = document.querySelectorAll('output[data-for="angle"]');
const $$cos = document.querySelectorAll('output[data-for="cos"]');
const $$sin = document.querySelectorAll('output[data-for="sin"]');
const $$tan = document.querySelectorAll('output[data-for="tan"]');
const $$adj = document.querySelectorAll('output[data-for="adj"]');
const $$opp = document.querySelectorAll('output[data-for="opp"]');

const degrees_to_radians = deg => (deg * Math.PI) / 180.0;

const calc = () => {
	// Update CSS Custom Property Value
	const angle_in_degrees = $input.valueAsNumber;
	document.documentElement.style.setProperty('--angle', `${angle_in_degrees}deg`);
	
	// Derive total progress [0-1] from angle
	const progress = angle_in_degrees / 360;
	document.documentElement.style.setProperty('--progress', progress);
	
	// Update outputs (not needed for CSS)
	const angle_in_radians = degrees_to_radians(angle_in_degrees);
	const cos = Math.cos(angle_in_radians);
	const sin = Math.sin(angle_in_radians);
	const tan = Math.tan(angle_in_radians);

	$$angle.forEach($angle => $angle.innerText = angle_in_degrees.toString().padStart(3, '0'));
	$$cos.forEach($cos => $cos.innerText = cos.toFixed(2));
	$$sin.forEach($sin => $sin.innerText = sin.toFixed(2));
	$$tan.forEach($tan => $tan.innerText = tan.toFixed(2));
	$$adj.forEach($adj => $adj.innerText = (radius * cos).toFixed(2));
	$$opp.forEach($opp => $opp.innerText = (radius * sin).toFixed(2));
}

$input.addEventListener('input', calc);
calc();
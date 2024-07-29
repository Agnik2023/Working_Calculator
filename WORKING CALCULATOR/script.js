function clearDisplay() {
    document.getElementById("display").innerText = "0";
  }
  
  function deleteChar() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.length > 1 ? display.innerText.slice(0, -1) : "0";
  }
  
  function appendNumber(number) {
    const display = document.getElementById("display");
    display.innerText = display.innerText === "0" ? number.toString() : display.innerText + number;
  }
  
  function appendOperator(operator) {
    const display = document.getElementById("display");
    const lastChar = display.innerText.slice(-1);
    if (!['+', '-', '*', '/', '(', ')'].includes(lastChar)) {
      display.innerText += operator;
    }
  }
  
  function appendDot() {
    const display = document.getElementById("display");
    const parts = display.innerText.split(/[\+\-\*\/\(\)]/);
    if (!parts[parts.length - 1].includes('.')) {
      display.innerText += '.';
    }
  }
  
  function appendFunction(func) {
    const display = document.getElementById("display");
    if (display.innerText === "0") {
      display.innerText = "";
    }
    switch(func) {
      case 'sqr':
        display.innerText += '**2';
        break;
      case 'inv':
        display.innerText = '1/(' + display.innerText + ')';
        break;
      case 'sqrt':
        display.innerText += 'Math.sqrt(';
        break;
      case 'log':
        display.innerText += 'Math.log10(';
        break;
      case 'ln':
        display.innerText += 'Math.log(';
        break;
      case 'exp':
        display.innerText += 'Math.exp(';
        break;
      case 'pow':
        display.innerText += 'Math.pow(';
        break;
      case 'sin':
        display.innerText += 'Math.sin(Math.PI / 180 * ';
        break;
      case 'cos':
        display.innerText += 'Math.cos(Math.PI / 180 * ';
        break;
      case 'tan':
        display.innerText += 'Math.tan(Math.PI / 180 * ';
        break;
      default:
        display.innerText += 'Math.' + func + '(';
    }
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      const expression = display.innerText
        .replace(/÷/g, "/")
        .replace(/×/g, "*");
      const result = Function(`"use strict"; return (${expression})`)();
      display.innerText = result;
    } catch {
      display.innerText = "Error";
    }
  }
  
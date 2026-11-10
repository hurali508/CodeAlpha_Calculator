const display = document.getElementById("display");

// Button dabane par value screen par add karo
function appendValue(value) {
  display.value += value;
}

// Poori screen clear karo
function clearDisplay() {
  display.value = "";
}

// Aakhri character delete karo
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Result nikalo
function calculate() {
  try {
    if (display.value === "") return;
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(clearDisplay, 1500);
  }
}

// BONUS: Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ("0123456789+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape" || key === "Delete") {
    clearDisplay();
  }
});
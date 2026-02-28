document.addEventListener("DOMContentLoaded", function () {

  const passwordEl = document.getElementById("password");
  const lengthEl = document.getElementById("length");
  const lengthValue = document.getElementById("lengthValue");

  const uppercaseEl = document.getElementById("uppercase");
  const lowercaseEl = document.getElementById("lowercase");
  const numbersEl = document.getElementById("numbers");
  const symbolsEl = document.getElementById("symbols");

  const generateBtn = document.getElementById("generate");

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?/";

  // Mostrar valor inicial
  lengthValue.textContent = lengthEl.value;

  // Actualizar número al mover slider
  lengthEl.addEventListener("input", function () {
    lengthValue.textContent = this.value;
  });

  // Evento generar
  generateBtn.addEventListener("click", function () {

    const length = parseInt(lengthEl.value); 
    let characters = "";

    if (uppercaseEl.checked) characters += uppercaseChars;
    if (lowercaseEl.checked) characters += lowercaseChars;
    if (numbersEl.checked) characters += numberChars;
    if (symbolsEl.checked) characters += symbolChars;

    if (characters.length === 0) {
      alert("Selecciona al menos una opción");
      return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    passwordEl.value = password;

    // 🔹 Aquí llamamos a la función de fortaleza
    updateStrength(password);
  });

});

// FUNCIÓN PARA ACTUALIZAR LA FORTALEZA
function updateStrength(password) {
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  const bar4 = document.getElementById("bar4");
  const strengthText = document.getElementById("strengthText");

  // Limpiar clases
  [bar1, bar2, bar3, bar4].forEach(bar => {
    bar.className = "bar";
  });

  let strengthScore = 0;

  if (password.length >= 8) strengthScore++;
  if (password.length >= 12) strengthScore++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strengthScore++;
  if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strengthScore++;

  if (strengthScore <= 1) {
    strengthText.textContent = "WEAK";
    bar1.classList.add("weak");
  } else if (strengthScore === 2) {
    strengthText.textContent = "MEDIUM";
    bar1.classList.add("medium");
    bar2.classList.add("medium");
  } else if (strengthScore === 3) {
    strengthText.textContent = "GOOD";
    bar1.classList.add("good");
    bar2.classList.add("good");
    bar3.classList.add("good");
  } else {
    strengthText.textContent = "STRONG";
    bar1.classList.add("strong");
    bar2.classList.add("strong");
    bar3.classList.add("strong");
    bar4.classList.add("strong");
  }
}
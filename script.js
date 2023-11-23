const copy_button = document.getElementById("copy-btn");
const len_adjustor = document.getElementById("pass-len-slider");
const pass_len_lbl = document.getElementById("pass-len");
const char_values = document.querySelectorAll(".char");
const generate_button = document.getElementById("btn-generate");

//Helper functions
function changeCopyButtonAppearence() {
  copy_button.innerText = "Copied..";
  copy_button.style.backgroundColor = "#20bf6b";
  setTimeout(() => {
    copy_button.innerText = "Copy";
    copy_button.style.backgroundColor = "#3c6382";
  }, 500);
}
//Event listeners
copy_button.addEventListener("click", copyToClipboard);
len_adjustor.addEventListener("input", getPasswordLength);
document.addEventListener("DOMContentLoaded", () => {
  pass_len_lbl.innerText = "5";
  len_adjustor.value = "5";
  document.getElementById("final-ouput-txt").value = "";
  char_values[0].checked = true;
  char_values[1].checked = false;
  char_values[2].checked = false;
  generateRandomPassword();
});

char_values.forEach((char) => {
  char.addEventListener("change", (e) => {
    generateRandomPassword();
    if (
      !char_values[0].checked &&
      !char_values[1].checked &&
      !char_values[2].checked
    ) {
      char_values[0].checked = true;
      char_values[0].disabled = true;
    } else {
      char_values[0].disabled = false;
    }
  });
});

generate_button.addEventListener("click", generateRandomPassword);
//Event handlers
function copyToClipboard() {
  const pass_output = document.getElementById("final-ouput-txt");
  let text = pass_output.value;
  pass_output.select();
  if (!navigator) {
    navigator.clipboard
      .writeText(text)
      .then((msg) => {
        changeCopyButtonAppearence();
        console.log("Copied");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  } else {
    let _temp_input_ = document.createElement("input");
    _temp_input_.value = text;
    document.body.appendChild(_temp_input_);
    document.execCommand("copy");
    changeCopyButtonAppearence();
    console.log("Copied from legacy method");
    document.body.removeChild(_temp_input_);
  }
}

function getPasswordLength() {
  let current_slider_value = len_adjustor.value;
  pass_len_lbl.innerText = current_slider_value;
  generateRandomPassword();
}

function generateRandomPassword() {
  const char_list = Array();

  if (char_values[0].checked) {
    char_list.push(char_values[0].value);
  }
  if (char_values[1].checked) {
    char_list.push(char_values[1].value);
  }
  if (char_values[2].checked) {
    char_list.push(char_values[2].value);
  }

  if (
    char_list.includes("alpha") &&
    char_list.includes("numeric") &&
    char_list.includes("symbol")
  ) {
    const textArray = [
      "A",
      "-",
      "0",
      "B",
      "1",
      ">",
      "C",
      "2",
      "<",
      "D",
      "3",
      "E",
      ".",
      "4",
      "F",
      "5",
      "?",
      "G",
      "6",
      "H",
      "7",
      "+",
      "I",
      "8",
      "J",
      "9",
      "K",
      "@",
      "L",
      "#",
      "M",
      "$",
      "N",
      "&",
      "O",
      "*",
      "P",
      "!",
      "Q",
      "%",
      "R",
      "^",
      "S",
      "T",
      "(",
      "U",
      "V",
      ")",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * textArray.length);
      return_text_all += textArray[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("alpha") && char_list.includes("symbol")) {
    const symbols = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      "\\",
      ":",
      ";",
      '"',
      "'",
      "<",
      ">",
      ",",
      ".",
      "?",
      "/",
    ];
    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * symbols.length);
      return_text_all += symbols[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("alpha") && char_list.includes("numeric")) {
    const alphanumeric = [
      "A",
      "B",
      "1",
      "C",
      "D",
      "E",
      "F",
      "G",
      "2",
      "H",
      "3",
      "I",
      "J",
      "4",
      "K",
      "L",
      "M",
      "N",
      "5",
      "O",
      "P",
      "Q",
      "6",
      "R",
      "S",
      "7",
      "T",
      "U",
      "8",
      "V",
      "W",
      "9",
      "X",
      "Y",
      "Z",
    ];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * alphanumeric.length);
      return_text_all += alphanumeric[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("symbol") && char_list.includes("numeric")) {
    const specialCharactersAndNumbers = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "1",
      "?",
      "2",
      "3",
      "4",
      "(",
      "5",
      ".",
      "6",
      ")",
      "7",
      "8",
      ">",
      "9",
      "<",
      "0",
    ];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(
        Math.random() * specialCharactersAndNumbers.length
      );
      return_text_all += specialCharactersAndNumbers[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("alpha")) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * alphabet.length);
      return_text_all += alphabet[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("numeric")) {
    const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * numeric.length);
      return_text_all += numeric[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("alpha")) {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * alphabet.length);
      return_text_all += alphabet[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  } else if (char_list.includes("symbol")) {
    const single_symbol = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "{",
      "}",
      "[",
      "]",
      "|",
      "\\",
      ":",
      ";",
      '"',
      "'",
      "<",
      ">",
      ",",
      ".",
      "?",
      "/",
    ];

    let return_text_all = "";

    let current_value = len_adjustor.value;
    for (let i = 0; i < current_value; i++) {
      let randInt = Math.floor(Math.random() * single_symbol.length);
      return_text_all += single_symbol[randInt];
    }

    document.getElementById("final-ouput-txt").value = return_text_all;
  }
}

"use strict";

const d = document;

const user = {
  name: "pepita",
  email: "pepita@bit.institute",
  password: "pepa123",
};

const $login = d.getElementById("login");
const credentials = {
  email: null,
  validEmail: null,
  password: null,
  validPassword: null,
};

/* EVENTS */
d.addEventListener("DOMContentLoaded", () => {
  eventListener();
});

/* FUNCTIONS */
function eventListener() {
  $login.email.addEventListener("input", () => {
    checkInput("email");
  });
  $login.email.addEventListener("blur", () => {
    checkInput("email");
  });

  $login.password.addEventListener("input", () => {
    checkInput("password");
  });
  $login.password.addEventListener("blur", () => {
    checkInput("password");
  });

  $login.addEventListener("submit", handleSubmit);
}

function checkInput(whichInput) {
  if (whichInput === "email") {
    const $emailWarning = d.getElementById("emailWarning");
    credentials.email = $login.email.value.trim();
    credentials.validEmail = false;
    if (credentials.email == "") {
      $emailWarning.textContent = "Please type your email";
    } else {
      $emailWarning.textContent = "";
      credentials.validEmail = true;
    }
  }

  if (whichInput === "password") {
    const $passwordWarning = d.getElementById("passwordWarning");
    credentials.password = $login.password.value.trim();
    credentials.validPassword = false;
    if (credentials.password == "") {
      $passwordWarning.textContent = "Please type a password";
    } else {
      $passwordWarning.textContent = "";
      credentials.validPassword = true;
    }
  }
  doSubmit();
}

function doSubmit() {
  let trueSubmit = credentials.validEmail && credentials.validPassword;
  if (trueSubmit) {
    $login.submit.removeAttribute("disabled");
  } else {
    $login.submit.setAttribute("disabled", true);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const credentials = {
    email: $login.email.value,
    password: $login.password.value,
  };
  console.log(credentials);
}

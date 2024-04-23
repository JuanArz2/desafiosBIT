"use strict";

const d = document;

const $signUp = d.getElementById("signUp");

const credentials = {
  name: $signUp.name.value,
  email: $signUp.email.value,
  password: $signUp.password.value,
  confirmPassword: $signUp.confirmPassword.value,
};

/* EVENTS */
d.addEventListener("DOMContentLoaded", () => {
  eventListener();
});

/* FUNCTIONS */
function eventListener() {
  $signUp.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const credentials = {
    id: "fakeId1",
    name: $signUp.name.value,
    email: $signUp.email.value,
    password: $signUp.password.value,
    confirmPassword: $signUp.confirmPassword.value,
  };
  console.log(credentials);
}

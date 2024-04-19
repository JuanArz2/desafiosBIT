"use strict";

const d = document;

const $logIn = d.getElementById("logIn");

/* EVENTS */
d.addEventListener("DOMContentLoaded", () => {
  eventListener();
});

/* FUNCTIONS */
function eventListener() {
  $logIn.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const credentials = {
    id: "fakeId1",
    name: $logIn.name.value,
    email: $logIn.email.value,
    password: $logIn.password.value,
    confirmPassword: $logIn.confirmPassword.value,
  };
  console.log(credentials);
}

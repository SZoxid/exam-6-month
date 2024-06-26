


import { checkToken, redirect } from "./utils.js";

const form = document.forms[0];
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

window.addEventListener("DOMContentLoaded", function () {
  const hasToken = checkToken();
  if (hasToken) {
    redirect("/index.html");
  }
});

const credentials = {
  email: emailInput.value,
  password: passwordInput.value,
};

emailInput.oninput = function (event) {
  emailInput.email = event.target.value;
  console.log(emailInput);
};

passwordInput.oninput = function (event) {
  passwordInput.password = event.target.value;
  console.log(passwordInput);
};

form.onsubmit = function (event) {
  event.preventDefault();
  login();
};

async function login() {
  if (emailInput.email !== "john@mail.com" || passwordInput.password !== "changeme") {
    alert("Parol Xato");
    return;
  }

  const api_url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });


    const data = await response.json();
    const { access_token, refresh_token } = data; 

    sessionStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    const hasToken = checkToken();
    if (hasToken) {
      redirect("./admin.html");
    }
  } catch (error) {
    console.error(error);
  }
}

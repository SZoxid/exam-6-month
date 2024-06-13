import { checkToken, redirect, logout } from "./utils.js";

const logout_btn = document.getElementById("logout-btn");
const fetch_btn = document.getElementById("fetch-btn");

logout_btn.onclick = logout;

fetch_btn.onclick = async function () {
  const api_url = "https://api.escuelajs.co/api/v1/auth/profile";
  const access_token = sessionStorage.getItem("access_token");

  const response = await fetch(api_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const user = await response.json();
  console.log(user);
};

window.addEventListener("DOMContentLoaded", function () {
  const hasToken = checkToken();
  if (!hasToken) redirect("/login.html");
});

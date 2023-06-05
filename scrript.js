const formOpenBtn = document.querySelector("#form-open");
hooe = document.querySelector(".home");
formContainer = document.querySelector(".form_container");
formCloseBtn = document.querySelector(".form_close");
signupBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

formCloseBtn.addEventListener("click", (e) => {
  e.preventDefaul();
  formContainer.classList.add("active");
});
formCloseBtn.addEventListener("click", (e) => {
  e.preventDefaul();
  formContainer.classList.add("active");
});

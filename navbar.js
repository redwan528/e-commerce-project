

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));

function closeForm() {
  home.classList.remove("show");
  formContainer.classList.remove("active");
}

formCloseBtn.addEventListener("click", closeForm);

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// Close the form when clicking outside the form container
document.addEventListener("click", (e) => {
  const isClickedInsideForm = formContainer.contains(e.target);
  const isClickedOnFormOpenBtn = formOpenBtn.contains(e.target);
  
  if (!isClickedInsideForm && !isClickedOnFormOpenBtn) {
    closeForm();
  }
});

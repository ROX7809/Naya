const showPopupBtn = document.querySelector(".login-btn");
const showSignupBtn = document.querySelector(".signup-btn");
const formPopup = document.querySelector(".Form-popup");
const hidePopupBtn = document.querySelector(".Form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

// Show form popup for login
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.remove("show-signup");
});

// Show form popup for signup
showSignupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.add("show-signup");
});

// Hide form popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Toggle between login and signup forms
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

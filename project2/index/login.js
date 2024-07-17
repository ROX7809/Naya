const showPopupBtn = document.querySelector(".login-btn")
const formPopup = document.querySelector(".Form-popup")
const hidePopupBtn = document.querySelector(".Form-popup .close-btn")
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

//show form popup
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

//hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
 
loginSignupLink.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove'] ("show-signup");
    });
});
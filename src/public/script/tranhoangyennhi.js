/* Slideshow */
let slideIndex = 1;

const showSlides = (n) => {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

/* Form */
const validate = () => {
    const fullname = document.forms["form-qna"]["qna-name"].value;
    const email = document.forms["form-qna"]["qna-email"].value;
    const question = document.forms["form-qna"]["qna-question"].value;
    if (fullname === "" || email === "" || question === "") {
        alert("Lack of information!");
        return false;
    }
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!document.forms["form-qna"]["qna-email"].value.match(mailFormat)) {
        alert("Invalid email address!")
        return false;
    }
    alert("Valid information!")
    return true;
}

/* Log in modal */
var modal = document.getElementById("modal-login");
var btn = document.getElementById("btn-login");
var span = document.getElementsByClassName("close")[0];
btn.onclick = () => {
    modal.style.display = "block";
}
span.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const logIn = () => {
    const loginForm = document.forms["form-login"];
    const username = loginForm["login-username"].value;
    const password = loginForm["login-password"].value;
    if (username === "hoangnhi" && password === "admin123") {
        alert("Logged in successfully!");
        return true;
    }
    alert("Wrong username or password!");
    return false;
}
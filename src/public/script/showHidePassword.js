const showHidePassword = (id) => {
    var password = document.getElementById(id);
    var icon = document.getElementById(`icon-${id}`);
    if (password.type === "text") {
        password.type = "password";
        icon.src = "/images/show-password.png";
        icon.alt = "show password";
    }
    else {
        password.type = "text";
        icon.src = "/images/hide-password.png";
        icon.alt = "hide password";
    }
}
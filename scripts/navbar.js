let dropdown = document.getElementById("drop-down");
let dropdown2 = document.getElementById("drop-down2");
let dropdown3 = document.getElementById("drop-down3");
let dropdown4 = document.getElementById("drop-down4")
let dropdown5 = document.getElementById("drop-down5");
let dropdown6 = document.getElementById("drop-down6");
let dropdown7 = document.getElementById("drop-down7")
let eyeglasses = document.getElementById("eyeglasses");
let computerGlasses = document.getElementById("computer-glasses");
let kidsGlasses = document.getElementById("kids-glasses");
let homeEyeTest = document.getElementById("home-eye-test");
let storeLocator = document.getElementById("store-locator");
let sunglasses = document.getElementById("sunglasses");
let contactLenses = document.getElementById("contact-lenses");




eyeglasses.onmouseover = function () {
    dropdown.style.display = "flex";
}
eyeglasses.onmouseout = function () {
    dropdown.style.display = "none";
}
dropdown.onmouseover = function () {
    dropdown.style.display = "flex";
}
dropdown.onmouseout = function () {
    dropdown.style.display = "none";
}


computerGlasses.onmouseover = function () {
    dropdown2.style.display = "flex";
}
computerGlasses.onmouseout = function () {
    dropdown2.style.display = "none";
}
dropdown2.onmouseover = function () {
    dropdown2.style.display = "flex";
}
dropdown2.onmouseout = function () {
    dropdown2.style.display = "none";
}

kidsGlasses.onmouseover = function () {
    dropdown3.style.display = "flex";
}
kidsGlasses.onmouseout = function () {
    dropdown3.style.display = "none";
}
dropdown3.onmouseover = function () {
    dropdown3.style.display = "flex";
}
dropdown3.onmouseout = function () {
    dropdown3.style.display = "none";
}


homeEyeTest.onmouseover = function () {
    dropdown6.style.display = "flex";
}
homeEyeTest.onmouseout = function () {
    dropdown6.style.display = "none";
}
dropdown6.onmouseover = function () {
    dropdown6.style.display = "flex";
}
dropdown6.onmouseout = function () {
    dropdown6.style.display = "none";
}

storeLocator.onmouseover = function () {
    dropdown7.style.display = "flex";
}
storeLocator.onmouseout = function () {
    dropdown7.style.display = "none";
}
dropdown7.onmouseover = function () {
    dropdown7.style.display = "flex";
}
dropdown7.onmouseout = function () {
    dropdown7.style.display = "none";
}


sunglasses.onmouseover = function () {
    dropdown5.style.display = "flex";
}
sunglasses.onmouseout = function () {
    dropdown5.style.display = "none";
}
dropdown5.onmouseover = function () {
    dropdown5.style.display = "flex";
}
dropdown5.onmouseout = function () {
    dropdown5.style.display = "none";
}

contactLenses.onmouseover = function () {
    dropdown4.style.display = "flex";
}
contactLenses.onmouseout = function () {
    dropdown4.style.display = "none";
}
dropdown4.onmouseover = function () {
    dropdown4.style.display = "flex";
}
dropdown4.onmouseout = function () {
    dropdown4.style.display = "none";
}


function toTitleCase(str) {
    let arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}




let sign = document.getElementById("user-name");
let loggedUser = document.getElementById("user-logged");
let logged_dropdown = document.getElementById("user-logged-dropdown")


let user = JSON.parse(localStorage.getItem("loggedUser"));
let fname;
if (user != null) {
    sign.style.display = "none";
    loggedUser.style.display = "flex";
    fname = toTitleCase(user.first_name);
    loggedUser.innerHTML = `${fname} <span class="material-icons">
    arrow_drop_down
    </span>`;
}


loggedUser.onmouseover = function () {
    logged_dropdown.style.display = "flex";
    loggedUser.innerHTML = `${fname} <span class="material-icons">
    arrow_drop_up
    </span>`;
}
loggedUser.onmouseout = function () {
    logged_dropdown.style.display = "none";
    loggedUser.innerHTML = `${fname} <span class="material-icons">
    arrow_drop_down
    </span>`;
}

logged_dropdown.onmouseover = function () {
    logged_dropdown.style.display = "flex";
    loggedUser.innerHTML = `${fname} <span class="material-icons">
    arrow_drop_up
    </span>`;
}

logged_dropdown.onmouseout = function () {
    logged_dropdown.style.display = "none";
    loggedUser.innerHTML = `${fname} <span class="material-icons">
    arrow_drop_down
    </span>`;
}


function logout() {
    localStorage.setItem("loggedUser", null);
    window.location.href = "homepage.html"
}
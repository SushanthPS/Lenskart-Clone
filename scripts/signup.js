let signUp = document.getElementById("sign-up");
let signIn = document.getElementById("sign-in");
var elements = document.getElementsByTagName("*");

function signup() {
    signUp.style.display = "flex";
    signIn.style.display = "none";
}

function signin() {
    signUp.style.display = "none";
    signIn.style.display = "flex";
}

function closeOption() {
    signUp.style.display = "none";
    signIn.style.display = "none";
}

function register() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var mobile = document.getElementById("mobile").value
    var password = document.getElementById("password").value
    var temp = false
    if (fname == "") {
        alert("First name is empty")
    } else if (lname == "") {
        alert("Last name is empty")
    } else if (email == "") {
        alert("Email is empty")
    } else if (mobile == "") {
        alert("Mobile No is empty")
    } else if (password == "") {
        alert("Password is empty")
    } else {

        function user(f, l, e, m, p) {
            this.first_Name = f,
                this.last_name = l,
                this.Email = e,
                this.Mobile = m,
                this.Password = p
        }
        var users = new user(fname, lname, email, mobile, password)
        var usersarr = localStorage.getItem("lenuser")
        if (usersarr == null) {
            usersarr = []
        } else {
            usersarr = JSON.parse(localStorage.getItem("lenuser"))
        }

        for (let i = 0; i < usersarr.length; i++) {
            if (usersarr[i].Email == email || usersarr[i].Mobile == mobile) {
                temp = true
            }
        }
        if (temp == true) {
            alert("Email already exists")
        } else {
            usersarr.push(users)
            alert("Signup Successful")
            window.location.href = "homepage.html"
        }

        // usersarr.push(users)
        localStorage.setItem("lenuser", JSON.stringify(usersarr))

    }
}

function login() {
    usersarr = JSON.parse(localStorage.getItem("lenuser"))
    var email = document.getElementById("mobile-email").value

    var res = false
    if (email == "") {
        alert("Email is empty")
    } else {
        usersarr.forEach(function (el) {
            if (email == el.Email || email == el.Mobile) {
                res = true
            }
        })
        if (res == true) {
            alert("Login Successful")
            window.location.href = "products.html"
        } else {
            alert("Invalid Credentials")
        }
    }

}
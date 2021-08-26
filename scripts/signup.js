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

async function register(e) {
    e.preventDefault();

    let formData = {
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    let body = JSON.stringify(formData);

    let res = await fetch("http://localhost:2345/signup", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (res.status == 400)
        alert("Please fill in all the fields")
    else {
        alert("Registration Successful")
        window.location.href = "homepage.html"
    }

}




async function login(e) {
    e.preventDefault();
    // let passInput = document.getElementById("signin-pass");
    // if (passInput.style.display == "block") {
    //     if (passInput.value == user.password) {
    //         alert("Login Successful");
    //         window.location.href = "homepage.html"
    //     } else {
    //         alert("Either username or password is incorrect.")
    //     }
    // }
    let input = document.getElementById("mobile-email").value;
    if (input == "")
        alert("Please enter a valid Email or Mobile Number.");
    else {
        let res = await fetch("http://localhost:2345/signup");
        let data = await res.json();
        let user;
        data.forEach((el) => {
            if (input == el.email || input == el.mobile) {
                user = el;
                // passInput.style.display = "block";
            }
        })
        if (user == undefined)
            alert("Account doesn't exist. Use different phone number or email.");
        else {
            localStorage.setItem("loggedUser", JSON.stringify(user));
            alert("Login Successful")
            window.location.href = "homepage.html"
        }
    }
}
let subTotal = document.getElementById("subTotal");
let netAmount = document.getElementById("netAmount");
let promoCodeDisCount = document.getElementById("promoCodeDisCount");
let orderTotal = document.getElementById("orderTotal");
let data = JSON.parse(localStorage.getItem("cartObj"));
let totalsum = data.reduce((acc, el) => {
    return acc + el.price * el.qty;
}, 0);
let div1subTotal = document.createElement("div");
div1subTotal.textContent = "SUBTOTAL";
let div2subTotal = document.createElement("div");
div2subTotal.setAttribute("class", "space");
let div3subTotal = document.createElement("div");
div3subTotal.innerHTML = `₹${totalsum}`;
subTotal.append(div1subTotal, div2subTotal, div3subTotal);

let div1netAmount = document.createElement("div");
div1netAmount.textContent = "NET AMOUNT";
let div2netAmount = document.createElement("div");
div2netAmount.setAttribute("class", "space");
let div3netAmount = document.createElement("div");
div3netAmount.innerHTML = `₹${totalsum}`;
netAmount.append(div1netAmount, div2netAmount, div3netAmount);

let div1promoCodeDisCount = document.createElement("div");
div1promoCodeDisCount.textContent = "VOUCHER DISCOUNT";
let div2promoCodeDisCount = document.createElement("div");
div2promoCodeDisCount.setAttribute("class", "space");
let div3promoCodeDisCount = document.createElement("div");
div3promoCodeDisCount.innerHTML = `- ₹0`;
promoCodeDisCount.append(
    div1promoCodeDisCount,
    div2promoCodeDisCount,
    div3promoCodeDisCount
);

let div1orderTotal = document.createElement("div");
div1orderTotal.textContent = "ORDER TOTAL";
let div2orderTotal = document.createElement("div");
div2orderTotal.setAttribute("class", "space");
let div3orderTotal = document.createElement("div");
div3orderTotal.innerHTML = `₹${totalsum}`;
orderTotal.append(div1orderTotal, div2orderTotal, div3orderTotal);

let promoCodeInput = document.querySelector(".promoCodeInput");
let button = document.getElementById("promoCodeInputButton");
button.addEventListener("click", function () {
    if (promoCodeInput.value == "masai30") {
        div3promoCodeDisCount.innerHTML = `- ₹${Math.trunc(totalsum * 0.3)}`;
        div3orderTotal.innerHTML = `₹${Math.trunc(totalsum * 0.7)}`;
    }
    promoCodeInput.value = "";
});

let loadingAnimation = document.getElementById("loading-animation");
let buttonPurchased = document.getElementById("purchased");

buttonPurchased.onclick = async function (e) {
    e.preventDefault();
    let cardNumber = document.querySelector(".cardNumber");
    let month = document.querySelector(".month");
    let cvv = document.querySelector(".cvv");
    let cardholderName = document.querySelector(".cardholderName");
    if (
        cardNumber.value != "" &&
        month.value != null &&
        cvv.value != "" &&
        cardholderName.value != ""
    ) {
        cardNumber.value = "";
        month.value = null;
        cvv.value = "";
        cardholderName.value = "";
        loadingAnimation.style.display = "block"
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("ordered successfully");
            }, 5000);
        });

        let res = await promise;
        window.location.href = "purchased.html";
    } else {
        alert("fill all the fields");
    }
};
let i = 0;
let promoCodeSection = document.getElementById("promoCodeSection");
let promoCodeInputCheckBox = document.getElementById(
    "promoCodeInputCheckBox"
);
promoCodeInputCheckBox.onclick = function () {
    check();

    function check() {
        if (i == 0) {
            promoCodeSection.style.backgroundColor = "#00BAC6";
            i = 1;
        } else {
            promoCodeSection.style.backgroundColor = "#efefef";
            i = 0;
        }
    }
};

let j = 1;
let paymentSection = document.getElementById("paymentSection");
let paymentOptionCheckBox = document.getElementById("paymentOptionCheckBox");
paymentOptionCheckBox.onclick = function () {
    check();

    function check() {
        if (j == 0) {
            paymentSection.style.backgroundColor = "#00BAC6";
            j = 1;
        } else {
            paymentSection.style.backgroundColor = "#efefef";
            j = 0;
        }
    }
};
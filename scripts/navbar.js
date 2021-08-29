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



//===========================CART=====================================
//====================================================================
//====================================================================
//====================================================================
let shopping_cart = document.querySelector(".shopping_cart");
shopping_cart.addEventListener("click", async () => {
    let res = await fetch("http://localhost:2345/cart");
    let cart = await res.json();

    cart.map((el, i) => {
        buy(el, i);
    });
});

async function buy(el, j) {
    let res = await fetch("http://localhost:2345/cart");
    let cart = await res.json();
    let modalBuy = document.querySelector(".bg_modal");
    modalBuy.style.display = "flex";
    let middle_section = document.querySelector(".middle_section");
    let eachDiv = document.createElement("div");
    eachDiv.setAttribute("class", "eachDiv");
    let eachDivFirstSection = document.createElement("div");
    eachDivFirstSection.setAttribute("class", "eachDivFirstSection");
    let pName = document.createElement("p");
    pName.innerHTML = `Blue Block Phone & Computer Glasses: ${el.frameColor}${el.frameShape} ${el.brand} LB E13736-C4`;

    let productTag = document.createElement("div");
    productTag.setAttribute("class", "productTag");
    let checkOutImg = document.createElement("img");
    checkOutImg.src =
        "https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/100x100/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-blu-lb-e14069-c4-eyeglasses_g_1293.jpg";
    let pQty = document.createElement("p");
    pQty.innerHTML = "Qty";
    let boxInput = document.createElement("input");
    boxInput.type = "number";
    boxInput.value = el.qty;
    boxInput.setAttribute("id", "boxInput");
    productTag.append(checkOutImg, pQty, boxInput);

    eachDivFirstSection.append(pName, productTag);

    let eachDivSecondSection = document.createElement("div");
    eachDivSecondSection.setAttribute("class", "eachDivSecondSection");
    let pricePara = document.createElement("p");
    pricePara.textContent = "PRODUCT PRICE";
    let signSpan = document.createElement("span");
    signSpan.textContent = "₹";
    let productPricePara = document.createElement("p");
    productPricePara.innerHTML = el.price;
    eachDivSecondSection.append(pricePara, signSpan, productPricePara);

    let eachDivLastSection = document.createElement("div");
    eachDivLastSection.setAttribute("class", "eachDivLastSection");
    let crossSign = document.createElement("i");
    crossSign.setAttribute("class", `ion-close-round ${j} crossIcon2`);

    let subtotalPara = document.createElement("p");
    subtotalPara.textContent = "SUBTOTAL";
    let productPriceParaAgain = document.createElement("p");
    productPriceParaAgain.innerHTML = `${
    Number(el.price) * Number(boxInput.value)
  }`;

    let totalPrice = document.querySelector(".total_price");

    boxInput.onchange = async () => {
        let res = await fetch("http://localhost:2345/cart");
        cart = await res.json();
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]._id == el._id) {
                el.qty = boxInput.value;
                res = await fetch(`http://localhost:2345/cart/${el._id}`, {
                    method: "DELETE",
                });
            }
        }

        let body = JSON.stringify(el);
        res = await fetch("http://localhost:2345/cart", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        });

        res = await fetch("http://localhost:2345/cart");
        cart = await res.json();

        productPriceParaAgain.textContent = `${
      Number(el.price) * Number(boxInput.value)
    }`;
        let totalMoney = cart.reduce((acc, el) => {
            return acc + Number(el.qty) * Number(el.price);
        }, 0);
        totalPrice.innerHTML = `Order Total: ${totalMoney}`;
    };
    let totalMoney = cart.reduce((acc, el) => {
        return acc + Number(el.qty) * Number(el.price);
    }, 0);
    totalPrice.innerHTML = `Order Total: ${totalMoney}`;

    crossSign.onclick = async () => {
        let res = await fetch(`http://localhost:2345/cart/${el._id}`, {
            method: "DELETE",
        });
        res = await fetch("http://localhost:2345/cart");
        cart = await res.json();
        if (cart.length == 0) {
            totalPrice.innerHTML = `Order Total: 0`;
        }
        middle_section.innerHTML = "";
        cart.map((el, i) => {
            buy(el, i);
        });
    };

    eachDivLastSection.append(crossSign, subtotalPara, productPriceParaAgain);

    eachDiv.append(
        eachDivFirstSection,
        eachDivSecondSection,
        eachDivLastSection
        // dummyImg
    );
    middle_section.append(eachDiv);
    let button_checkout = document.querySelector(".button_checkout");
    button_checkout.addEventListener("click", function () {
        window.location.href = "address.html";
    });
}

let iconCross = document.querySelector(".iconClose");
iconCross.addEventListener("click", function () {
    let modalBuy = document.querySelector(".bg_modal");
    modalBuy.style.display = "none";
    let middle_section = document.querySelector(".middle_section");
    middle_section.innerHTML = "";
});
setTimeout(function () {
    console.clear();
}, 1000)
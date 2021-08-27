console.clear();

var i = 0;

var arr_imgs = [
  "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/UpdatedBanner1912360_16thJune21.jpg",
  "https://static1.lenskart.com/media/desktop/img/Monsoonweb.jpg",
  "https://static1.lenskart.com/media/desktop/img/Mar21/FlexAppeal_Desktop_12thMay21.png",
  "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/14thMay_Eyeglasses_DesktopBanner_17thMay21.jpg",
];
setInterval(() => {
  if (i < arr_imgs.length) {
    var imgBox = document.getElementById("slide-show-img-box");
    imgBox.innerHTML = "";
    var img = document.createElement("img");
    img.setAttribute("src", arr_imgs[i]);
    img.setAttribute("id", "slide-show-img");
    imgBox.append(img);
    i = i + 1;
  }

  if (i == 4) {
    i = 0;
  }
}, 3000);
///////////////////////////////////

function productScroll() {
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previous button
      if (position >= 1) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < 11) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }
}
productScroll();

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

/// 3 images sliding start here
let wrapper = document.getElementsByClassName("wrapper");
let button = document.getElementById("click");
let button2 = document.getElementById("click2");
let button3 = document.getElementById("clicks");
let button4 = document.getElementById("clicks2");

button.addEventListener("click", clicked);
button2.addEventListener("click", clicked2);
button3.addEventListener("click", clickeds);
button4.addEventListener("click", clickeds2);

let scroll = 0;

function clicked() {
  scroll = scroll += 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[0].scrollLeft + 50;
}

function clicked2() {
  scroll = scroll -= 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[0].scrollLeft + 50;
}

function clickeds() {
  scroll = scroll += 500;
  wrapper[1].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[1].scrollLeft + 50;
}

function clickeds2() {
  scroll = scroll -= 500;
  wrapper[1].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[1].scrollLeft + 50;
}

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

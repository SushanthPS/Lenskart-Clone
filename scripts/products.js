let productWindow = document.querySelector(".product-window");

async function getApi() {
  let res = await fetch("http://localhost:2345/product");
  let data = await res.json();
  return data;
}
async function dataret() {
  let data = await getApi();
  showProducts(data);
  addListener();
}

dataret();

function showProducts(e) {
  productWindow.innerHTML = topFilterBar();
  let glasses = e;
  let index = 0;
  let j = 0;
  for (let i = 0; i < glasses.length; i++) {
    if (j == 0) {
      var divRow = document.createElement("div");
      divRow.setAttribute("class", "productRow");
      productWindow.append(divRow);
    }
    let diveachProd = document.createElement("div");
    diveachProd.setAttribute("class", "eachProd");
    diveachProd.value = glasses[i].link;

    let heartIcon = document.createElement("i");
    heartIcon.setAttribute("class", `${glasses[i].i} icon`);

    let img = document.createElement("img");
    img.removeAttribute("id");
    img.setAttribute("id", `${index}`);
    index++;
    img.src = glasses[i].img;

    let divSpecification = document.createElement("div");
    divSpecification.setAttribute("class", "divSpecification");

    let pBrand = document.createElement("p");
    pBrand.innerHTML = glasses[i].brand;

    let divRating = document.createElement("div");
    let spanRating = document.createElement("span");
    spanRating.innerHTML = glasses[i].rating;
    let iStar = document.createElement("i");
    iStar.setAttribute("class", `${glasses[i].star}`);
    divRating.setAttribute("class", "divRating");
    divRating.append(spanRating, iStar);

    let priceButton = document.createElement("div");
    let pPriceTag = document.createElement("p");
    pPriceTag.innerHTML = glasses[i].priceImg;
    let pPrice = document.createElement("p");
    pPrice.innerHTML = glasses[i].price;
    let divSPace = document.createElement("div");
    divSPace.setAttribute("class", "space");
    let button = document.createElement("button");
    button.textContent = "Try On";
    let iSample = document.createElement("img");
    iSample.src = glasses[i].sample;
    priceButton.setAttribute("class", "priceButton");
    priceButton.append(pPriceTag, pPrice, divSPace, button, iSample);

    let divSize = document.createElement("div");
    divSize.innerHTML = `Size: ${glasses[i].size}`;

    divSpecification.append(pBrand, divRating, priceButton, divSize);

    diveachProd.append(heartIcon, img, divSpecification);
    divRow.appendChild(diveachProd);
    j++;
    if (j == 3) {
      j == 0;
    }
  }
}

let divfullRim = document.querySelector(".fullRim");
divfullRim.addEventListener("click", async function () {
  let pfullRim = document.getElementById("fullRim");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameType == pfullRim.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divhalfRim = document.querySelector(".halfRim");
divhalfRim.addEventListener("click", async function () {
  let phalfRim = document.getElementById("halfRim");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameType == phalfRim.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divrimless = document.querySelector(".rimless");
divrimless.addEventListener("click", async function () {
  let primless = document.getElementById("rimless");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameType == primless.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divrectangle = document.querySelector(".rectangle");
divrectangle.addEventListener("click", async function () {
  let prectangle = document.getElementById("rectangle");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == prectangle.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divround = document.querySelector(".round");
divround.addEventListener("click", async function () {
  let pround = document.getElementById("round");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == pround.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divcatEye = document.querySelector(".catEye");
divcatEye.addEventListener("click", async function () {
  let pcatEye = document.getElementById("catEye");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == pcatEye.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divsquare = document.querySelector(".square");
divsquare.addEventListener("click", async function () {
  let psquare = document.getElementById("square");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == psquare.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divaviator = document.querySelector(".aviator");
divaviator.addEventListener("click", async function () {
  let paviator = document.getElementById("aviator");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == paviator.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divwayfarer = document.querySelector(".wayfarer");
divwayfarer.addEventListener("click", async function () {
  let pwayfarer = document.getElementById("wayfarer");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == pwayfarer.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divhexagonal = document.querySelector(".hexagonal");
divhexagonal.addEventListener("click", async function () {
  let phexagonal = document.getElementById("hexagonal");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == phexagonal.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

let divclubmaster = document.querySelector(".clubmaster");
divclubmaster.addEventListener("click", async function () {
  let pclubmaster = document.getElementById("clubmaster");
  let data = await getApi();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].frameShape == pclubmaster.innerHTML) {
      newData.push(data[i]);
    }
  }
  productWindow.innerHTML = "";
  showProducts(newData);
  addListener();
});

function addListener() {
  var div = document.querySelectorAll(".eachProd");
  for (let i = 0; i < div.length; i++) {
    div[i].addEventListener("click", async function () {
      localStorage.removeItem("clickedObj");
      let image = document.getElementById(`${i}`);
      data1 = await getApi();
      for (let j = 0; j < data1.length; j++) {
        if (data1[j].img == image.src) {
          localStorage.setItem("clickedObj", JSON.stringify(data1[j]));
          window.location.href = "onepage.html";
          return true;
        }
      }
    });
  }
}

function topFilterBar() {
  return `
    <div id="product-window-top">
      <div>ALL GLASSES</div>
      <div class="space"></div>
      <div id="toggle_section">
        <div>VIEW FRAMES</div>
        <div>
          <a href="tryon.html" class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </a>
        </div>
        <div>VIEW 3D TRY ON</div>
      </div>
      <div class="space"></div>
      <div id="product-window-top-filter-section">
        <div>SORT BY</div>
        <select
          id="product-window-top-filter-section-filter"
          onchange="filterGlasses()"
        >
          <option value="bestSellers">Best Sellers</option>
          <option value="priceLowToHigh">Price : Low To High</option>
          <option value="priceHighToLow">Price : High To Low</option>
          <option value="new">New</option>
          <option value="bigSaving">Biggest Saving</option>
          <option value="mostViewed">Most Viewed</option>
        </select>
      </div>
    </div>
  `;
}

async function filterGlasses() {
  let filter = document.getElementById(
    "product-window-top-filter-section-filter"
  );
  let data = await getApi();
  if (filter.value == "priceHighToLow") {
    data = data.sort((a, b) => +b.price - +a.price);
  } else if (filter.value == "priceLowToHigh") {
    data = data.sort((a, b) => +a.price - +b.price);
  }
  productWindow.innerHTML = "";
  showProducts(data);
  addListener();
}
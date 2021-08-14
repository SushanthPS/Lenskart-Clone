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
        if ((position >= 1)) {
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
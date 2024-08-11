var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

function url() {
  fbq("track", "Purchase");
  fbq("track", "SubmitApplication");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}

var closeBtn = document.getElementById("close-btn");
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

$(document).ready(function () {
  function coinapi() {
    $.ajax({
      type: "GET", // Use GET method for fetching data
      dataType: "json",
      url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,DOGE,ADA,BNB,SOL,CRO,BCH&tsyms=USD",
      success: function (data) {
        const btcprice = data.DISPLAY.BTC.USD.PRICE;
        const btcpercent = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
        const btctopprice = data.DISPLAY.BTC.USD.CIRCULATINGSUPPLYMKTCAP;

        const ethprice = data.DISPLAY.ETH.USD.PRICE;
        const ethpercent = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR;
        const ethtopprice = data.DISPLAY.ETH.USD.CIRCULATINGSUPPLYMKTCAP;

        const adaprice = data.DISPLAY.ADA.USD.PRICE;
        const adapercent = data.DISPLAY.ADA.USD.CHANGEPCT24HOUR;
        const adatopprice = data.DISPLAY.ADA.USD.CIRCULATINGSUPPLYMKTCAP;

        const dogeprice = data.DISPLAY.DOGE.USD.PRICE;
        const dogepercent = data.DISPLAY.DOGE.USD.CHANGEPCT24HOUR;
        const dogetopprice = data.DISPLAY.DOGE.USD.CIRCULATINGSUPPLYMKTCAP;

        const croprice = data.DISPLAY.CRO.USD.PRICE;
        const cropercent = data.DISPLAY.CRO.USD.CHANGEPCT24HOUR;
        const crotopprice = data.DISPLAY.CRO.USD.CIRCULATINGSUPPLYMKTCAP;

        const list = [
          { price: btcprice, percent: btcpercent, topprice: btctopprice },
          { price: ethprice, percent: ethpercent, topprice: ethtopprice },
          { price: adaprice, percent: adapercent, topprice: adatopprice },
          { price: dogeprice, percent: dogepercent, topprice: dogetopprice },
          { price: croprice, percent: cropercent, topprice: crotopprice },
        ];

        $(".price").each(function (index) {
          if (index < list.length) {
            $(this).html(list[index].price);
          }
        });
        $(".percent").each(function (index) {
          if (index < list.length) {
            $(this).html(list[index].percent + "%");
            $(this).removeClass("red");
            if (list[index].percent < 0) {
              $(this).addClass("red");
            }
          }
        });
        $(".topprice").each(function (index) {
          if (index < list.length) {
            $(this).html(list[index].topprice);
          }
        });

        // Price2
        $(".price2").each(function (index) {
          if (index < list.length) {
            $(this).html(list[index].price);
          }
        });
        // Percent1
        $(".percent2").each(function (index) {
          if (index < list.length) {
            $(this).html(list[index].percent + "%");
          }
        });
      },
      error: function (status, error) {
        console.error("AJAX request failed:", status, error);
      },
    });
  }
  coinapi();
  setInterval(() => {
    coinapi();
  }, 10000);
});

let isdark = false;
const body = document.getElementById("body");
const matching = document.getElementById("matching");
const mode = document.getElementById("mode");
const modeIcon = document.getElementById("mode-icon");
const modeColor = document.querySelectorAll(".mode-color");
const gredient = document.querySelectorAll(".bg-blue-grideant");

mode.addEventListener("click", () => {
  isdark = !isdark;
  if (!isdark) {
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
    mode.classList.add("justify-start", "bg-gray-500");
    mode.classList.remove("justify-end", "bg-gray-300");

    for (let i = 0; i < modeColor.length; i++) {
      modeColor[i].classList.add("bg-slate-800");
      modeColor[i].classList.remove("bg-white");
      modeColor[i].classList.add("text-white");
      modeColor[i].classList.remove("text-black");
    }

    for (let i = 0; i < gredient.length; i++) {
      gredient[i].classList.remove("light");
    }
  } else {
    modeIcon.classList.add("fa-moon");
    modeIcon.classList.remove("fa-sun");
    mode.classList.remove("justify-start", "bg-gray-500");
    mode.classList.add("justify-end", "bg-gray-300");

    for (let i = 0; i < modeColor.length; i++) {
      modeColor[i].classList.add("bg-white");
      modeColor[i].classList.remove("bg-slate-800");
      modeColor[i].classList.add("text-black");
      modeColor[i].classList.remove("text-white");
    }
    for (let i = 0; i < gredient.length; i++) {
      gredient[i].classList.add("light");
    }
  }
});

AOS.init();

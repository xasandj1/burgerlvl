const products = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    amount: 0,
    kcall: 120,
    get Summ() {
      return this.amount * this.price;
    },
    get Kcall() {
      return this.amount * this.kcall;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH",
    price: 20500,
    amount: 0,
    kcall: 170,
    get Summ() {
      return this.amount * this.price;
    },
    get Kcall() {
      return this.amount * this.kcall;
    },
  },
  freshCombo: {
    name: "FRESH COMBO",
    price: 31900,
    amount: 0,
    kcall: 235,
    get Summ() {
      return this.amount * this.price;
    },
    get Kcall() {
      return this.amount * this.kcall;
    },
  },
};

const plusMinusBtn = document.querySelectorAll(".main__product-btn");

for (let i = 0; i < plusMinusBtn.length; i++) {
  plusMinusBtn[i].addEventListener("click", function () {
    plusMinus(this);
  });
}
function plusMinus(el) {
  const parent = el.closest(".main__product"),
    parentId = parent.getAttribute("id"),
    outNum = parent.querySelector(".main__product-num"),
    outPrice = parent.querySelector(".main__product-price span"),
    outcKcall = parent.querySelector(".main__product-kcall span"),
    parentSym = el.getAttribute("data-symbol");

  if (parentSym == "+") {
    products[parentId].amount++;
  } else if (parentSym == "-" && products[parentId].amount > 0) {
    products[parentId].amount--;
  }
  outNum.innerHTML = products[parentId].amount;
  outPrice.innerHTML = products[parentId].Summ;
  outcKcall.innerHTML = products[parentId].Kcall;
}

const addCart = document.querySelector(".addCart"),
  receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptOut = document.querySelector(".receipt__window-out"),
  receiptBtn = document.querySelector(".receipt__window-btn");

let totalProduct = [],
  totalName = "",
  totalPrice = 0,
  totalKcall = 0;

addCart.addEventListener("click", function () {
  for (const key in products) {
    let pro = products[key];
    if (pro.amount > 0) {
      totalProduct.push(pro);
    }
    pro.price = pro.Summ;
    pro.kcall = pro.Kcall;
  }
  for (let i = 0; i < totalProduct.length; i++) {
    const el = totalProduct[i];
    totalName += el.name + " ";
    totalPrice += el.price;
    totalKcall += el.kcall;
  }
  receiptOut.innerHTML = `Total products: ${totalName} \n\nTotal Calory: ${totalKcall} Calory \n\nTotal Price:${totalPrice} summa \n\nDate: ${info()}`;

  receipt.style.display = "flex";

  setTimeout(() => {
    receipt.style.opacity = "1";
  }, 300);
  setTimeout(() => {
    receiptWindow.style.top = "20%";
  }, 400);

  let element = document.querySelectorAll(
    ".main__product-num, .main__product-price span, .main__product-kcall span"
  );
  for (let k = 0; k < element.length; k++) {
    element[k].innerHTML = 0;
  }
});

function info() {
  let time = new Date(),
    s = time.getSeconds(),
    m = time.getMinutes(),
    h = time.getHours(),
    day = time.getDate(),
    month = time.getMonth(),
    year = time.getFullYear();

  return `${h}:${m}:${s}  ${day}.${month}.${year}`;
}
receiptBtn.addEventListener("click", function () {
  receipt.style.display = "none";
  setTimeout(() => {
    alert("Good Job ❤️");
    location.reload();
  }, 100);
});

let view = document.querySelector(".view");
let title = document.querySelectorAll(".main__product-info");
let button = view.querySelector(".view__close");

for (let i = 0; i < title.length; i++) {
  const element = title[i];
  element.addEventListener("click", function () {
    imgInfo(this);
  });
}

function imgInfo(e) {
  let parent = e.closest(".main__product");
  let view = document.querySelector(".view");
  let imgInfo = parent.querySelector(".main__product-info img");
  let srcImg = imgInfo.getAttribute("src");

  view.classList.add("active");

  let viewImg = view.querySelector(".view img");
  viewImg.setAttribute("src", srcImg);
}

let view2 = document.querySelector(".view");
let closet = view2.querySelector(".view__close");
closet.onclick = function () {
  view2.classList.remove("active");
};
let levl = document.querySelector(".header__timer-extra");
let speed = 20;
function counter(i = 0) {
  i++;
  levl.innerHTML = i;
  if (i > 25 && i < 50) {
    speed = 40;
  } else if (i > 50 && i < 75) {
    speed = 60;
  } else if (i > 75 && i < 90) {
    speed = 95;
  } else if (i > 90 && i < 100) {
    speed = 120;
  }
  if (i < 100) {
    setTimeout(() => {
      counter(i);
    }, speed);
  }
}
counter();

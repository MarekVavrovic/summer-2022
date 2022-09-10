





const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});







let filteredProducts = [...vacation];
const productsContainer = document.querySelector(".products-container");

//01. iterate over vacation and display them

const displayProducts = () => {
  //03. if codition
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h1>No match in description found. Please use the keyword from description to find an image. Keywords are located below each picture....</h1>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, name, image }) => {
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
            <div class="text-box">
      <h4>${title}</h4>
      <p>${name}</p>
            </div>

          <footer>
            <h5 class="product-name">${title}</h5>           
          </footer>
        </article>`;
    })
    .join("");
};

displayProducts();

//02. Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value.toLowerCase();
  filteredProducts = vacation.filter((vac) => {
    return vac.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

//get unique FILTER BUTTON names
const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = ["all", ...new Set(vacation.map((name) => name.name).flat())];

  companiesDOM.innerHTML = buttons
    .map((name) => {
      return `<button class='company-btn' data-id="${name}">${name}</button>`;
    })
    .join("");
};

displayButtons();

//FITER BUTTONS: click event
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...vacation];
    } else {
      filteredProducts = vacation.filter((item) => {
        return item.name.includes(el.dataset.id);
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});





// back to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

mybutton.addEventListener("click", function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    topFunction();

  } else {
    mybutton.style.display = "none";
  }

}

);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





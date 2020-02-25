const cookieContainer = document.querySelector(".cookie-wrapper");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);


// SIDIBAR JS
const sidebar = document.querySelector('.sidebar')
const mainContainer = document.querySelector('.main-container')
const mainMenu = document.querySelector('#main-menu')
const toggleWrap = document.querySelector('.toggle-wrap')

// Replaced toggleWrap to MainMenu
mainMenu.addEventListener('click', function (e) {
  // STOP EVENT BUBBLING
  e.stopPropagation();
  toggleWrap.classList.add('active');
  sidebar.classList.add('sidebar-width')
  mainContainer.classList.add('after')
  mainContainer.classList.add('main-left')
})

function closeSideBar() {
  toggleWrap.classList.remove('active')
  sidebar.classList.remove('sidebar-width')
  mainContainer.classList.remove('after')
  mainContainer.classList.remove('main-left')
}


// Cookie banner
const cookieWrapper = document.querySelector('.cookie-wrapper')
const cookieBtn = document.querySelector('.cookie-btn')

cookieBtn.addEventListener('click', function() {
  cookieWrapper.style.display = 'none';  
  window.localStorage.setItem('name', 'slick');
})

if (window.localStorage.getItem('name') == 'slick'){
  // console.log('works');
  cookieWrapper.style.display = 'none';   
}


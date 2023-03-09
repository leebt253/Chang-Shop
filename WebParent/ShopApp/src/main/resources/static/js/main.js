// mobile menu 
const filterOpen = document.querySelector('#filter-open')
const filterWrapper = document.querySelector('#filter-wrapper')
const filterClose = document.querySelector('#filter-close')

let isFilterOpen = false

filterOpen.addEventListener('click', function () {
    if (isFilterOpen === true) {
        filterWrapper.classList.remove('!left-0')
        isFilterOpen = false
    } else {
        filterWrapper.classList.add('!left-0')
        isFilterOpen = true
    }

})

filterClose.addEventListener('click', function () {
    filterWrapper.classList.remove('!left-0')
    isFilterOpen = false
})
// mobile menu end



// shopping card-script
var shopingBtns = document.getElementsByClassName('shoping-btn')
var cartWrapper = document.getElementById('cart-wrapper')
var cartBox = document.getElementById('cart-box')
var closeCart = document.getElementById('close-cart')


function cartClose() {
    cartWrapper.classList.remove('!opacity-100')
    cartWrapper.classList.remove('!visible')
    cartBox.classList.remove('!right-0')
}

for (let shopingBtn of shopingBtns) {
    shopingBtn.addEventListener('click', function () {
        cartWrapper.classList.add('!opacity-100')
        cartWrapper.classList.add('!visible')
        cartBox.classList.add('!right-0')
    })
}

closeCart.addEventListener('click', function () {
    cartClose()
})

// click outside-shoping btn
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart-wrap')) {
        cartClose()
    }
})


// mobile menu item
const accTitles = document.getElementsByClassName('acc-title')
const accContents = document.getElementsByClassName('acc-content')
const arrowIcons = document.getElementsByClassName('arrow-icon')

for (let title of accTitles) {
  title.addEventListener('click', function () {
    if (this.nextElementSibling.classList.contains('hidden')) {
      closeAll()
      this.nextElementSibling.classList.remove('hidden')
      this.querySelector('.arrow-icon').classList.add('rotate-180')
    } else {
      closeAll()
    }

  })
}

function closeAll() {
  for (let content of accContents) {
    content.classList.add('hidden')
  }

  for (let arrow of arrowIcons) {
    arrow.classList.remove('rotate-180')
  }
}
// mobile menu item end

//  login-regestar
var loginRegestar = document.getElementsByClassName('login-regestar')
var loginWrapper = document.getElementById('login-wrapper')
var closeLogin = document.getElementById('close-login')

for (var x = 0; x < loginRegestar.length; x++) {
  loginRegestar[x].addEventListener('click', function () {
    loginWrapper.classList.remove('hidden')
    signupWrapper.classList.add('hidden')
  })
}

closeLogin.addEventListener('click', function () {
  loginWrapper.classList.add('hidden')
})
// login-regestar-end

//  sign up-regestar
var signupRegestar = document.getElementsByClassName('signup-regestar')
var signupWrapper = document.getElementById('signup-wrapper')
var closeSignup = document.getElementById('close-signup')

for (var x = 0; x < signupRegestar.length; x++) {
  signupRegestar[x].addEventListener('click', function () {
    signupWrapper.classList.remove('hidden')
    loginWrapper.classList.add('hidden')
  })
}

closeSignup.addEventListener('click', function () {
  signupWrapper.classList.add('hidden')
})
// sign up-regestar-end

// preloader
window.addEventListener('load', (event) => {
  let preloader = document.querySelector('.preloader')
  setTimeout(() => {
      preloader.classList.add('transition-all')
      preloader.classList.add('duration-500')
      preloader.classList.add('invisible')
      preloader.classList.add('!opacity-0')
  }, 100)
});
// preloader end
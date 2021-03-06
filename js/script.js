// reveal mobile menu
const toggleMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}
toggleMenu('nav-toggle', 'nav-menu')

// remove mobile menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// indicate active link when scrolling
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
window.addEventListener('scroll', scrollActive)

// change background header
function scrollHeader() {
  const header = document.getElementById('header')

  // when scroll is greater than 200vh - change the header color
  if (this.scrollY >= 200) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll top button
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')

  // when scroll is greater than 200vh - show the button
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// swiper carousel
const swiper = new Swiper('.testimonial-container', {

  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breapoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }

});

// accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// display current year on footer
today =  new Date();
year = today.getFullYear();
document.querySelector(".footer-copy span").innerText = year;
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
link1.addEventListener('click', showDropDown1)
link2.addEventListener('click', showDropDown2)
link3.addEventListener('click', showDropDown3)

function showDropDown1() {
  document.querySelector('#drop-down1').classList.toggle('active')
  document.querySelector('#drop-down2').classList.remove('active')
  document.querySelector('#drop-down3').classList.remove('active')
}

function showDropDown2() {
  document.querySelector('#drop-down2').classList.toggle('active')
  document.querySelector('#drop-down1').classList.remove('active')
  document.querySelector('#drop-down3').classList.remove('active')
}

function showDropDown3() {
  document.querySelector('#drop-down3').classList.toggle('active')
  document.querySelector('#drop-down2').classList.remove('active')
  document.querySelector('#drop-down1').classList.remove('active')
}

// remove the active class when body is clicked
document.addEventListener('click', removeActiveFromBody)

function removeActiveFromBody(e) {
  let isActive = e.target.matches('.links')

  if (isActive === true) {
    return
  } else {
    document.querySelector('#drop-down1').classList.remove('active')
    document.querySelector('#drop-down2').classList.remove('active')
    document.querySelector('#drop-down3').classList.remove('active')
  }
}

// hamburger menu and show mobile menu

const hamburger = document.querySelector('.header button img:nth-child(1)')
hamburger.addEventListener('click', showMenu)
const closeBtn = document.querySelector('.header button img:nth-child(2)')
closeBtn.addEventListener('click', closemenu)
function showMenu() {
  closeBtn.style.display = 'block'
  hamburger.style.display = 'none'
  document.querySelector('.overlay').style.opacity = '1'
}

function closemenu() {
  hamburger.style.display = 'block'
  closeBtn.style.display = 'none'
  document.querySelector('.overlay').style.opacity = '0'
}

// mobile menu drop-downs
let drpp1 = document.querySelector('.drpp1')
let test1 = document.querySelector('.drp1')
test1.addEventListener('click', slideDown1)

function slideDown1() {
  drpp1.style.maxHeight = '200px'
  drpp2.style.maxHeight = '0px'
  drpp3.style.maxHeight = '0px'
}

let drpp2 = document.querySelector('.drpp2')
let test2 = document.querySelector('.drp2')
test2.addEventListener('click', slideDown2)

function slideDown2() {
  drpp2.style.maxHeight = '200px'
  drpp1.style.maxHeight = '0px'
  drpp3.style.maxHeight = '0px'
}

let drpp3 = document.querySelector('.drpp3')
let test3 = document.querySelector('.drp3')
test3.addEventListener('click', slideDown3)

function slideDown3() {
  drpp3.style.maxHeight = '200px'
  drpp1.style.maxHeight = '0px'
  drpp2.style.maxHeight = '0px'
}

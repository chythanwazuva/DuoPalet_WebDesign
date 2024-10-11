/*=============== TRAIN ===============*/
let train = document.getElementById("train");
window.addEventListener ('scroll', ()=>{
    let value = window.scrollY;
    train.style.left = value * 1.5 + "px";})

/*=============== SHOW MENU ===============*/
const menu = document.getElementById('menu'),
      toggle = document.getElementById('toggle'),
      close = document.getElementById('close')

if(toggle){
    toggle.addEventListener('click', ()=> {
        menu.classList.add('show-menu')
    })
}

if(close){
    close.addEventListener('click', () => {
        menu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const link = document.querySelectorAll('.link')

const linkAction = () =>{
    const menu = document.getElementById('menu')
    menu.classList.remove('show-menu')
}

link.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.getElementById('section[id]')

const srollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current. offsetHeight,
              sectionTop = current. offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.menu a[href*=' + sectionId )

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{sectionsClass.classList.remove('active-link')}
    })
}
window.addEventListener('scroll', scrollActive)

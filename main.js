//para descobrir erro em java aperta f12, console
//java recebe number, char=string=caracter, boolean= true or false
//DOM Document Object Model usado para chamar variaveis no documento que é a modelagem do html.
//uma forma de ver o que está em f12 console é criar console.log(variavel)

/*abre e fecha o menu no ícone hamburguer, cria a constante e manda buscar no documento todos os seletores dentro do () e atribui a constante. */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//essa funcionalidade vai fazer o clique no icone
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
//essa funçao indica para ele repetir em todos os links do menu, que sao 5, e remover a classe show, assim esconde o menu
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* mudar o header da pagina quando fizer scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*ScrollReveal: Mostra elementos quando der scrool na pagina*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social
`,
  { interval: 100 }
)

/* Botton Back to top */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu ativo conforme a seção visivel na página*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

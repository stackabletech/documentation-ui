;(function () {
  'use strict'

  var navbarBurger = document.querySelector('.navbar-burger')
  if (!navbarBurger) return
  navbarBurger.addEventListener('click', toggleNavbarMenu.bind(navbarBurger))

  function toggleNavbarMenu (e) {
    e.stopPropagation()
    //document.documentElement.classList.toggle('is-clipped--navbar')
    this.classList.toggle('is-active')
    var menu = document.getElementById(this.dataset.target)

    if (!menu.classList.contains('is-active')) {
      menu.classList.add('is-active')
      menu.style.height = 'auto'
      var height = Math.min(menu.clientHeight, window.innerHeight - 69) + 'px'
      menu.style.height = '0px'

      setTimeout(() => {
        menu.style.height = height
      }, 0)
    } else {
      menu.style.height = '0px'
      menu.addEventListener('transitionend', () => {
        menu.classList.remove('is-active')
        menu.style.height = 'auto'
      }, { once: true })
    }
    /*
    if (menu.classList.toggle('is-active')) {
      menu.style.maxHeight = ''
      var expectedMaxHeight = window.innerHeight - Math.round(menu.getBoundingClientRect().top)
      var actualMaxHeight = parseInt(window.getComputedStyle(menu).maxHeight, 10)
      if (actualMaxHeight !== expectedMaxHeight) menu.style.maxHeight = expectedMaxHeight + 'px'
    }
    */
  }
})()

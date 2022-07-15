const toggler = document.querySelector('.navbar__toggler')
const nav = document.querySelector('.navbar__nav')

toggler.onclick = () => {
  nav.classList.toggle('navbar__nav--show')
}

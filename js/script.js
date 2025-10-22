const productBtns = document.querySelectorAll(".p-btn");
const allBtn = document.getElementById('all-btn')
const sofaBtn = document.getElementById('sofa-btn')
const tablesBtn = document.getElementById('tables-btn')
const dayComplimentBtn = document.getElementById('day-compliments-btn')
const nightComplimentBtn = document.getElementById('night-compliments-btn')
const outdoorBtn = document.getElementById('outdoor-btn')

const sofa = document.getElementById('sofa')
const table = document.getElementById('tables')
const dayCompliment = document.getElementById('day-compliments')
const nightCompliment = document.getElementById('night-compliments')
const outdoor = document.getElementById('outdoor')


const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const navLinks  = document.getElementById('nav-links')


openNav.addEventListener('click', () => {
  navLinks.style.display = 'flex'
  openNav.style.display = 'none'
  closeNav.style.display = 'block'
})


closeNav.addEventListener('click', () => {
  navLinks.style.display = 'none'
  openNav.style.display = 'block'
  closeNav.style.display = 'none'
})


sofaBtn.addEventListener('click', () => {
    sofa.style.display = 'grid'
    table.style.display = 'none'
    dayCompliment.style.display = 'none'
    nightCompliment.style.display = 'none'
    outdoor.style.display = 'none'
})


tablesBtn.addEventListener('click', () => {
    sofa.style.display = 'none'
    table.style.display = 'grid'
    dayCompliment.style.display = 'none'
    nightCompliment.style.display = 'none'
    outdoor.style.display = 'none'
})


dayComplimentBtn.addEventListener('click', () => {
    sofa.style.display = 'none'
    table.style.display = 'none'
    dayCompliment.style.display = 'grid'
    nightCompliment.style.display = 'none'
    outdoor.style.display = 'none'
})


nightComplimentBtn.addEventListener('click', () => {
    sofa.style.display = 'none'
    table.style.display = 'none'
    dayCompliment.style.display = 'none'
    nightCompliment.style.display = 'grid'
    outdoor.style.display = 'none'
})


outdoorBtn.addEventListener('click', () => {
    sofa.style.display = 'none'
    table.style.display = 'none'
    dayCompliment.style.display = 'none'
    nightCompliment.style.display = 'none'
    outdoor.style.display = 'grid'
})



allBtn.addEventListener('click', () => {
    sofa.style.display = 'grid'
    table.style.display = 'grid'
    dayCompliment.style.display = 'grid'
    nightCompliment.style.display = 'grid'
    outdoor.style.display = 'grid'
})


document.addEventListener("click", (event) => {

    let clickedInside = false;

  productBtns.forEach((btn) => {
    if (btn.contains(event.target)) {
      clickedInside = true;
      
    }
  });

  if (!clickedInside) {
    productBtns.forEach((btn) => {
      btn.style.backgroundColor = "none";
    });
  }
});

productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    productBtns.forEach((b) => (b.style.backgroundColor = ""));
    btn.style.backgroundColor = "#730000";

    productBtns.forEach((c) => (c.style.color = ""))
    btn.style.color = "white"
  });
});

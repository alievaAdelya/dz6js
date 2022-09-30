let doc = [
    {id: 1,  img: './img/image 1.png', title: 'wnw'},
]
let rupi = document.querySelector('.rupi')
doc.forEach((item) =>{
    rupi.innerHTML += '<div class="card" id="1"><img class="card__img" src="./img/image 1.png" alt="$item.subtitle"><h2 class="card__title">Syltherine</h2><h3>Stylish cafe chair</h3> <h2>Rp 2.500.000<h2><button class="a">Delete</button></div>',
    rupi.innerHTML += '<div class="card" id="2"><img class="card__img" src="./img/image 2.png" alt="$item.subtitle"><h2 class="card__title">Leviosa</h2><h3>Stylish cafe chair</h3> <h2>Rp 2.500.000<h2><button class="b">Delete</button></div>',
    rupi.innerHTML += '<div class="card" id="3"><img class="card__img" src="./img/image 3.png" alt="$item.subtitle"><h2 class="card__title">Lolito</h2><h3>Luxury big sofa</h3> <h2>Rp 7.000.000<h2><button  class="c" >Delete</button></div>',
    rupi.innerHTML += '<div class="card" id="4"><img class="card__img" src="./img/image 4.png" alt="$item.subtitle"><h2 class="card__title">Respira</h2><h3>Minimalist fan</h3><h2>Rp 500.000<h2><button  class="d">Delete</button> </div>',
    rupi.innerHTML += '<div class="card" id="5"><img class="card__img" src="./img/image 9.png" alt="$item.subtitle"><h2 class="card__title">Grifo</h2><h3>Night lamp</h3>  <h2>Rp 1.500.000<h2><button  class="e">Delete</button> </div>',
    rupi.innerHTML += '<div class="card" id="6"><img class="card__img" src="./img/image 6.png" alt="$item.subtitle"><h2 class="card__title">Muggo</h2><h3>Small mug</h3>   <h2>Rp 150.000<h2><button  class="f">Delete</button> </div>',
    rupi.innerHTML += '<div class="card" id="7"><img class="card__img" src="./img/image 7.png" alt="$item.subtitle"><h2 class="card__title">Pingky</h2><h3>Cute bed set</h3>   <h2>Rp 7.000.000<h2><button  class="j">Delete</button> </div>',
    rupi.innerHTML += '<div class="card" id="8"><img class="card__img" src="./img/image 8.png" alt="$item.subtitle"><h2 class="card__title">Potty</h2><h3>Minimalist flower pot</h3>   <h2>Rp 2.500.000<h2> <button  class="k">Delete</button></div>'
})  
const butn = document.querySelector(".a")
butn.addEventListener('click', () => {
    const div = document.getElementById('1')
    if (div) {
        div.remove()
    }
})
const kul = document.querySelector(".b")
kul.addEventListener('click', () => {
    const div = document.getElementById('2')
    if (div) {
        div.remove()
    }
})
const lop = document.querySelector(".c")
lop.addEventListener('click', () => {
    const div = document.getElementById('3')
    if (div) {
        div.remove()
    }
})
const pub = document.querySelector(".d")
pub.addEventListener('click', () => {
    const div = document.getElementById('4')
    if (div) {
        div.remove()
    }
})
const ili = document.querySelector(".e")
ili.addEventListener('click', () => {
    const div = document.getElementById('5')
    if (div) {
        div.remove()
    }
})
const fot = document.querySelector(".f")
fot.addEventListener('click', () => {
    const div = document.getElementById('6')
    if (div) {
        div.remove()
    }
})
const cert = document.querySelector(".j")
cert.addEventListener('click', () => {
    const div = document.getElementById('7')
    if (div) {
        div.remove()
    }
})
const job = document.querySelector(".k")
job.addEventListener('click', () => {
    const div = document.getElementById('8')
    if (div) {
        div.remove()
    }
})
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})

const nav = document.querySelectorAll('nav a');
const header = document.querySelector('header')
console.log(nav,header)

nav.forEach((obj, idx)=>{
    console.log(obj, idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        wrap.slideTo(idx, 1000);
    })
})


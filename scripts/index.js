//전체 수직 + 헤더 숨기보이기
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,

    on: {
        slideChange: function () {
            const header = document.querySelector('header'); // 또는 .site-header 등
            const currentIndex = this.realIndex;

            if (currentIndex >= 1 && currentIndex <= 4) {
                header.classList.remove('hide'); // 보여주기
            } else {
                header.classList.add('hide'); // 숨기기
            }
        }
    }
})
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    header.classList.add('hide');
});

//내비게이션 클릭 시 해당 위치 수직 스와이프로 이동 + 해당 스와이프 메뉴 활성화
const nav = document.querySelectorAll('nav a');
const header = document.querySelector('header')
console.log(nav,header)

function updateNav(activeIndex) {
    nav.forEach((link, i) => {
        link.classList.toggle('active', i === activeIndex);
    });
}

nav.forEach((obj, idx)=>{
    console.log(obj, idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        wrap.slideTo(idx, 1000);
        updateNav(idx);
    })
})

wrap.on('slideChange', function () {
    updateNav(this.realIndex);
});

//프로젝트 슬라이드
const project1 = new Swiper('#project_swiper',{
    //autoplay:{delay:3000},
    loop:true,
    scrollbar:{el:'#project_swiper~.swiper-scrollbar'},
    navigation:{
        nextEl:'#project_swiper~.swiper-button-next',
        prevEl:'#project_swiper~.swiper-button-prev',
    }
})
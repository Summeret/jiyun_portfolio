//전체 수직 + 헤더 숨기보이기
const wrap = new Swiper('#wrap',{
    //direction:'vertical',
    mousewheel:true,

    on: {
        slideChange: function () {
            const header = document.querySelector('header'); 
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
    autoplay:{delay:3500},
    loop:true,
    //scrollbar:{el:'#project_swiper~.swiper-scrollbar'},
    pagination: {
        el: '#project_swiper~.swiper-pagination',
        type:'bullets',
    },
    navigation:{
        nextEl:'#project_swiper~.swiper-button-next',
        prevEl:'#project_swiper~.swiper-button-prev',
    },
})

//sns 슬라이드
const sns = new Swiper('#sns_swiper',{
    slidesPerView:4,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:8000,
    loop:true,
})

const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide')
const snsPopupBg = document.querySelector('.sns_popupbg')
console.log(snsProject, snsPopupBg)
for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        snsPopupBg.style.display = 'block';
        snsPopupBg.children[0].children[0].src = sns.children[0].src;
        wrap.mousewheel.disable();
    })
}
snsPopupBg.addEventListener('click',()=>{
    snsPopupBg.style.display = 'none';
    wrap.mousewheel.enable();
})

//배너 슬라이드
const bnr = new Swiper('#bnr_swiper',{
    slidesPerView:3.5,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:8000,
    loop:true,
})

const bnrProject = document.querySelectorAll('#bnr_swiper .swiper-slide')
const bnrPopup = document.querySelector('.bnr_popupbg')
console.log(bnrProject, bnrPopup)
for(let bnr of bnrProject){
    bnr.addEventListener('click',()=>{
        bnrPopup.style.display = 'block';
        bnrPopup.children[0].children[0].src = bnr.children[0].src;
        wrap.mousewheel.disable();
    })
}
bnrPopup.addEventListener('click',()=>{
    bnrPopup.style.display = 'none';
    wrap.mousewheel.enable();
})

//상세페이지 슬라이드
const detailePage = new Swiper('#detail_swiper',{
    slidesPerView:5,
    spaceBetween:20,
    autoplay:{delay:0},
    speed:7000,
    loop:true,
})
const detaile_pro = document.querySelectorAll('#detail_swiper .swiper-slide')
const detailePopup = document.querySelector('.detail_popupbg')
console.log(detaile_pro, detailePopup)
for(let det of detaile_pro){
    det.addEventListener('click',()=>{
        detailePopup.style.display = 'block';
        detailePopup.children[0].children[0].src = det.children[0].src;
        wrap.mousewheel.disable();
    })
}
detailePopup.addEventListener('click',()=>{
    detailePopup.style.display = 'none';
    wrap.mousewheel.enable();
})




/* 스크롤 플러그인 */
/* document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.outro .content p',{
        opacity:0,
        y:30,
    },{
        scrollTrigger:{
            trigger:'.outro',
            markers:true,
            start:'top 60%',
            end:'bottom 90%',
            toggleActions:'play pause none reset',
        },
        duration:2,
        opacity:1,
        y:-30,
    })
}); */
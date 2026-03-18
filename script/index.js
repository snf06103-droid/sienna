document.addEventListener("DOMContentLoaded",()=>{

    // 베스트 셀러 구두 반응형 무한 자동 재생 슬라이더
        const lookbookSwiper = new Swiper('.lookbook-swiper', {
            // 자동 재생
            autoplay: {
                delay: 1300,
                disableOnInteraction: false,
            },
            // 한 번에 보여줄 개수 
            slidesPerView: 4, 
            spaceBetween: 0, // 슬라이드 사이 간격
            loop: true,       // 무한 반복
            
            // 반응형 설정
            breakpoints: {
                320: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView:3 },
                1920: { slidesPerView:4 },
            },
        });



        //스타일보드 more클릭하면 사진 더 나오게 하는 기능
        const styleGrid = document.querySelector(".style-grid")
        const btn = document.querySelector('.common-frame button')

        btn.addEventListener('click', function() {

        // styleGrid에 'is-expanded'라는 클래스를 넣었다 뺐다(toggle) 합니다.
        styleGrid.classList.toggle('is-expanded');
        
        // 버튼 글자 바꾸기
        if (styleGrid.classList.contains('is-expanded')) {
            btn.innerText = "LESS";
        } else {
            btn.innerText = "MORE";
        }
        })
})
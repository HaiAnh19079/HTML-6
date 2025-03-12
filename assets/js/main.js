var video = document.getElementById("video");
var playButton = document.getElementById("play_button");
var intro_vd = document.querySelector(".intro-video");


playButton.addEventListener("click", function () {
    if (video.paused == true) {
        video.play();
        playButton.style.opacity = '0'
        intro_vd.style.opacity = '0'
        intro_vd.style.zIndex = '-1'

    } else {
        video.pause();
        playButton.style.opacity = '1'
        intro_vd.style.opacity = '1'
        intro_vd.style.zIndex = '1'
    }
});
video.addEventListener('play', function () {
    console.log('play');
    playButton.style.opacity = '0'
    intro_vd.style.opacity = '0'
    intro_vd.style.zIndex = '-1'

    playButton.addEventListener('mouseout', () => {
        playButton.style.opacity = '0'
    })
    playButton.addEventListener('mouseover', () => {
        playButton.style.opacity = '0.5'
    })
})
video.addEventListener('pause', function () {
    console.log('pause');
    playButton.style.opacity = '1'
    intro_vd.style.opacity = '1'
    intro_vd.style.zIndex = '1'

    playButton.addEventListener('mouseout', () => {
        playButton.style.opacity = '1'
    })
    playButton.addEventListener('mouseover', () => {
        playButton.style.opacity = '1'
    })
})
let slideIndex = 1;

//slide feedback

function currentSlideFeedback(n) {
    let slides = document.querySelectorAll(".feedBackSlide");
    let list = document.querySelector('.feedback-list > .row.row-cols-1.nowrap')
    let dotsContainer = document.querySelector('.feedback-inner .dots')

    let slidesPerPage = 1;
    generateDots(dotsContainer, slides, list, slidesPerPage);
    showSlides(n, slides, list);
}
currentSlideFeedback(slideIndex)
//



function showSlides(n, slides, list) {

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    list.style.transform = `translateX(-${n - 1}00%)`;
    list.style.transition = ' 0.3s'
}

function isMobileAndTablet() {
    return window.matchMedia("(max-width: 992px)").matches;
}


function generateDots(dotsContainer, slides, list, slidesPerPage) {
    dotsContainer.innerHTML = ''

    let totalSlides = Math.ceil(slides.length / slidesPerPage);

    for (let i = 0; i < totalSlides; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            slideIndex = i + 1;
            const dots = dotsContainer.querySelectorAll('.dot');
            showSlides(slideIndex, slides, list, dots);

            // Cập nhật lại active cho các dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');  // Thêm active cho dot vừa click
        });

        dotsContainer.appendChild(dot);
    }


}
//slide gallery

let prevSlidesPerPage = isMobileAndTablet() ? 1 : 3; // Lưu trạng thái trước đó

function setupGallery() {
    let slides = document.querySelectorAll('.gallery-slide');
    let list = document.querySelector('.gallery-list > .row.row-cols-1.nowrap')
    let dotsContainer = document.querySelector('.gallery-inner .dots')

    let slidesPerPage = isMobileAndTablet() ? 1 : 3;

    // Nếu số slides trên mỗi trang thay đổi, reset slideIndex về 1
    if (slidesPerPage !== prevSlidesPerPage) {
        slideIndex = 1;
        prevSlidesPerPage = slidesPerPage; // Cập nhật trạng thái mới
    }
    generateDots(dotsContainer, slides, list, slidesPerPage);
    showSlides(slideIndex, slides, list);
}

// Gọi khi load trang & khi thay đổi kích thước
setupGallery();
window.addEventListener("resize", setupGallery);

// specialties
function currentSlideSpecialities(slideIndex) {
    let slides = document.querySelectorAll(".special-slide");
    let list = document.querySelector('.special-list > .row.row-cols-1.row-cols-lg-3')
    let dotsContainer = document.querySelector('.special-inner .dots')

    let slidesPerPage = 1;
    generateDots(dotsContainer, slides, list, slidesPerPage);
    showSlides(slideIndex, slides, list);
}
currentSlideSpecialities(slideIndex)
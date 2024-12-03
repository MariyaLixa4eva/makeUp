$(document).ready(function(){
    $(window).scroll(function(){
        // изменение цвета навбара при скроле
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // гамбургер menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

      // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["красивые формы бровей", "притягивающие губы", "эффектный  взгляд", "естественность образа"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });
});






let slide = document.getElementById('slide');
let up = document.getElementById('up');
let down = document.getElementById('down');
let x = 0;
up.onclick = function() {
    if(x > '-1400') {
        x = x-350;
    slide.style.top = x + 'px'
    }
    // if (window.innerWidth<800) {
    // up.onclick = function() {
    //     if(x > '-1500') {
    //         x = x-500;
    //     slide.style.top = x + 'px'
    //     }
    // 
}

down.onclick = function() {
    if(x<0) {
        x = x+350;
    slide.style.top = x + 'px'
    }
    // if (window.innerWidth<800) {
    //     down.onclick = function() {
    //         if(x<0) {
    //             x = x+500;
    //         slide.style.top = x + 'px'
    //         }
    //     }
    // }
}

//scroll
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
    });
}
    let options = { threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.projects-item');
    for (let elm of elements) {
    observer.observe(elm);
}


gsap.from(".logo", {y: 50, ease: 'back', duration: 2, delay: 0.2, opacity: 0});
gsap.from("li", {y: 50, ease: 'back', duration: 2, delay: 0.3, opacity: 0, stagger: 0.5});
gsap.from(".home-content", {duration: 2, delay: 1, opacity: 0});
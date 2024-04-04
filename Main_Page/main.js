let primary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--primary_color_1');
let primary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--primary_color_2');
let secondary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_1');
let secondary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--secondary_color_2');
let tertiary_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--tertiary_color_1');
let tertiary_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--tertiary_color_2');
let brand_color_1 = getComputedStyle(document.documentElement).getPropertyValue('--brand_color_1');
let brand_color_2 = getComputedStyle(document.documentElement).getPropertyValue('--brand_color_2');
let mode_left = getComputedStyle(document.documentElement).getPropertyValue('--mode_left');

let mode = localStorage.getItem('mode');
if(mode === null){
    mode = 1;
    localStorage.setItem('mode', mode);
}else{
    mode = Number(mode);
    mode = mode === 1 ? 0 : 1;
    localStorage.setItem('mode', mode);
    changemode();
}

let outer_container = document.querySelector('.outer_container');
outer_container.addEventListener('click', () => {
    changemode();
});

function theme_margin(){
    let window_size = window.innerWidth;
    if(window_size > 1024){
        document.documentElement.style.setProperty('--mode_left', '28px');
    }else if(window_size > 768 && window_size <= 1024){
        document.documentElement.style.setProperty('--mode_left', '26px');
    }else if(window_size > 376 && window_size <= 768){
        document.documentElement.style.setProperty('--mode_left', '20px');
    }else{
        document.documentElement.style.setProperty('--mode_left', '14px');
    }
}

function changemode(){
    let cloth1 = document.querySelector('.cloth_ad1');
    let part1 = document.querySelector('.part_ad1');
    let cloth2 = document.querySelector('.cloth_ad2');
    let part2 = document.querySelector('.part_ad2');
    if(mode){
        document.documentElement.style.setProperty('--primary_color_1', primary_color_2);
        document.documentElement.style.setProperty('--primary_color_2', primary_color_1);
        document.documentElement.style.setProperty('--secondary_color_1', secondary_color_2);
        document.documentElement.style.setProperty('--secondary_color_2', secondary_color_1);
        document.documentElement.style.setProperty('--tertiary_color_1', tertiary_color_2);
        document.documentElement.style.setProperty('--tertiary_color_2', tertiary_color_1);
        document.documentElement.style.setProperty('--brand_color_1', brand_color_2);
        document.documentElement.style.setProperty('--brand_color_2', brand_color_1);

        cloth2.style.display = 'inline';
        part2.style.display = 'inline';

        setTimeout(() => {
            cloth1.style.opacity = '0';
            cloth2.style.opacity = '0.6';
            part1.style.opacity = '0';
            part2.style.opacity = '0.6';
        }, 100);

        setTimeout(() => {
            cloth1.style.display = 'none';
            part1.style.display = 'none';
        }, 1600);

        cloth2.addEventListener('mouseover', ()=>{
            cloth2.style.opacity = '1';
        });
        cloth2.addEventListener('mouseout', ()=>{
            cloth2.style.opacity = '0.6';
        });
        part2.addEventListener('mouseover', ()=>{
            part2.style.opacity = '1';
        });
        part2.addEventListener('mouseout', ()=>{
            part2.style.opacity = '0.6';
        });

        theme_margin();
        mode = 0;
    } else{
        document.documentElement.style.setProperty('--primary_color_1', primary_color_1);
        document.documentElement.style.setProperty('--primary_color_2', primary_color_2);
        document.documentElement.style.setProperty('--secondary_color_1', secondary_color_1);
        document.documentElement.style.setProperty('--secondary_color_2', secondary_color_2);
        document.documentElement.style.setProperty('--tertiary_color_1', tertiary_color_1);
        document.documentElement.style.setProperty('--tertiary_color_2', tertiary_color_2);
        document.documentElement.style.setProperty('--brand_color_1', brand_color_1);
        document.documentElement.style.setProperty('--brand_color_2', brand_color_2);
        document.documentElement.style.setProperty('--mode_left', mode_left);
        
        
        cloth1.style.display = 'inline';
        part1.style.display = 'inline';

        setTimeout(() => {
            cloth1.style.opacity = '0.6';
            cloth2.style.opacity = '0';
            part1.style.opacity = '0.6';
            part2.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            cloth2.style.display = 'none';
            part2.style.display = 'none';
        }, 1600);

        cloth1.addEventListener('mouseover', ()=>{
            cloth1.style.opacity = '1';
        });
        cloth1.addEventListener('mouseout', ()=>{
            cloth1.style.opacity = '0.6';
        });
        part1.addEventListener('mouseover', ()=>{
            part1.style.opacity = '1';
        });
        part1.addEventListener('mouseout', ()=>{
            part1.style.opacity = '0.6';
        });

        mode = 1;
    }
    localStorage.setItem('mode', mode);
}
window.addEventListener('resize', theme_margin);

let menu_logo = document.querySelector('.menu_logo');
menu_logo.addEventListener('click', ()=>{
    changeMenuLogo();
})
let cancel_svg = document.querySelector('.menu_cancel');
cancel_svg.addEventListener('click', ()=>{
    changeMenuLogo();
});
let menu_check = 1;
function changeMenuLogo(){
    let window_size = window.innerWidth;
    let menu = document.querySelector('.menu_container');

    if(menu_check){
        menu_logo.innerHTML = '<svg class="menu_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>';
        
        menu.style.removeProperty('display');
        setTimeout(() => {
            if(window_size <= 1024){
                menu.style.setProperty('right', '20px');
            }else{
                menu.style.setProperty('right', '22px');
            }
        }, 100);

        menu_check = 0;
    } else{
        menu_logo.innerHTML = '<svg class="menu_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path></svg>';

        if(window_size <= 1024){
            menu.style.setProperty('right', '-320px');
        }else{
            menu.style.setProperty('right', '-360px');
        }
        setTimeout(() => {
            menu.style.setProperty('display', 'none');
        }, 500);
        menu_check = 1;
    }
}

let image1 = document.querySelector('.banner_image1');
let image2 = document.querySelector('.banner_image2');
let image3 = document.querySelector('.banner_image3');
let image4 = document.querySelector('.banner_image4');
let image5 = document.querySelector('.banner_image5');
image1.style.opacity = '1';
image2.style.opacity = '0';
image3.style.opacity = '0';
image4.style.opacity = '0';
image5.style.opacity = '0';
function changeImage() {
    if(image1.style.opacity == '1'){
        image1.style.opacity = '0';
        image2.style.opacity = '1';
    }else if(image2.style.opacity == '1'){
        image2.style.opacity = '0';
        image3.style.opacity = '1';
    }else if(image3.style.opacity == '1'){
        image3.style.opacity = '0';
        image4.style.opacity = '1';
    }else if(image4.style.opacity == '1'){
        image4.style.opacity = '0';
        image5.style.opacity = '1';
    }else{
        image5.style.opacity = '0';
        image1.style.opacity = '1';
    }
}
setInterval(changeImage, 4500);



function moveImage() {
    let window_size = window.innerWidth;
    let image = document.querySelector('.moving_image');
    let new_left = window_size - 2.5*window.scrollY;
    document.documentElement.style.setProperty('--moving_left', new_left + 'px');
    window.addEventListener('scroll', function() {
        let new_left1 = window_size - 2.5*window.scrollY;
        document.documentElement.style.setProperty('--moving_left', new_left1 + 'px');
    });
}
moveImage();
window.addEventListener('resize', moveImage);

let cloth_section = document.querySelector('.cloths');
let part_section = document.querySelector('.car_parts');
let accessories_text_1 = document.querySelector('.accessories_text1');
let accessories_text_2 = document.querySelector('.accessories_text2');
cloth_section.addEventListener('mouseover', ()=>{
    accessories_text_1.style.setProperty("display", "none");
});
cloth_section.addEventListener('mouseout', ()=>{
    accessories_text_1.style.removeProperty("display");
});
part_section.addEventListener('mouseover', ()=>{
    accessories_text_2.style.setProperty("display", "none");
});
part_section.addEventListener('mouseout', ()=>{
    accessories_text_2.style.removeProperty("display");
});

let slideImages = document.querySelectorAll('.slide');
let counter = 0;
function autoSlide() {
    slideImages.forEach((slide, index) => {
        slide.style.animation = '';
        if (index === counter) {
            slide.style.animation = 'next2 2s forwards';
        } else if (index === ((counter - 1 + slideImages.length) % slideImages.length)) {
            slide.style.animation = 'next1 2s forwards';
        }
    });

    counter = (counter + 1) % slideImages.length;
}
autoSlide();
setInterval(autoSlide, 4500);

// setTimeout(() => {
//     if(menu_check){
//         document.addEventListener('click', function(event) {
//             var menuContainer = document.querySelector('.menu_container');
//             var isClickInside = menuContainer.contains(event.target);
        
//             if (!isClickInside) {
//                 // The click was outside the menuContainer, close it.
//                 menuContainer.style.display = 'none';
//             }
//         });
//     }
// }, 1000);
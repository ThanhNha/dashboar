let list = document.querySelectorAll('.sidebar-container ul li');
console.log(list)
// for(let i = 0 ; i < list.length ; i++){
//     list[i].onclick = function(){
//         let j = 0 ;
//         while( j < list.length){
//             list[j++].className = 'sidebar-container li';
//         } 
//         list[i].className = 'active';
//     }
// }

function addactive(){
  list.forEach((item) =>
  item.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach((item) =>
  item.addEventListener('mouseover', addactive)
);

let icon = document.querySelector('.toggle');
let sidebar =document.querySelector('.sidebar-container');
let main = document.querySelector('main');

icon.onclick = function(){
  sidebar.classList.toggle('active');
  main.classList.toggle('active');
}


// let search = document.querySelector(".search-form")
// // console.log(search);
// document.querySelector("#search-btn").onclick = () =>{
//     search.classList.toggle("active");
    
// }

// let login = document.querySelector(".login")
// // console.log(search);
// document.querySelector("#login-btn").onclick = () =>{
//     login.classList.toggle("active");
// }
// document.querySelector("#close-login").onclick = () =>{
//     login.classList.remove("active");
// }






// window.onscroll =  () =>{
//     if(window.scrollY > 80){
//         document.querySelector('.header-bottom').classList.add('active')
//     }else{
//         document.querySelector('.header-bottom').classList.remove('active')
//     }
// }

// window.onload =  () =>{
//     if(window.scrollY > 80){
//         document.querySelector('.header-bottom').classList.add('active')
//     }else{
//         document.querySelector('.header-bottom').classList.remove('active')
//     }
// }



// function load(){
//   document.querySelector('.loader').classList.add('active');
// }
// function fade_out(){
//   setInterval(load, 4000);
// }
// window.onload = fade_out;

// var swiper = new Swiper(".home-slider", {
    
//    loop:true,
//    centeredSlides: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
        
//       },
//       768: {
//         slidesPerView: 2,
        
//       },
//       1024: {
//         slidesPerView: 3,
        
//       },
//     },
//   });



//   var swiper = new Swiper(".featured-slider", {
//     loop:true,
//     grabCursor: true,
//     spaceBetween: 10,
//     centeredSlides: true,
   
//          autoplay: {
//            delay: 2500,
//            disableOnInteraction: false,
//          },
//          navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        450: {
//         slidesPerView: 2,
        
//       },
//        768: {
//          slidesPerView: 3,
         
//        },
//        1024: {
//          slidesPerView: 4,
         
//        },
//      },
//    });


//    var swiper = new Swiper(".arrivals-slider", {
    
//     loop:true,
//     grabCursor: true,
//     spaceBetween: 10,
//     centeredSlides: true,
//          autoplay: {
//            delay: 3500,
//            disableOnInteraction: false,
//          },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        768: {
//          slidesPerView: 2,
         
//        },
//        1024: {
//          slidesPerView: 3,
         
//        },
//      },
//    });

//    var swiper = new Swiper(".blogs-slider", {
    
//     loop:true,
//     spaceBetween: 10,
//     centeredSlides: true,
//     grabCursor: true,
//          autoplay: {
//            delay: 3500,
//            disableOnInteraction: false,
//          },
//      breakpoints: {
//        0: {
//          slidesPerView: 1,
         
//        },
//        768: {
//          slidesPerView: 2,
         
//        },
//        1024: {
//          slidesPerView: 3,
         
//        },
//      },
//    });
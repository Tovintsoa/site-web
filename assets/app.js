AOS.init();

let navbar = document.getElementById('header');
window.addEventListener(
    'scroll',
    function () {
       if(window.scrollY === 0){
            navbar.classList.add('bg-transparent')
           navbar.classList.remove('bg-dark')
       }
       else{
           navbar.classList.remove('bg-transparent');
           navbar.classList.add('bg-dark')
       }
    }
);
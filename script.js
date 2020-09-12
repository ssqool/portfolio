// $(document).ready(function() {
//     $('.header-burger').click(function (event) {
//         $('.header-burger,.header-menu').toggleClass('active');
//     });
// });

let get=(id)=>{
    return document.querySelector(id)
}

get('.header-burger').addEventListener('click', showMenu);

get('.header-burger').addEventListener('touchstart', showMenu);

function showMenu(){
    get('.header-burger').classList.add('active');
    get('.header-menu').classList.add('active');
    if(get('.header-burger').classList.contains('acitve')){
        get('.header-burger').classList.remove('active');
        get('.header-menu').classList.remove('active');
    }
}
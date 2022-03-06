// переменные для работы кнопки перемещения к началу страницы
const btnScrollUp = document.querySelector('.btn-scroll-up');

btnScrollUp.addEventListener('click', ()=>{
    if (window.scrollY) {
        window.scroll(0, 0);
        console.log('hi');
    }
})
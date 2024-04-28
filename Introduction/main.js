const main_img = document.getElementById('main_img');

const main = document.getElementById('main');
const imgs = document.querySelectorAll('.sample_img');

imgs.forEach((img) =>{
    img.addEventListener('click',() =>{
        main_img.src = img.src;
        main.style.display = 'block';
        
    })
})

function deleteImg(){
    main.style.display = 'none';
}
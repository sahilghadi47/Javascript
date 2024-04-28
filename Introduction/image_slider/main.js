const images = document.querySelectorAll('img');
const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

slideLeft.style.display = 'none'

let counter = 0 ;
images.forEach((slide,counter)=>{
    slide.style.left = `${counter * 100}%`
})

const slideImg = () =>{
    images.forEach((event) =>{
        event.style.transform = `translateX(-${counter*100}%)`
    })
}

const left = () =>{
    if(counter >0){
        counter --;
        slideImg();
        slideRight.style.display = 'block';
    }
    if(counter == 0){
        slideLeft.style.display = 'none';
    }
    console.log(counter);
}

const right = () =>{
    if(counter <= (images.length -2)){
        counter++;
        slideImg();
        slideLeft.style.display = 'block';
    }
    if(counter == (images.length -1)){
        slideRight.style.display = 'none';
    }
    console.log(counter);
}

slideLeft.addEventListener('click', left);
slideRight.addEventListener('click', right);
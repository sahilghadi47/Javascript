 
const userInput = document.getElementById('input');
const btn   = document.getElementById('mybtn');
const restart   = document.getElementById('restart');
const demo  = document.getElementById('demo');
const temp  = document.getElementById('temp');
const res  = document.getElementById('res');

let count =0;
restart.style.display ="none";

btn.addEventListener('click',() =>{
    // let num = Math.floor(Math.random() * 100);
    let num = 47;
    let input = userInput.value;
    
    const txt_area1 = document.createElement('p');
    txt_area1.textContent= `You Entered: ${input}`;
    const txt_area2 = document.createElement('p');
    txt_area2.textContent= `Number Was: ${num}`;
    demo.appendChild(txt_area1);
    demo.appendChild(txt_area2);
    if(num !=input){
        res.innerHTML = `Wrong Answer !`;
        res.style.backgroundColor = 'red';
    }else{
        res.innerHTML = `Right Answer !`;
        res.style.backgroundColor = 'green';
    }
    console.log(num);
    console.log(input);
    console.log(num == input);
    count++;
    if(count >=10){
        input.disabled = true;
        btn.disabled   = true;
        restart.style.display = "block";
        res.innerHTML = 'GAME OVER !!'
        res.style.backgroundColor = 'red';
    }
})

restart.addEventListener('click', restartGame);

function restartGame() {
    input.disabled = false;
    btn.disabled   =false;
    temp.innerHTML ='' ;
    demo.innerHTML='';
    count =0;
    restart.style.display = "none";
}

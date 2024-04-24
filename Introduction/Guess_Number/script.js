 
const userInput = document.getElementById('input');
const btn   = document.getElementById('mybtn');
const restart   = document.getElementById('restart');
const demo  = document.getElementById('demo');
const temp  = document.getElementById('temp');
const res  = document.getElementById('res');

let count =0;
restart.style.display ="none";

btn.addEventListener('click',() =>{
    let num = Math.floor(Math.random() * 100);
    // let num =47;
    let input = userInput.value;
    const txt_area1 = document.createElement('p');
    if(input === ''){
        txt_area1.textContent= `Please Enter a number `;
        demo.appendChild(txt_area1);
    }else{
        txt_area1.textContent= `You Entered: ${input} and Num was: ${num} `;
        demo.appendChild(txt_area1);
        if(num != input){
            res.innerHTML = `Wrong Answer !`;
            res.style.backgroundColor = 'red';
        }else{
            res.innerHTML = `Right Answer !`;
            res.style.backgroundColor = 'green';
        }
        count++;
    }
    console.log(count)
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
    btn.disabled   = false;
    res.innerHTML = ''
    res.style.backgroundColor = 'white'
    demo.innerText=''
    count =0;
    restart.style.display = "none";
}

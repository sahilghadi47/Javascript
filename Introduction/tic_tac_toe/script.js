let boxes = document.querySelectorAll('.box');
const result = document.getElementById('result');
const newGamebtn =document.querySelector('#newGame');
const resetbtn = document.querySelector('#reset');


let turnO = true;
const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const cheakWinner = () =>{
    for(let pattern of winner){
        
        // console.log(pattern[0] , pattern[1], pattern[2]);

        // console.log(boxes[pattern[0]].innerHTML ,boxes[pattern[1]].innerHTML ,boxes[pattern[2]].innerHTML);
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 != '' &&  pos2 != '' &&  pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                resetbtn.style.display = 'none';
                newGamebtn.style.display ='block'
                result.style.display = 'block';
                result.innerHTML = `Winner is ${pos2}`
                boxes.forEach((box) =>{
                    box.disabled = true;
                })
            }
        }
    }
}

boxes.forEach((box) =>{
    box.addEventListener('click' , () =>{
        if(turnO){
            box.innerHTML = 'O';
            turnO = false;
        }else{
            box.innerHTML ='X'; 
            turnO = true;
        }
        box.disabled = true;
        cheakWinner();
    })
})


const resetGame = () => {
    turnO = true;
    boxes.forEach((box) =>{
        box.innerHTML ='';
        box.disabled = false;
    })
}
const newGame = () => {
    turnO = true;
    newGamebtn.style.display ='none';
    result.style.display = 'none';
    resetbtn.style.display = 'block';
    boxes.forEach((box) =>{
        box.innerHTML ='';
        box.disabled = false;
    })
}

resetbtn.addEventListener('click', resetGame);
newGamebtn.addEventListener('click',newGame);





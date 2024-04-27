
const myList = document.getElementById('myList');
const input = document.getElementById('title');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');


// add new task;
submit.addEventListener('click',() =>{
    
    if(input.value === ''){
        msg.style.display ='block'
        msg.innerHTML='Title cannont be empty';
    }else{
        const li = document.createElement('li')
        li.classList.add('listItem');
        
        const trash = document.createElement('i');
        trash.classList.add('fa-solid');
        trash.classList.add('fa-trash');

        li.innerText= input.value;
        li.appendChild(trash);
        myList.appendChild(li);
        msg.style.display= 'none';
        
        // remove list item on click trash icon
        
        trash.addEventListener('click' ,(event) =>{
            if(event.target.tagName =='I'){
                let child = event.target.parentElement;
                myList.removeChild(child);
            }
        })
    }
    input.value='';
})

// change task value  
myList.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false)


console.log(myList);
console.log('Running');

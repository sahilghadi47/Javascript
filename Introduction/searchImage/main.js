const input =document.getElementById('input');
const searchForm = document.getElementById('search-form');
const imgContainer = document.getElementById('img-container');

const showMore = document.getElementById('show-more-btn');

let keyword= '';
let page;


const access_key = `fiZPyzkO-ZAqfrAynwU2f_svSq2VxuXdxGeyoqKD9YI`;

async function getImage() {
    keyword = input.value;
    
    
    const url =`https://api.unsplash.com/search/photos?&page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
    const response =await fetch(url);
    const data =await  response.json();

    
    const result = data.results;

    result.map((res) =>{
        const image = document.createElement('img');
        image.src = res.urls.thumb;
        const imgUrl = document.createElement('a');
        imgUrl.href = res.links.html;
        imgUrl.target = "_blank";
        
        imgUrl.appendChild(image);
        imgContainer.appendChild(imgUrl);
        
    })
    
    showMore.style.display = 'block'
    
    
}

searchForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    page = 1;
    imgContainer.innerHTML='';
    getImage();

})


showMore.addEventListener('click',(event) =>{
    event.preventDefault();
    page++;
    getImage();
})

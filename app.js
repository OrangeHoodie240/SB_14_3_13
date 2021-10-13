console.log("Let's get this party started!");


const api_key = 'g9LOkaWOBxM129bG8gmXz4hweEwORouQ';
const baseUrl = 'http://api.giphy.com/v1/gifs/search'; 


const displayedImages = document.getElementById('displayed-images');

const form = document.getElementById('giphy-form'); 
const searchBox = document.getElementById('search-term');
form.addEventListener('submit', async (evt)=>{
    evt.preventDefault(); 
    const q = searchBox.value; 
    if(q){
        const gifArray = await fetch(baseUrl + `?q=${q}&api_key=${api_key}`)
            .then(resp => {
                if(!resp.ok) throw new Error('Error! Status:', resp.status); 
                return resp.json(); 
            })
            .then(data => data.data)
            .catch(err => console.error(err));

        const randomInd = Math.floor(Math.random() * gifArray.length);
        const gif = gifArray[randomInd].embed_url; 
        displayedImages.innerHTML += `<iframe title=${q} frameborder="0" src="${gif}" />`
        
        searchBox.value = '';
    }
});


const removeBtn = document.getElementById('remove-images'); 
removeBtn.addEventListener('click', ()=>{
    displayedImages.innerHTML = '';
});
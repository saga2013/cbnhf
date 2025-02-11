const searchInput =document.getElementById('searchInput')
const searchButton= document.getElementById('searchButton')
const products = Array.from(document.querySelectorAll('.cards'))
const noresult = document.getElementById('noresult')

function search(){
    const searchValue = searchInput.value.toLowerCase().trim();

    const filtered=products.filter(product=>{
        const proName = product.getAttribute('data-name').toLocaleLowerCase().trim();
        return proName.includes(searchValue);
    })
    
    if(filtered.length > 0){
        products.map(product=>product.style.display='none')
        filtered .map(product=>product.style.display='block')
        
    } else{
    noresult.style.display='block'
    products.map(product=>product.style.display='none')

    }
}
searchButton.addEventListener('click', search);
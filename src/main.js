import { galleryCard } from "./js/render.functions";
import { fetchImages } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";
import "simplelightbox/dist/simple-lightbox.min.css";




const serchForm = document.querySelector('.search-form');
const galerySerch = document.querySelector('.gallery');
const loaderQ = document.querySelector('.loader')

let gallery = new SimpleLightbox('.gallery a');

const submitForm = event => {
    event.preventDefault();

    const searchValue = serchForm.elements.searchQuery.value.trim();
    
    loaderQ.classList.remove('is-hidden');

    fetchImages(searchValue)
    .then( data => {
        if (data.hits.length === 0){
            iziToast.error ({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
            });

            galerySerch.innerHTML = '';
            serchForm.reset();
        }
        const imgCard = data.hits.map(imgDetails => galleryCard(imgDetails)).join('');
        galerySerch.innerHTML = imgCard;
        gallery.refresh();
        
    })
    .catch( err => {
        console.log(err);
    })
    .finally(data => {
        loaderQ.classList.add('is-hidden');
    })

};



serchForm.addEventListener('submit', submitForm);

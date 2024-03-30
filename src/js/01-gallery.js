// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery');

function createMarkup(galleryItems){
    return galleryItems.map(({preview,original,description}) => 
    {return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" width="100" height="100">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`}).join('')
  };
  
  galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
  galleryEl.addEventListener('click', onClickItemGallery);

  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
   captionsData: 'alt', captionDelay: 250, 
    
  });

  function onClickItemGallery(evt){
    evt.preventDefault();
  };
console.log(galleryItems);


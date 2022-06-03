import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) =>{
        return `
        <div class ="gallery__item">
        <a class = "gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `
    })
    .join("");    
}

new SimpleLightbox(".gallery a", {captionDelay: 250,});
    
console.log(galleryItems);
    



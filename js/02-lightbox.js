import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryEl: document.querySelector('.gallery')
}

const gallaryCardsMarkup = createGallaryCardsMarkup(galleryItems);
refs.galleryEl.innerHTML = gallaryCardsMarkup;

function createGallaryCardsMarkup(items){
    return items.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
}).join('');
}

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
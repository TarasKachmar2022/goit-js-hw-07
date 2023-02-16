import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryEl: document.querySelector('.gallery')
}

refs.galleryEl.addEventListener('click', onGalleryCardClick);

const gallaryCardsMarkup = createGallaryCardsMarkup(galleryItems);
refs.galleryEl.innerHTML = gallaryCardsMarkup;

function createGallaryCardsMarkup(items){
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;
}).join('');
}

function onGalleryCardClick(event){
    event.preventDefault();
    const source = event.target.dataset.source;
    
    if(event.target.classList.contains('gallery__image')){
        document.addEventListener('keydown', onKeyModalClose);

        const instance = basicLightbox.create(`
        <img src="${source}" width="1280" height="852">
        `)
        instance.show();

        function onKeyModalClose(event){
            if(event.code === 'Escape'){
                instance.close()
            }
        }
    }
    }
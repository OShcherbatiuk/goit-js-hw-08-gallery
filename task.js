import items from "./gallery-items.js"

const ulRef = document.querySelector('.js-gallery')

const createGallery = items.map(item => `<li class="gallery__item">
<a class="gallery__link" href='${item.original}'>
<img class="gallery__image" src='${item.preview}' data-source='${item.original}' alt='${item.description}'/>
</a>
</li>`);

ulRef.insertAdjacentHTML('beforeend', createGallery)
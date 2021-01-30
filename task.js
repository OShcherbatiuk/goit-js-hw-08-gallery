import items from "./gallery-items.js"

const ulRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')

const createGallery = items.map(item => `<li class="gallery__item">
<a class="gallery__link" href='${item.original}'>
<img class="gallery__image" src='${item.preview}' data-source='${item.original}' alt='${item.description}'/>
</a>
</li>`);

ulRef.insertAdjacentHTML('beforeend', [...createGallery].join(''))

ulRef.addEventListener('click', onImgClick)

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    };
    
    const originalUrl = event.target.dataset.source;
    modalImgRef.setAttribute('src', originalUrl);
    lightboxRef.classList.add('is-open');

};

closeBtn.addEventListener('click', closeModal)

function closeModal() {
  console.log('close');
  modalImgRef.setAttribute('src', '');
  lightboxRef.classList.remove('is-open');
}
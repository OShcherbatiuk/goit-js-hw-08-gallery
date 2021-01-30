import items from "./gallery-items.js"

const ulRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
const overlayRef = document.querySelector('.lightbox__overlay')

const createGallery = items.map(item => `<li class="gallery__item">
<a class="gallery__link" href='${item.original}'>
<img class="gallery__image" src='${item.preview}' data-source='${item.original}' alt='${item.description}'/>
</a>
</li>`);

ulRef.insertAdjacentHTML('beforeend', [...createGallery].join(''))

ulRef.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)
overlayRef.addEventListener('click', onCloseModal)


function onOpenModal(event) {
  window.addEventListener('keydown', onCloseModalEsc)
  window.addEventListener('keydown', onScroll)
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  modalImgRef.setAttribute('src', event.target.dataset.source);
  lightboxRef.classList.add('is-open');
};

function onCloseModal() {
  window.removeEventListener('keydown', onCloseModalEsc)
  window.removeEventListener('keydown', onScroll)
  modalImgRef.setAttribute('src', '');
  lightboxRef.classList.remove('is-open');
};

function onCloseModalEsc(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  };
};

function onScroll(event) {

}

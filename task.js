import items from "./gallery-items.js"

const ulRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
const overlayRef = document.querySelector('.lightbox__overlay')

const createGallery = items.map(item => `<li class="gallery__item">
<a class="gallery__link" href='${item.original}'>
<img class="gallery__image" src='${item.preview}' data-source='${item.original}' data-index='${items.indexOf(item)}' alt='${item.description}'/>
</a>
</li>`);

ulRef.insertAdjacentHTML('beforeend', [...createGallery].join(''))

ulRef.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)
overlayRef.addEventListener('click', onCloseModal)

let currentIndex = null;

function onOpenModal(event) {
  window.addEventListener('keydown', onCloseModalEsc);
  window.addEventListener('keydown', onArrow)
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  };
  modalImgRef.setAttribute('src', event.target.dataset.source);
  modalImgRef.setAttribute('alt', event.target.alt);
  lightboxRef.classList.add('is-open');
  
};

function onCloseModal() {
  window.removeEventListener('keydown', onCloseModalEsc)
  modalImgRef.setAttribute('src', '');
  modalImgRef.setAttribute('alt', '');
  lightboxRef.classList.remove('is-open');
};

function onCloseModalEsc(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  };
};

function onArrow({ code }) {
  code === 'ArrowRight' && nextImg();
  code === 'ArrowLeft' && prevImg();
}


function nextImg() {
  currentIndex = items.length - 1 === currentIndex ? 0 : currentIndex + 1;
  const { original, description } = items[currentIndex];
  modalImgRef.setAttribute('src', original);
  modalImgRef.setAttribute('alt', description);
}

function prevImg() {
  currentIndex = currentIndex === 0 ? items.length - 1  : currentIndex - 1;
  const { original, description } = items[currentIndex];
  modalImgRef.setAttribute('src', original);
  modalImgRef.setAttribute('alt', description);
}
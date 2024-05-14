// Described in documentation;

import SimpleLightbox from 'simplelightbox';
// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// ul Gallery
const gallery = document.querySelector('.gallery');

// galleryItems array of objects with preview, original and description properties
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__link" href="${original}">
  <!-- ${description} -->
  <img
    class="gallery__image"
    src="${preview}"    
    alt="${description}"
  />`;
    })
    .join('');
}

// Create gallery items markup
const markup = createGalleryItem(galleryItems);

// Insert gallery items markup into the page
gallery.insertAdjacentHTML('beforeend', markup);

// Create a SimpleLightbox instance
let galleryHandler = new SimpleLightbox('.gallery a');

// Event handler for the SimpleLightbox "show.simplelightbox" event
galleryHandler.on('show.simplelightbox');

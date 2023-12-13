import { galleryItems } from "./gallery-items.js";

const createGalleryItemMarkup = ({ preview, original, description }) => `
  <li>
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");
galleryContainer.innerHTML = galleryMarkup;

document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
});

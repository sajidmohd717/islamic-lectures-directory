import { combinedList } from "./dictionary.js";
import './style.css';
import './normalize.css'
import heart from './images/heart-softeners/angels1.jpg'
import { images } from "./image.js";

// Define a function to create HTML elements for each section
function createSectionElements(sectionDivTitle, sectionList, sectionTitle) {
  // Create section header
  const sectionDiv = document.createElement('div')
  const contentDiv = document.querySelector('.content')
  sectionDiv.classList.add(sectionDivTitle)
  const sectionHeader = document.createElement("h3");
  sectionHeader.classList.add("section-title");
  sectionHeader.innerHTML = `<hr>${sectionTitle}`;
  sectionDiv.appendChild(sectionHeader);
  contentDiv.appendChild(sectionDiv)

  // Loop through the list and create HTML elements for each item
  sectionList.forEach((item) => {
    // Create section div
    const sectionItemDiv = document.createElement("div");
    sectionItemDiv.classList.add(`${item.class}`);

    // Create thumbnail div
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");
    thumbnailContainer.innerHTML = `<a href="${item.link}"><img class="thumbnail" src="${item.thumbnailImage}" alt=""></a>`;

    // Create title-author div
    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");

    // Create title div
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerHTML = `<span>${item.title}<br></span>`; // Use item.title from the current dictionary

    // Create meta-title div
    const metaTitleDiv = document.createElement("div");
    metaTitleDiv.classList.add("meta-title");

    // Create meta-title-left
    const metaTitleLeft = document.createElement("div");
    metaTitleLeft.classList.add("meta-title-left");
    metaTitleLeft.innerHTML = `<span class="author">${item.speaker}<br></span> <span class="no-videos">${item.episodes}<br></span>`; // Use item.speaker and item.episodes

    // Create meta-title-right
    const metaTitleRight = document.createElement("div");
    metaTitleRight.classList.add("meta-title-right");
    metaTitleRight.innerHTML =
      '<a href="" class="down-arrow"><img class="down-arrow-svg" src="images/down-arrow.svg" alt=""></a>';

    // Appending child elements
    metaTitleDiv.appendChild(metaTitleLeft);
    metaTitleDiv.appendChild(metaTitleRight);
    titleAuthor.appendChild(titleDiv);
    titleAuthor.appendChild(metaTitleDiv);
    sectionItemDiv.appendChild(thumbnailContainer);
    sectionItemDiv.appendChild(titleAuthor);

    // Finally, append the sectionItemDiv to sectionDiv
    sectionDiv.appendChild(sectionItemDiv);
  });
}

// Loop through the combined list and create HTML elements for each section
combinedList.forEach(({ sectionDivTitle, sectionList, sectionTitle }) => {
  createSectionElements(sectionDivTitle, sectionList, sectionTitle);
});

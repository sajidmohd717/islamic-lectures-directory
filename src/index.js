import { combinedList, speakersList  } from "./dictionary.js";
import './style.css';
import './normalize.css';

// Define constants for class names
const SECTION_DIV_CLASS = 'section';
const SECTION_HEADER_CLASS = 'section-title';
const THUMBNAIL_CONTAINER_CLASS = 'thumbnail-container';
const TITLE_CLASS = 'title';
const META_TITLE_CLASS = 'meta-title';
const META_TITLE_LEFT_CLASS = 'meta-title-left';
const META_TITLE_RIGHT_CLASS = 'meta-title-right';
const AUTHOR_CLASS = 'author';
const NO_VIDEOS_CLASS = 'no-videos';
const DOWN_ARROW_CLASS = 'down-arrow';
const DOWN_ARROW_SVG_CLASS = 'down-arrow-svg';

function createSectionElements({ sectionDivTitle, sectionList, sectionTitle }) {
  const sectionDiv = document.createElement('div');
  const contentDiv = document.querySelector('.content');
  sectionDiv.classList.add(sectionDivTitle);

  const sectionHeader = document.createElement("h3");
  sectionHeader.classList.add(SECTION_HEADER_CLASS);
  sectionHeader.innerHTML = `<hr><h3>${sectionTitle}</h3>`;
  sectionDiv.appendChild(sectionHeader);
  contentDiv.appendChild(sectionDiv);

  sectionList.forEach((item) => {
    const sectionItemDiv = document.createElement("div");
    sectionItemDiv.classList.add(item.class);

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add(THUMBNAIL_CONTAINER_CLASS);
    thumbnailContainer.innerHTML = `
      <a href="${item.link}">
        <img class="thumbnail" src="${item.thumbnailImage}" alt="">
      </a>`;

    const titleAuthor = document.createElement("div");
    titleAuthor.classList.add("title-author");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add(TITLE_CLASS);
    titleDiv.innerHTML = `<span>${item.title}<br></span>`;

    const metaTitleDiv = document.createElement("div");
    metaTitleDiv.classList.add(META_TITLE_CLASS);

    const metaTitleLeft = document.createElement("div");
    metaTitleLeft.classList.add(META_TITLE_LEFT_CLASS);
    metaTitleLeft.innerHTML = `<span class="${AUTHOR_CLASS}">${item.speaker}<br></span> <span class="${NO_VIDEOS_CLASS}">${item.episodes}<br></span>`;

    const metaTitleRight = document.createElement("div");
    metaTitleRight.classList.add(META_TITLE_RIGHT_CLASS);
    metaTitleRight.innerHTML = `<a href="" class="${DOWN_ARROW_CLASS}"><img class="${DOWN_ARROW_SVG_CLASS}" src="images/down-arrow.svg" alt=""></a>`;

    metaTitleDiv.appendChild(metaTitleLeft);
    metaTitleDiv.appendChild(metaTitleRight);
    titleAuthor.appendChild(titleDiv);
    titleAuthor.appendChild(metaTitleDiv);
    sectionItemDiv.appendChild(thumbnailContainer);
    sectionItemDiv.appendChild(titleAuthor);

    sectionDiv.appendChild(sectionItemDiv);
  });
}

function createSpeakers(speaker) {
  const speakersDiv = document.querySelector(".speakers")
  const div = document.createElement("div")
  div.classList.add("speaker-div")

  const img = document.createElement("img")
  img.src = speaker.image
  img.classList.add("speaker")

  const span = document.createElement("span")
  span.innerText = speaker.speaker

  div.appendChild(img);
  div.appendChild(span);
  speakersDiv.appendChild(div);
}

speakersList.forEach(createSpeakers)
combinedList.forEach(createSectionElements);

// Wow, the HTML file is getting huge and it's going to be hard to add content to it by just typing, i'll try to refactor the code and try to have some code be in a javascript file

// My plan is to have a list of dictionaries maybe something like this

/*

let heartSofteners = [
    {Name: "Why Me?", Author: "Omar Suleiman", NoEpisodes: "32 Episodes"},
    {Name: "Angels in Your Presence", Author: "Omar Suleiman", NoEpisodes: "32 Episodes"},
]

*/

// If i do it like this i don't have to write so much damn muntaine HTML
// :((((((

// Query Heart Softeners Div
const heartSoftenersDiv = document.querySelector(".heart-softeners");

let heartSoftenersList = [
  {
    title: "Why Me | 2024 Ramadan Series",
    speaker: "Omar Suleiman",
    episodes: "32 Episodes",
    thumbnailImage: "images/whyme.jpg",
    link: "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa",
    class: "why-me-class",
  },
  {
    title: "Angels in Your Presence",
    speaker: "Omar Suleiman",
    episodes: "32 Episodes",
    thumbnailImage: "images/angels1.jpg",
    link: "https://youtube.com/playlist?list=PLQ02IYL5pmhF2LFN-3QxnuregEv1oKPIc",
    class: "angels-1-class",
  },
];

let sectionHeader = document.createElement("h3");
sectionHeader.classList.add("section-title");
sectionHeader.innerHTML = "<hr>Heart Softeners";
heartSoftenersDiv.appendChild(sectionHeader);

// Loop through the list and create HTML elements for each item
heartSoftenersList.forEach((item) => {
  // Create why me Div
  const whyMeDiv = document.createElement("div");
  whyMeDiv.classList.add(`${item.class}`);

  // Create thumbnail div
  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("thumbnail-container");
  thumbnailContainer.innerHTML = `<a id="why-me-link" href="${item.link}"><img class="thumbnail" src="${item.thumbnailImage}" alt=""></a>`;

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
  whyMeDiv.appendChild(thumbnailContainer);
  whyMeDiv.appendChild(titleAuthor);

  // Finally, append the whyMeDiv to heartSoftenersDiv

  heartSoftenersDiv.appendChild(whyMeDiv);
});

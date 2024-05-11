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

// Define the combined list of dictionaries
const combinedList = [
  {
    sectionDivTitle: "heart-softeners",
    sectionList: [
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
    ],
    sectionTitle: "Heart Softeners",
  },
  {
    sectionDivTitle: "general-quran",
    sectionList: [
      {
        title: "The Message of The Quran in 30 Lessons",
        speaker: "Yasir Qadhi",
        episodes: "30 Episodes",
        thumbnailImage: "images/yasirqadhi-quran.jpg",
        link: "https://youtube.com/playlist?list=PLYZxc42QNctUnn09Of4rBuakQhu-Q2qpc&si=uYzvoE9Buq4NTwKH",
        class: "quran-30-lessons-class",
      },
      {
        title: "The Parables of The Quran",
        speaker: "Yasir Qadhi",
        episodes: "29 Episodes",
        thumbnailImage: "images/parables-quran.jpg",
        link: "https://www.youtube.com/playlist?list=PLYZxc42QNctUIsBRE5XCY6eICwl_W8jnj",
        class: "parables-quran-class",
      },
      {
        title: "Wisdoms of The Quran - Ramadan Series 2024",
        speaker: "Yasir Qadhi",
        episodes: "26 Episodes",
        thumbnailImage: "images/wisdoms_quran.jpg",
        link: "https://www.youtube.com/playlist?list=PLYZxc42QNctV2v3RRYwTHdgDHp_h80mJT",
      },
    ],
    sectionTitle: "General Quran Tafsir",
  },
  {
    sectionDivTitle: "life-of-the-prophet",
    sectionList: [
      {
        title: "Seerah of Prophet Muhammed (S)",
        speaker: "Yasir Qadhi",
        episodes: "104 Episodes",
        thumbnailImage: "images/seerah-yasir.jpg",
        link: "https://www.youtube.com/playlist?list=PLAEA99D24CA2F9A8F",
        class: "seerah-qadhi",
      },
    ],
    sectionTitle: "Life of the Prophet (PBUH)",
  },
  {
    sectionDivTitle: "life-of-sahaba",
    sectionList: [
      {
        title: "Lives of the Sahaba - Series",
        speaker: "Yasir Qadhi",
        episodes: "78 Episodes",
        thumbnailImage: "images/lives-sahaba.jpg",
        class: "lives-sahaba-qadhi"
      },
    ],
    sectionTitle: "Lives of the Sahaba"
  },
  {
    sectionDivTitle: "learn-arabic",
    sectionList: [
      {
        title: "Learn Arabic Through English - Medina Book",
        speaker: "Bro. Asif",
        episodes: "123 Episodes",
        thumbnailImage: "images/medina-arabic.jpg",
        link: "https://www.youtube.com/playlist?list=PLh3c1SPUmZqGMOtrHD7Kd2uXuvPRDP7ou",
        class: "medina-arabic",
      },
    ],
    sectionTitle: "Learn Arabic",
  },
  {
    sectionDivTitle: "manners-character",
    sectionList: [
      {
        title: "Cultivating Character | Season 1",
        speaker: "Belal Assad",
        episodes: "16 Episodes & counting",
        thumbnailImage: "images/cultivate-character.jpg",
        link: "https://www.youtube.com/playlist?list=PLlVjIiCQZC_3pqW9QuI6GfFx-S4eEAsmJ",
        class: "cultivating-character",
      },
    ],
    sectionTitle: "Manners & Character"
  }
];

// Loop through the combined list and create HTML elements for each section
combinedList.forEach(({ sectionDivTitle, sectionList, sectionTitle }) => {
  createSectionElements(sectionDivTitle, sectionList, sectionTitle);
});

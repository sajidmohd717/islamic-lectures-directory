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
const heartSoftenersDiv = document.querySelector('heart-softeners')

// Create why me Div
const whyMeDiv = document.createElement('div')
whyMeDiv.classList.add('why-me')

// Create thumbnail div
const thumbnailContainer = document.createElement('div')
thumbnailContainer.classList.add('thumbnail-container')
thumbnailContainer.innerHTML = '<a id="why-me-link" href="#"><img class="thumbnail" src="images/whyme.jpg" alt=""></a>'

// Create title-author div
const titleAuthor = document.createElement('div')
titleAuthor.classList.add('title-author')

// Create title div
const titleDiv = document.createElement('div')
titleDiv.classList.add('title')
titleDiv.innerHTML = '<span>Why Me | 2024 Ramadan Series <br></span>'

// Create meta-title div
const metaTitleDiv = document.createElement('div')
metaTitleDiv.classList.add('meta-title')

// Create meta-title-

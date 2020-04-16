/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * var sec holds the NodeList for sections.
 * var secs is number of sections. Use to programatically generate id.
 * var dat holds dataset array.
*/
const navList = document.getElementById("navbar__list");
const secs = document.querySelectorAll("section");
const navMenu = document.querySelector(".navbar__menu");
let coords;
let coordsX;
let coordsY;
   
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function getCoords(el) {
     	coords = el.getBoundingClientRect();
	coordsX = coords.left;
	coordsY = coords.top;
    }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
function addItems() {
    for(let i = 0; i < secs.length; i++) {
	const list = document.createElement("li");
	const anchor = document.createElement("a");
	let item = secs[i].dataset.nav;
	let refs = secs[i].getAttributeNode("id").value;
	let attRef = document.createAttribute("href");
	anchor.textContent = item;
	attRef.textContent = "#" + refs;
	anchor.setAttributeNode(attRef);
	list.appendChild(anchor);
	navList.appendChild(list);
    }
}

function scrollIt(e) {
    let whoDid = e.currentTarget;
    whoDid.className = "active";
    getCoords(e);
    const whereY = coordsY + window.pageYOffset;
    const whereX = coordsX + window.pageXOffset;
    window.scrollTo(
	{top: whereY, behavior: "smooth"}
    )
}
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener('DOMContentLoaded', addItems); 
let anchors = document.querySelectorAll('a');
anchors.forEach(addEvent);

function addEvent() {
    anchors.addEventListener('click', scrollIt);
}
// Build menu 
// Scroll to section on link click

// Set sections as active



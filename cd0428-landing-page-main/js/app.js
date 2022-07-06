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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// State Global Variables
const navMenu = document.getElementById("navbar__list");
const sections =document.querySelectorAll("section");
const header = document.querySelector("page__header");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {

//creating a container to store list 
        let navUI = '';

// looping through sections
        sections.forEach(section => {
    
            const sectionLink = section.id;
            const sectionName = section.dataset.nav;
            
            navUI +=`<l1><a class ="menu__link" href = "#${sectionLink}"> ${sectionName}</a></li>`;

// appending element to the navMenu   
        navMenu.innerHTML = navUI;
        });
    };
    
// Build menu 
    buildNav();   
            
            
        
// Scroll to anchor ID using scrollTO event
const scrolling = () => {
    //create a variable and store links into it
    const links = document.querySelectorAll('navbar__menu a');
    //loop through links
    links.forEach(link => {
        link.addEventListener ('click', () => {
            for(i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            };
            });

        });
    };
scrolling();

/**
 * End Main Functions
 * 
 * Begin Events
 * 
*/
// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
 };

 //remove active class
    const removeActiveClass = (section) => {
        section.classList.remove('your-active-class');
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
};
//add active class
    const addActiveClass = (condition, section) => {
        if(condition) {
            section.classList.add('your-active-class');
            section.style.cssText = "background-color: #FF0000";
        };
    };

// activating the section being scrolled in viewport
     const sectionActivation = () => {
        sections.forEach(section=> {
            const elementOffset = offset(section);
    inviewport = () => elementOffset > 0 && elementOffset < 100;
    removeActiveClass(section);
    addActiveClass(inviewport(), section);       
        });
    };
window.addEventListener('scroll', sectionActivation);

// End of Code



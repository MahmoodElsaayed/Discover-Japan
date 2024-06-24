import './header.css';
import headerContent from './header.html';

// Add Header To Index.html
const header = document.createElement('header');
header.innerHTML = headerContent;
document.body.appendChild(header);

// Add main to Index.html
const main = document.createElement('main');
document.body.appendChild(main);


function navigationHandler() {
    const navButtons = document.querySelectorAll('nav > button');

    function switchActive(target) {
        const previousActive = document.querySelector('nav button.active');
        if (previousActive) previousActive.classList.remove('active');
        target.classList.add('active');
    }

    function addPageContent(id) {
        if (id === 'home') {
            main.innerHTML = 'Placeholder';
        } else if (id === 'landmarks') {
            main.innerHTML = 'Placeholder';
        } else {
            main.innerHTML = 'Placeholder';
        }
    }

    function updateDisplay(e) {
        if (e) {
            switchActive(e.target);
            addPageContent(e.target.id);
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', updateDisplay)
    })

    // initial home content load
    updateDisplay({ target: document.querySelector('nav button#home') })
}

navigationHandler();
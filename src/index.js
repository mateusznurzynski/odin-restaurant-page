import './style.css';
import loadPage from './load-page';
import createMenu from './tabs/menu.js';
import createAboutUs from './tabs/about-us';

loadPage();

const navMenu = document.querySelector('.menu');
const navAboutUs = document.querySelector('.about-us');

navMenu.addEventListener('click', (e) => {
	clearOldTabContent();
	createMenu();
});
navAboutUs.addEventListener('click', (e) => {
	clearOldTabContent();
	createAboutUs();
});

function clearOldTabContent() {
	const activeTabs = document.querySelectorAll('.nav-active');
	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	activeTabs.forEach((tab) => {
		tab.classList.remove('nav-active');
	});
	heading.innerHTML = '';
	main.innerHTML = '';
}

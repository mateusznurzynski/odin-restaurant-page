import './style.css';
import loadPage from './load-page';
import createMenu from './tabs/menu.js';
import createAboutUs from './tabs/about-us';
import createOurRestaurants from './tabs/our-restaurants';

loadPage();

const navMenu = document.querySelector('.menu');
const navAboutUs = document.querySelector('.about-us');
const navOurRestaurants = document.querySelector('.our-restaurants');

navMenu.addEventListener('click', (e) => {
	clearOldTabContent();
	createMenu();
});
navAboutUs.addEventListener('click', (e) => {
	clearOldTabContent();
	createAboutUs();
});
navOurRestaurants.addEventListener('click', (e) => {
	clearOldTabContent();
	createOurRestaurants();
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

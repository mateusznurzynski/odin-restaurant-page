import './style.css';
import loadPage from './load-page';
import createMenu from './tabs/menu.js';

loadPage();

let currentTab = 'about-us';

const navMenu = document.querySelector('.menu');
navMenu.addEventListener('click', (e) => {
	switchTab('menu');
});

function switchTab(tab) {
	switch (tab) {
		case 'menu':
			clearOldTabContent();
			createMenu();
	}
}

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

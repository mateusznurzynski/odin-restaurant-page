import './style.css';
import loadPage from './load-page';
import createMenu from './tabs/menu.js';

loadPage();

const navMenu = document.querySelector('.menu');
navMenu.addEventListener('click', (e) => {
	switchTab('menu');
});

function switchTab(tab) {
	switch (tab) {
		case 'menu':
			clearOldTabContent();
	}
}

function clearOldTabContent() {
	const activeTabs = document.querySelectorAll('.nav-active');
	activeTabs.forEach((tab) => {
		tab.classList.remove('nav-active');
	});
}

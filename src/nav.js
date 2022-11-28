import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Hat from './hat.svg';
import Menu from './menu.svg';
import { createElement } from './utility';

const navElement = createElement('nav');

// Elements
const navItemElements = [
	createElement('div', ['nav-item']),
	createElement('div', ['nav-item']),
];

const menuButtonElement = createElement('div', ['menu-button']);

const logoElement = createElement('div', ['logo']);
const logoLinkElement = createElement('a', ['logo-link']);
logoLinkElement.setAttribute('href', '#');
const logoTextElement = createElement('p', ['logo-text'], 'Odin Restaurant');

const tabsElement = createElement('div', ['tabs']);
const tabElements = [
	createElement('div', ['tab', 'about-us', 'nav-active'], 'About us'),
	createElement('div', ['tab', 'menu'], 'Menu'),
	createElement('div', ['tab', 'restaurants'], 'Our restaurants'),
];

const iconsElement = createElement('div', ['icons']);
const iconElements = [
	createElement('a', ['link-fb']),
	createElement('a', ['link-tw']),
	createElement('a', ['link-insta']),
];

// Images
const facebookImg = new Image();
facebookImg.src = Facebook;
facebookImg.alt = 'Facebook';
facebookImg.classList.add('icon-fb');
facebookImg.classList.add('icon');

const twitterImg = new Image();
twitterImg.src = Twitter;
twitterImg.alt = 'Twitter';
twitterImg.classList.add('icon-tw');
twitterImg.classList.add('icon');
iconsElement.appendChild(twitterImg);

const instagramImg = new Image();
instagramImg.src = Instagram;
instagramImg.alt = 'Instagram';
instagramImg.classList.add('icon-insta');
instagramImg.classList.add('icon');
iconsElement.appendChild(instagramImg);

const hatImg = new Image();
hatImg.src = Hat;
hatImg.alt = 'Odin Restaurant Logo';
logoLinkElement.insertAdjacentElement('afterbegin', hatImg);

const menuImg = new Image();
menuImg.src = Menu;
menuImg.alt = 'Menu';
menuImg.classList.add('menu-img');
menuButtonElement.appendChild(menuImg);

// Appending
logoLinkElement.appendChild(logoTextElement);
logoElement.appendChild(logoLinkElement);

tabElements.forEach((element) => {
	tabsElement.appendChild(element);
});

iconElements.forEach((element) => {
	iconsElement.appendChild(element);
});
iconsElement.querySelector('.link-fb').appendChild(facebookImg);
iconsElement.querySelector('.link-tw').appendChild(twitterImg);
iconsElement.querySelector('.link-insta').appendChild(instagramImg);

navItemElements[0].appendChild(menuButtonElement);
navItemElements[0].appendChild(logoElement);
navItemElements[0].appendChild(tabsElement);

navItemElements[1].appendChild(iconsElement);

navItemElements.forEach((element) => {
	navElement.appendChild(element);
});

export default navElement;

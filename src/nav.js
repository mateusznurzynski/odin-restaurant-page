import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Hat from './hat.svg';
import { createElement } from './utility';

const navItemElement = createElement('div', ['nav-item']);

const logoElement = createElement('div', ['logo']);
const logoLinkElement = createElement('a', ['logo-link']);
logoLinkElement.setAttribute('href', '#');
const logoTextElement = createElement('p', ['logo-text'], 'Odin Restaurant');

const tabsElement = createElement('div', ['tabs']);
const tabElements = [
	createElement('div', ['tab', 'About us']),
	createElement('div', ['tab', 'Menu']),
	createElement('div', ['tab', 'Our restaurants']),
];
tabElements.forEach((element) => {
	tabsElement.appendChild(element);
});

const iconsElement = createElement('div', ['icons']);
const iconElements = [
	createElement('a', ['icon', 'link-fb']),
	createElement('a', ['icon', 'link-tw']),
	createElement('a', ['icon', 'link-insta']),
];
iconElements.forEach((element) => {
	iconsElement.appendChild(element);
});

// Images
const facebookImg = new Image();
facebookImg.src = Facebook;
facebookImg.alt = 'Facebook';
facebookImg.classList.add('icon-fb');
facebookImg.classList.add('icon');
iconsElement.querySelector('.link-fb').appendChild(facebookImg);

const twitterImg = new Image();
twitterImg.src = Twitter;
twitterImg.alt = 'Twitter';
twitterImg.classList.add('icon-tw');
twitterImg.classList.add('icon');
iconsElement.appendChild(twitterImg);
iconsElement.querySelector('.link-tw').appendChild(twitterImg);

const instagramImg = new Image();
instagramImg.src = Instagram;
instagramImg.alt = 'Instagram';
instagramImg.classList.add('icon-insta');
instagramImg.classList.add('icon');
iconsElement.appendChild(instagramImg);
iconsElement.querySelector('.link-insta').appendChild(instagramImg);

const hatImg = new Image();
hatImg.src = Hat;
hatImg.alt = 'Odin Restaurant Logo';
logoLinkElement.insertAdjacentElement('afterbegin', hatImg);

// Appending

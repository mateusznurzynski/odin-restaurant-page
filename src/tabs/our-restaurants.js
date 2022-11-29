import { createElement } from '../utility';

export default function createOurRestaurants() {
	const headerText = 'Visit us here:';
	const mainHeaderElement = createElement('p', ['main-header'], headerText);

	const mainText =
		'<ul><li>7242 Edgemont St.Edison, NJ 08817</li><li>26 Pendergast St. Bradenton, FL 34203</li><li>8522 Warren Ave. New Britain, CT 06051</li></ul>';
	const mainTextElement = createElement('p', ['main-text'], mainText);

	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	const headingTitle = 'Our restaurants';
	const navClass = '.our-restaurants';

	const headingTextElement = createElement(
		'p',
		['heading-text'],
		headingTitle
	);

	document.querySelector(navClass).classList.add('nav-active');
	heading.appendChild(headingTextElement);
	main.appendChild(mainHeaderElement);
	main.appendChild(mainTextElement);
}

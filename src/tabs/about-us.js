import { createElement } from '../utility';

export default function createAboutUs() {
	const headerText = 'Lorem ipsum dolor sit amet consectetur.';
	const mainHeaderElement = createElement('p', ['main-header'], headerText);

	const mainText =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi minus ipsam ad nesciunt praesentium eveniet facilis perspiciatis, eligendi reprehenderit quidem aut, nulla molestias laboriosam aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit, tenetur officia quas nobis architecto accusantium numquam sunt odit debitis non. Dolore qui consequuntur impedit deserunt aspernatur porro voluptatem eligendi quos, voluptate excepturi nam libero, voluptates optio nesciunt, consectetur ipsa?';
	const mainTextElement = createElement('p', ['main-text'], mainText);

	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	const headingTitle = 'About us';
	const navClass = '.about-us';

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

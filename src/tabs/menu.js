import { createElement } from '../utility';
import Lasagne from '../lasagne.jpg';

export default function createMenu() {
	const dishes = [
		{
			title: 'Lasagne',
			image: Lasagne,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum officiis quia doloribus non aliquam unde, nesciunt fugit explicabo perspiciatis perferendis odit magnam repellendus vel.',
		},
	];

	const mainContentElement = createElement('div', [
		'main-content',
		'main-text',
	]);
	dishes.forEach((dish) => {
		const imageElement = new Image();
		imageElement.src = dish.image;
		imageElement.alt = dish.title;
		imageElement.classList.add('dish-img');

		const descriptionElement = createElement(
			'div',
			['dish-text'],
			`<h2>${dish.title}</h2><p>${dish.description}</p>`
		);

		const dishElement = createElement('div', ['dish']);
		dishElement.appendChild(imageElement);
		dishElement.appendChild(descriptionElement);

		mainContentElement.appendChild(dishElement);
	});

	const heading = document.querySelector('.heading');
	const main = document.querySelector('.main');
	const headingTitle = 'Our menu';
	const navClass = '.menu';

	const headingTextElement = createElement(
		'p',
		['heading-text'],
		headingTitle
	);

	document.querySelector(navClass).classList.add('nav-active');
	heading.appendChild(headingTextElement);
	main.appendChild(mainContentElement);
}

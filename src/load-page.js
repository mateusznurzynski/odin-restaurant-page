import navElement from './nav';
import headingElement from './heading';

const content = document.querySelector('#content');

export default function loadPage() {
	content.appendChild(navElement);
	content.appendChild(headingElement);
}

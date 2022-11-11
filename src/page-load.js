import navElement from './nav';

const content = document.querySelector('#content');

export default function loadPage() {
	content.appendChild(navElement);
}

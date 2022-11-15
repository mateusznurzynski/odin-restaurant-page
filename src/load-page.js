import navElement from './nav';
import headingElement from './heading';
import mainElement from './main-content';
import footerElement from './footer';

const content = document.querySelector('#content');

export default function loadPage() {
	content.appendChild(navElement);
	content.appendChild(headingElement);
	content.appendChild(mainElement);
	content.appendChild(footerElement);
}

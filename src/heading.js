import { createElement } from './utility';

const headingElement = createElement('section', ['heading']);

const headingTextElement = createElement('p', ['heading-text'], 'About us');

headingElement.appendChild(headingTextElement);

export default headingElement;

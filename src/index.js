import './style.css';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Hat from './hat.svg';

const icons = document.querySelector('.icons');

const facebookImg = new Image();
facebookImg.src = Facebook;
facebookImg.alt = 'Facebook';
facebookImg.classList.add('icon-fb');
facebookImg.classList.add('icon');
icons.querySelector('.link-fb').appendChild(facebookImg);

const twitterImg = new Image();
twitterImg.src = Twitter;
twitterImg.alt = 'Twitter';
twitterImg.classList.add('icon-tw');
twitterImg.classList.add('icon');
icons.appendChild(twitterImg);
icons.querySelector('.link-tw').appendChild(twitterImg);

const instagramImg = new Image();
instagramImg.src = Instagram;
instagramImg.alt = 'Instagram';
instagramImg.classList.add('icon-insta');
instagramImg.classList.add('icon');
icons.appendChild(instagramImg);
icons.querySelector('.link-insta').appendChild(instagramImg);

const hatImg = new Image();
hatImg.src = Hat;
hatImg.alt = 'Odin Restaurant Logo';
const logoLink = document.querySelector('.logo-link');
logoLink.insertAdjacentElement('afterbegin', hatImg);

console.log('Test!');

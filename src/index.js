import './styles.css';

const root = document.querySelector('#root');
const text = document.createElement('h1');

text.innerHTML = 'Hello webpack';
text.classList.add('title');
root.append(text);

console.log('Hello webpack and vim!');

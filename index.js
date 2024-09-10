import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Main from './modules/ui.js';

const root = document.querySelector('#root');
async function render() {
  root.innerHTML = `
  ${Nav()}
  ${await Main()}
   ${Footer()}
   `;
}

render();

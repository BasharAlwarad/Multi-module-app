import Nav from "./components/nav.js";
import Footer from "./components/footer.js";
const root = document.querySelector("#root");
function render() {
  root.innerHTML = `${Nav()}
   ${Footer()}`;
}

render();

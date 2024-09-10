const root = document.querySelector('#root');
const Nav = () => {
  root.innerHTML += `
        <nav>
        <ul>
          <li><a href="./index.html" target="_self">Home</a></li>
          <li><a href="./cart.html" target="_self">Cart</a></li>
        </ul>
    </nav>
    `;
};

Nav();

const Footer = () => {
  root.innerHTML += `
        <footer>
          <p>&copy; 2022 My Website. All rights reserved.</p>
        </footer>
    `;
};

Footer();
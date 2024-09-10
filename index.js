const root = document.querySelector('#root');
const Nav = () => {
  root.innerHTML += `
    <nav>
        <ul>
          <li><a href="./index.html" target="_blank">Home</a></li>
          <li><a href="./cart.html" target="_blank">Cart</a></li>
        </ul>
      </nav>
    
    `;
};

Nav();

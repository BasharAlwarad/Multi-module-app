import item from '../components/Item.js';

const list = (data) => {
  let groupOfCards = '';
  data?.forEach((element) => {
    groupOfCards += item(element);
  });
  return `
  <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
      ${groupOfCards}
    </div>
    `;
};

const Main = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
  return list(data);
};
export default Main;

const x = (item) => {
  console.log(item);
  //   return `
  // <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
  // <span class="text-sm text-gray-500">${item?.category}</span>
  // <strong class="text-lg text-gray-800">${item?.id}</strong>
  // <img src="${item?.image}" alt="${item?.title}" class="w-24 h-24 object-cover my-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
  // <span class="text-base font-semibold text-gray-700">${item?.title}</span>
  // <span class="text-sm text-gray-600 mt-2">${item?.price} €</span>
  // </div>
  // `;
};

// const Main = () => {
//   fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       x(json[0]);
//     });
// };
const Main = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
  x(data[0]);
};

export default Main;

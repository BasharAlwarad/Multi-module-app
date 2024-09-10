const item = (item) => {
  return `
        <div class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <span class="text-sm text-gray-500">${item?.category}</span>
          <strong class="text-lg text-gray-800">${item?.id}</strong>
          <img src="${item?.image}" alt="${item?.title}" class="w-24 h-24 object-cover my-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
          <span class="text-base font-semibold text-gray-700">${item?.title}</span>
          <span class="text-sm text-gray-600 mt-2">${item?.price} €</span>
          </div>
        `;
};

export default item;

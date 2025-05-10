export const fetchProducts = async () => {
  let response = await fetch("http://localhost:3000/subjects");
  let data = await response.json();
  await delay;
  return data;
};

export const fetchProduct = async (id) => {
  let response = await fetch(`http://localhost:3000/subjects/${id}`);
  let data = await response.json();
  return data;
};

const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, 2000);
});

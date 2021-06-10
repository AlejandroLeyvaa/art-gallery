import { routes } from '../router/routes.js';
const root = document.getElementById('root');

export const onNavigate = (data) => {
  const path = window.location.hash.slice(1).toLocaleLowerCase() || '/';
  console.log(path)
  const template = routes[path](data);
  root.innerHTML = template;
};

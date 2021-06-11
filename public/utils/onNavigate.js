import { routes } from '../router/routes.js';
import { section } from '../container/section.js'
const root = document.getElementById('root');

export const onNavigate = (data) => {
  const path = window.location.hash.slice(1).toLocaleLowerCase() || '/';
  const keys = Object.keys(routes);
  if (keys.some((i) => i === path)) {
    const template = routes[path](data);
    root.innerHTML = template;
  } else {
    root.innerHTML = section(data, path);
  }
};

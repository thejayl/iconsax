'use strict';

const iconsax = document.querySelectorAll('.iconsax');

const getScript = async function (type, icon) {
  const parser = new DOMParser();
  const url =
    'https://raw.githubusercontent.com/thejayl/iconsax/main/src/img/icons.svg';
  const icons = await fetch(`${url}#${icon}`);
  const data = icons.text();
  const html = parser.parseFromString(data, 'text/html');
  const svg = html.querySelector('body');
  console.log(svg);
};

for (const icon of iconsax) {
  const iconType = icon.getAttribute('type');
  const iconLabel = icon.getAttribute('icon');
  getScript(iconType, iconLabel);
}

// document.addEventListener('DOMContentLoaded', () => {
//   getScript();
// });

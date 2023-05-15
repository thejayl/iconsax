'use strict';

const iconsax = document.querySelectorAll('.iconsax');

const generateIconsax = async function (icon, type, label) {
  const url = `https://raw.githubusercontent.com/thejayl/iconsax/main/iconsax/${type}/${label}.svg`;
  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      icon.innerHTML = data;
    });
};

const iconStyler = (icon) => {
  icon.style.width = 'fit-content';
  icon.style.height = 'fit-content';
  icon.style.display = 'inline-flex';
  icon.style.justifyContent = 'center';
  icon.style.alignItems = 'center';
};

for (const icon of iconsax) {
  const iconType = icon.getAttribute('type');
  const iconLabel = icon.getAttribute('icon');
  generateIconsax(icon, iconType, iconLabel);
  iconStyler(icon);
}

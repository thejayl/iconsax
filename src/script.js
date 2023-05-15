'use strict';

const iconsax = document.querySelectorAll('.iconsax');

const generateIconsax = async function (icon, type, label) {
  const url = `https://raw.githubusercontent.com/thejayl/iconsax/main/src/iconsax/${type}/${label}.svg`;

  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      icon.innerHTML = data;
    });
};

for (const icon of iconsax) {
  const iconType = icon.getAttribute('type');
  const iconLabel = icon.getAttribute('icon');
  generateIconsax(icon, iconType, iconLabel);
}

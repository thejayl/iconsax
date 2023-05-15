'use strict';

const getScript = async function () {
  const icons = await fetch('./img/icons.svg');
  console.log(icons);
};

getScript();

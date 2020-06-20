import "./assets/styles/main.scss";
import './assets/icons/icons';
import common from './assets/js/common';
import headerMenu from './blocks/v3-header-menu/v3-header-menu';
import standards from './blocks/v3-standards/v3-standards'

new common();

if (document.querySelector('.v3-header-menu')) {
  new headerMenu();
}

if (document.querySelector('.v3-standards')) {
  new standards();
}

//*****************************************************************
//               remove comment to support pwa

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
//
// if ('serviceWorker' in navigator) {
//     const registration = runtime.register();
// }

//*****************************************************************


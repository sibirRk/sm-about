import "./assets/styles/main.scss";
import './assets/icons/icons';
import common from './assets/js/common';
import headerMenu from './blocks/v3-header-menu/v3-header-menu';

new common();
new headerMenu();

//*****************************************************************
//               remove comment to support pwa

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
//
// if ('serviceWorker' in navigator) {
//     const registration = runtime.register();
// }

//*****************************************************************


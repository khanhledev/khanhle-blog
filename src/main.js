// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './css/main.css'

const fontsCss = `
/* nunito-sans-regular - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  src: url('./static/fonts/nunito-sans-v6-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('./static/fonts/nunito-sans-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./static/fonts/nunito-sans-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./static/fonts/nunito-sans-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./static/fonts/nunito-sans-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./static/fonts/nunito-sans-v6-latin-regular.svg#NunitoSans') format('svg'); /* Legacy iOS */
}`

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.style.push({
    type: 'text/css',
    cssText: fontsCss,
  })
}

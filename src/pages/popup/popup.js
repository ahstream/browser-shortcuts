console.info('popup.js begin', window?.location?.href);

import './popup.css';

import { initPopupPage, mountPopupPage } from '@ahstream/hx-chrome-lib';

initPopupPage();

mountPopupPage([
  {
    id: 'hx-sample',
    callback: () => {
      alert('Sample Item');
      window.close();
    },
  },
]);

console.info('options.js begin', window?.location?.href);

import './options.css';

import { initOptionsPage, mountOptionsPage } from '@ahstream/hx-chrome-lib';

initOptionsPage();

const options = [
  {
    header: 'General',
    hiddenKey: '',
    options: [
      ['description', 'Lorem Ipsum'],
      ['property', 'CLOSE_BUT_ONE_URL', 'CLOSE_BUT_ONE_URL'],
    ],
  },
];

mountOptionsPage(options);

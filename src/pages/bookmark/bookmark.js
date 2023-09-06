console.info('bookmark.js begin', window?.location?.href);

import { getStorageItems } from '@ahstream/hx-chrome-lib';

// STARTUP ----------------------------------------------------------------------------

run();

async function run() {
  const params = new URL(window.location.href).searchParams;

  const cmd = params.get('cmd') || null;
  const url = params.get('url') || null;

  console.info('Run bookmark:', cmd, url, window?.location?.href);

  let storage = null;

  if (cmd === 'close-tabs') {
    storage = await getStorageItems(['options']);
    return chrome.runtime.sendMessage({ cmd: 'closeTabsButOne', url: storage.options.CLOSE_BUT_ONE_URL });
  }

  if (cmd === 'close-window') {
    return chrome.runtime.sendMessage({ cmd: 'closeWindow' });
  }

  if (cmd === 'close-tabs-minimize-window') {
    storage = await getStorageItems(['options']);
    return chrome.runtime.sendMessage({ cmd: 'closeTabsButOneMinimizeWindow', url: storage.options.CLOSE_BUT_ONE_URL });
  }

  if (cmd === 'minimize-window') {
    return chrome.runtime.sendMessage({ cmd: 'minimizeWindow' });
  }

  if (!url) {
    console.error('Missing cmd and url:', window?.location?.href);
    return;
  }

  window.location.href = url;
}

console.info('serviceWorker.js begin');

import { defaultOptions, overrideOptions } from '../config/config';
import { defaultMessageHandler, initOptions } from '@ahstream/hx-chrome-lib';

const customOptions = { foo: 'bar' };

chrome.runtime.onInstalled.addListener(() => {
  initOptions(defaultOptions, overrideOptions, customOptions);
  console.info('Extension successfully installed!');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.info('Received message; request, sender:', request, sender);

  const defaultResult = defaultMessageHandler(request, sender);
  if (defaultResult?.ok) {
    console.log('Handled in messageHandler');
    if (defaultResult.response !== undefined) {
      sendResponse(defaultResult.response);
    }
    return;
  }

  if (messageHandler) {
    messageHandler(request, sender, sendResponse);
  } else {
    sendResponse();
  }
});

// HELPER FUNCTIONS

function messageHandler(request, sender, sendResponse) {
  switch (request.cmd) {
    default:
      console.error('Received unexpected message!', request, sender);
      break;
  }
  sendResponse();
}

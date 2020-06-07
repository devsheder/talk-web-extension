const log = (...args) => {
  console.log('context-menu.js > ', ...args);
};

log('start');

// Multi-browser
let specificBrowserObject;
if (navigator.vendor.includes('Google')) {
  specificBrowserObject = chrome;
} else {
  specificBrowserObject = browser;
}

function onCreated() {
  if (specificBrowserObject.runtime.lastError) {
    log(`Error: ${specificBrowserObject.runtime.lastError}`);
  } else {
    log('Item created successfully');
  }
}

const idContextMenu = 'my-context-menu';
specificBrowserObject.contextMenus.create(
  {
    id: idContextMenu,
    title: 'click me',
    contexts: ['all'],
  },
  onCreated
);

specificBrowserObject.contextMenus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case idContextMenu:
      log('Hello world!');
      break;
    default:
      break;
  }
});

log('end');

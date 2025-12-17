const browser = document.getElementById('browser');
const urlBar = document.getElementById('url');

function loadURL() {
  let url = urlBar.value;
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }
  browser.loadURL(url);
}

function goBack() {
  if (browser.canGoBack()) {
    browser.goBack();
  }
}

function goForward() {
  if (browser.canGoForward()) {
    browser.goForward();
  }
}

function reloadPage() {
  browser.reload();
}

const log = (...args) => {
  console.log('popup.js > ', ...args);
};

log('start');

document.getElementById('clickMe').addEventListener('click', () => {
  alert('Hello World!');
});

log('end');

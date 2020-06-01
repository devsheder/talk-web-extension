const log = (...args) => {
  console.log('Weather extension >', ...args);
};

log('start');

document.getElementById('clickMe').addEventListener('click', () => {
  alert('Hello World!');
});

log('end');

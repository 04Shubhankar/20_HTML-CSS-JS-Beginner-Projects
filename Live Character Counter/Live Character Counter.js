const textarea = document.querySelector('textarea');
const counter = document.querySelector('.Counter');
const wospace = document.querySelector('.wospace');
textarea.value = '';

function countingcharactor() {
  const txtlen = textarea.value.length;
  const txtlenWithoutSpaces = textarea.value.replace(/\s/g, '').length; 

  counter.innerText = `${txtlen}`;
  wospace.innerText = `${txtlenWithoutSpaces}`;
}


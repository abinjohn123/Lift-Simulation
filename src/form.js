const floorsInputLabelEl = document.querySelector('#num-floors');
const liftsInputLabelEl = document.querySelector('#num-lifts');
const formEl = document.querySelector('#form');

let numFloors = 0,
  numLifts = 0;

const showInvalid = (el, message) => {
  const messageContainerEl = el.querySelector('.error-msg');

  el.classList.add('error');
  messageContainerEl.innerText = message;
};

const clearInvalidations = () => {
  const inputLabels = [floorsInputLabelEl, liftsInputLabelEl];

  for (const el of inputLabels) {
    const messageContainerEl = el.querySelector('.error-msg');

    el.classList.remove('error');
    messageContainerEl.innerText = '';
  }
};

const validateInputs = (e) => {
  e.preventDefault();
  numFloors = Number(floorsInputLabelEl.querySelector('input').value);
  numLifts = Number(liftsInputLabelEl.querySelector('input').value);

  clearInvalidations();

  if (numFloors < 2) {
    showInvalid(floorsInputLabelEl, 'Number of floors cannot be less than 2');
    return false;
  }

  if (numLifts < 1) {
    showInvalid(liftsInputLabelEl, 'Number of lifts cannot be less than 1');
    return false;
  }

  return true;
};

export { numFloors, numLifts, validateInputs, formEl };

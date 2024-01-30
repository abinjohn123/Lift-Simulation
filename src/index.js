import { numFloors, numLifts, formEl, validateInputs } from './form.js';

const switchActiveContainer = (id) => {
  const allSections = document.querySelectorAll('.section-container');
  const activeSection = document.querySelector(`#container-${id}`);

  allSections.forEach((section) => (section.style.display = 'none'));
  if (activeSection) activeSection.style.display = 'block';
};

const handleFormSubmit = (e) => {
  const isValid = validateInputs(e);

  if (isValid) switchActiveContainer(2);
};

// init
switchActiveContainer(0);
formEl.addEventListener('submit', handleFormSubmit);

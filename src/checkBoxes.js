export const getSelectedCheckboxValues = (checkboxName) => {
  const selectedValues = [];
  const checkboxes = document.querySelectorAll(`input[name="${checkboxName}"]:checked`);
  
  checkboxes.forEach(checkbox => {
    selectedValues.push(checkbox.value);
  });
  
  return selectedValues;
};
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked

function handleCheck(e) {
  // check is Shift key is held down
  // AND check that they are checking
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    // loop over everycheckbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox == lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check inBetween!');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

const descriptioninput = document.querySelector('input.description');
const descriptionp = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('#list');
const addItemInput = document.querySelector('input.addItem');
const addItemButton = document.querySelector('button.addItem');
const removeItemButton = document.querySelector('button.removeItem');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

descriptionbutton.addEventListener('click', () => {
  descriptionp.textContent = descriptioninput.value + ':';
  descriptionp.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemButton.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

function checkForName(inputText) {
  console.log('::: Running checkForName :::', inputText);
  let names = ['Picard', 'Janeway', 'Kirk', 'Archer', 'Georgiou'];

  if (names.includes(inputText)) {
    alert('Welcome, Captain!');
    console.log('Welcome, Captain!');
  } else {
    console.log('FAILED!!!!');
  }
}

export { checkForName };

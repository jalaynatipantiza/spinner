

const spinner = (arr) => {
  let increase = 0;
  let newLine = arr.concat('\n') 
  for(let i = 0; i < newLine.length; i++) {
    increase += 100;
    setTimeout(() => {
      process.stdout.write(newLine[i]);
    }, increase);
  }
}

const array = ['\r|   ','\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r\\   ', '\r|   ', '\r-   ' ];
spinner(array);

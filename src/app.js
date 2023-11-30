const array1 = ['the', 'our'];
const array2 = ['great', 'big'];
const array3 = ['jogger', 'racoon'];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomLink() {
  const part1 = getRandomElement(array1);
  const part2 = getRandomElement(array2);
  const part3 = getRandomElement(array3);

  const randomLink = `https://${part1}${part2}${part3}.com`;

  return randomLink;
}

const randomLink = generateRandomLink();
console.log(randomLink);


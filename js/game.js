let location1 = 5;
let location2 = 6;
let location3 = 7;
let currentShot;
let shots = 0;
let hits = 0;
let isSunk = false;
while (isSunk === false) {
  currentShot = Number(prompt('Enter number from 0 to 9:'));
  // При вводе неподходящего значения (числа меньше 0 или больше 9 или буквы) выводит ошибку и просит ввести заново
  while (currentShot < 0 || currentShot > 9 || currentShot !== Number(currentShot)) {
      alert('Inappropriate input.');
      currentShot = Number(prompt('Enter number from 0 to 9:'));
  }
  shots++;
  if (currentShot === location1) {location1 = false; alert('Hit!')}
    else if (currentShot === location2) {location2 = false; alert('Hit!')}
    else if (currentShot === location3) {location3 = false; alert('Hit!')}
    else alert('Try again!');
  if (location1 === false && location2 === false && location3 === false) {
    alert('Win');
    isSunk = true;
  }
}

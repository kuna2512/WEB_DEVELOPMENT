const app = [1, 2, 3, 4, 5];
const newArr = [];

for (let i = 0; i < app.length; i++) {
  if (app[i] % 2 === 0) {
    newArr.push(app[i]);
  }
}

console.log(newArr);

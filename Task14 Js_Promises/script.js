const divide = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject(new Error("Division by zero is not allowed"));
    } else {
      resolve(num1 / num2);
    }
  });
};

divide(10, 5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

divide(10, 0)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:",err.message));
divide(9,3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
divide(42,0)
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:",err.message));
divide(48,4)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
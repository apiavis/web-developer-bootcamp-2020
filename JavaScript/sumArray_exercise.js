function sumArray(arrOfNums) {
    let total = 0;
    for (let num of arrOfNums) {
        total += num;
    }
    return total;
}

sumArray([1, 2, 3, 4, 5]);
sumArray([10, 20, 30]);
sumArray([0, 10, 0, 50, 40]);
sumArray([-10, 10, 0, 50, 40, -100]);
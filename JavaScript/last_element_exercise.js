function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

lastElement([]);
lastElement([1, 2, 3, 4, 5]);
lastElement([10, 10, 15, 20, 25]);
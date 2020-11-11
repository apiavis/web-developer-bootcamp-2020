function returnDay(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num - 1];
    }
}

returnDay(1);
returnDay(0);
returnDay(7);
returnDay(8);
returnDay(3);
function cleanNames(arr) {
    const trimmedNames = arr.map(function (name) {
        return name.trim();
    })
    return trimmedNames;
}
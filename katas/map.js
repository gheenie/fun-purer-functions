function map(arr, func) {
    const mappedArr = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArr.push( func(arr[i]) );
    }
    
    return mappedArr;
}

module.exports = map;

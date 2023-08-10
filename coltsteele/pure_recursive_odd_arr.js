function recursive_odds(arr) {
    if (arr.length < 1) {
        return [];
    }
    if (arr[0] % 2 == 1) return [arr[0]].concat(recursive_odds(arr.slice(1)));
    else return [].concat(recursive_odds(arr.slice(1)));
}
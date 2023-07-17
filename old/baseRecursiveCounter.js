function baseRecursiveCounter(num){
    console.log(num)
    if (num <= 0) {
        return 0
    }
    return baseRecursiveCounter(num - 1)
}
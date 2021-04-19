const Ex2 = (n) => {
    let result = []

    for (let i = 0; i < n.length; i++) {
        if (result.indexOf(n[i]) === -1){
            result.push(n[i])
        }
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i; j < result.length; j++) {
            let min = result[i]
            if (result[j] < min){
                let temp = 0
                // swap
                temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }

    return result
}
const myArray = [1, 3, 5, 3, 4, 6]

console.log(Ex2(myArray))
const Ex1 = (n, a) => {
    let result = [0]
    for (let i = 0; i < n.length; i++) {
        if (n[i] === a){
            result[0]++
            result.push(i)
        }
    }
    return result
}
const myArray = [1,3,5,3,4,6]

console.log(Ex1(myArray, 3))

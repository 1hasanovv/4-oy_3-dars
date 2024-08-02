// 1-masala
let array = [1, 55, 63, 12, 3, 53, 31, 42, 61, 53]
if (array[0] % 2 === 0) {
    console.log("Juft sonlar", array.filter(num => num % 2 === 0))
}
// 2-masala
for (let i = 1; i <= 50; i += 2) {
    console.log(i)
}
// 3-masala
let number = prompt("Son kiriting")
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i
}
console.log("Yig'indi", sum)
// 4-masala
let oddSum = 0
let evenSum = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenSum += i
    } else {
        oddSum += i
    }
}
console.log("Toq sonlar yig'indisi", oddSum)
console.log("Juft sonlar yig'indisi", evenSum)
// 5-masala
let n = prompt("n ni kiriting")
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i)
    }
}

// 6-masala
let a = prompt("a ni kiriting")
let b = prompt("b ni kiriting")
for (let i = a; i <= b; i++) {
    console.log(i)
}

// 7-masala
let a2 = prompt("a ni kiriting")
let b2 = prompt("b ni kiriting")
for (let i = a2; i <= b2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}

// 8-masala
let a3 = prompt("a ni kiriting")
console.log(`A ning bo'luvchilari`)
for (let i = 1; i <= a3; i++) {
    if (a3 % i === 0) {
        console.log(i)
    }
}

// 9-masala
let numbers = prompt("2 xonali son kiriting")
if (numbers.length === 2) {
    let tens = Math.floor(numbers / 10)
    let units = numbers % 10
    console.log("Onliklar xonasidagi son", tens)
    console.log("Birliklar xonasidagi son", units)
} else {
    console.log("Iltimos, 2 xonali son kiriting.")
}

// 10-masala
let twoDigitNumber = prompt("2 xonali son kiriting")
if (twoDigitNumber >= 10 && twoDigitNumber < 100) {
    let tens = Math.floor(twoDigitNumber / 10)
    let units = twoDigitNumber % 10
    let sum = tens + units
    console.log("Yig'indi", sum)
} else {
    console.log("Iltimos, 2 xonali son kiriting.")
}

// 11-masala
let array11 = [true, "25", undefined, null]
let hasBoolean = array11.some(item => typeof item === 'boolean')
console.log(hasBoolean ? "Bor" : "Yo'q")

// 12-masala
let array12 = [44, 33, 22, 3, 2, 1, 55, 6]
console.log("Teskari tartib", array12.reverse())

// 13-masala
let sumArray13 = array12.reduce((acc, curr) => acc + curr, 0)
console.log("Yig'indi", sumArray13)

// 14-masala
let array14 = [4, 2, 4, true, false, null]
let sum14 = 0
for (let item of array14) {
    if (typeof item === 'number') {
        sum14 += item;
    } else if (typeof item === 'boolean') {
        sum14 += item ? 1 : 0; // true ni 1, false ni 0 deb hisoblimz
    }
}
console.log("Yig'indi", sum14)


// 15-masala
let array15 = [-5, 2, -4, 99, 21, 2, -9, -52]
let negativeSum = 0
for (let num of array15) {
    if (num < 0) {
        negativeSum += num
    }
}
console.log("Manfiylar yig'indisi", negativeSum)

// 16-masala
let array16 = [ -5, 2, -4, 99, 21, 2, -9, -52]
let positiveCount = 0
let negativeCount = 0
for (let num of array16) {
    if (num > 0) {
        positiveCount++
    } else if (num < 0) {
        negativeCount++
    }
}
console.log("Musbat sonlar soni", positiveCount)
console.log("Manfiy sonlar soni", negativeCount)

// 17-masala
for (let i = 20; i >= 1; i--) {
    console.log(i)
}

// 18-masala
let namesArray = ["Komiljon", "Yusufbek", "Islomjon", "Akbar"]
let inputName = prompt("Ism kiriting")
if (namesArray.includes(inputName)) {
    alert("Bunday ism bor")
} else {
    alert("Bunday ism yo'q")
}


// 1_masala
let array1 = [10, -5, 3, -2, 8, -1]
let sum1 = array1.reduce((acc, curr) => acc + curr, 0)
console.log("Yig'indi:", sum1)

// 2_masala
let dollars = parseFloat(prompt("Dollar miqdorini kiriting:"))
let exchangeRate = 12580  // 1 dollar = 12 580  so'm (misol uchun)
let soms = dollars * exchangeRate
alert(`${dollars} dollar ${soms} so'mga teng.`)

// 3_masala
let numberss = parseInt(prompt("Ixtiyoriy son kiriting:"))
let squared = number ** 2
if (squared % 2 === 0) {
    alert(`Natija juft son: ${squared}`)
} else {
    alert(`Natija toq son: ${squared}`)
}

// 4_masala
let limit = parseInt(prompt("Son kiriting:"))
let sumOfMultiplesOfThree = 0;
for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
        sumOfMultiplesOfThree += i
    }
}
console.log("3 ga bolinadiganlar yig'indisi:", sumOfMultiplesOfThree)

// 5_masala
let array5 = [1, 3, 5, 2, 7]
let hasTwo = array5.includes(2)
console.log(hasTwo ? "Arrayda 2 soni bor." : "Arrayda 2 soni yo'q.")


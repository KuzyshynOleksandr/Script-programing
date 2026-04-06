function isInteger(num) {
    return Number.isInteger(num);
}

function findPrimes(a, b) {
    console.log(`Прості числа в діапазоні від ${a} до ${b}:`);
    
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function showPrimes(n) {
    listnumber = []
    for (let i=2; i<=n; i++){
        
        if (!isPrime(i)) continue;
        listnumber.push(i)
    }
    alert("For n = "+ n + " prime numbers are " + listnumber);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
        
    }
    return true;
}
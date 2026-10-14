function contaCifre(n) {
  if (n > 9999) {
    return 'Numero troppo grande';
  } else if (n >= 1000) {
    return '4 cifre';
  } else if (n >= 100) {
    return '3 cifre';
  } else if (n >= 10) {
    return '2 cifre';
  } else {
    return '1 cifra';
  }
}

console.log(contaCifre(9));     // 1 cifra
console.log(contaCifre(99));    // 2 cifre
console.log(contaCifre(12000)); // Numero troppo grande
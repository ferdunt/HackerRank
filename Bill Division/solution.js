function bonAppetit(bill, k, b) {
  // 💬 Update 'bill' array at position 'k'
  bill[k] = 0;

  // 💬 Sum all the items in bill array and divide by 2
  const total = bill.reduce((acc, cur) => acc + cur, 0) / 2;

  // 💬 Check if 'b' is equal to total
  if (b === total) {
    console.log('Bon Appetit');
  } else {
    console.log(b - total);
  }
}

const result = bonAppetit([3, 10, 2, 9], 1, 12);

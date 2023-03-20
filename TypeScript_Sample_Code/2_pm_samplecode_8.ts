function sumPrice(...price: number[]): number {
  return price.reduce((pre: number, next: number) => {
    return pre + next;
  }, 0);
}

console.log(sumPrice(100, 300, 500));

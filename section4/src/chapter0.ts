function func(a: number, b: number): number {
  return a + b;
}

const a = (a: number, b: number): string => (a + b).toString();

function introduce(name = "NAME", tall?: number): void {
  console.log(`name : ${name}, tall : ${tall}`);

  // 타입 가드
  if (typeof tall === "number") {
    console.log(`tail : ${tall + 10}`);
  }
}

introduce("NAME", 170);
introduce("NAME");
introduce();

// rest parameter
function getSum(...rest: number[]): number {
  return Array.from(rest).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

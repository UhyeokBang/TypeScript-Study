function func(value: number | string) {
  value;
  // value.toUpperCase()
  // value.toFixed();
  // these two lines makes error

  //타입을 검사한 조건문 안에서는 타입이 자동으로 좁혀짐
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

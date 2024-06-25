let numArr: number[] = [1, 2, 3];

let strArr = ["hello", "im", "winterpine"];

let boolArr: Array<boolean> = [true, false, true];

let multiArr: (string | number)[] = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [1, 2],
];

let tup1: [number, number] = [1, 2];
//tup1 = [1,2,3]; /error

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 4],
  // [5, "최아무개"], /error
];

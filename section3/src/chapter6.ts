type Person = {
  name: String;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

//타입 단언으로 아래가 가능해짐 as TYPE

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //원래 넣을 수 없음
} as Dog;

//이렇게 단언을 이용할 수 도 있음
let num1 = 10 as never;

//마치 const로 선언한 것 같아짐
let num4 = 10 as const;

//readonly 객체 처럼 동작함
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ""; 불가능함

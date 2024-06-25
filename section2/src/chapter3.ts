let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apikey: string;
} = {
  apikey: "MY API KEY",
};

//config.apikey = "hacked"; 읽기 전용 프로퍼티 임으로 수정할 수 없습니다.

//enum 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "kr",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.english,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
  language: Language.korean,
};

const user3 = {
  name: "방우혁",
  role: Role.GUEST,
  language: Language.korean,
};

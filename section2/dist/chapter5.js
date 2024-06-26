//enum 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "kr";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "Bang",
  nickname: "pine",
  birth: "202011300",
  bio: "안녕하세요",
  location: "부천시",
};

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitiedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
};

// array , object

// ts - tuple

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(true);

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push(true);

let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

// reference type : object

// const user: {
//   organization: "Programming Hero";// value => type : literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// user.organization = "Programming Hero Fire";

const user: {
  readonly organization: string; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

user.organization = "Programming Hero Fire";

console.log(user);

console.log(user);

"use strict";
// array , object
Object.defineProperty(exports, "__esModule", { value: true });
// ts - tuple
let bazarList = ["eggs", "milk", "sugar"];
bazarList.push(true);
let mixedArr = ["eggs", 12, "milk", 1, "sugar", 2];
mixedArr.push(true);
let coordinates = [20, 30, 50];
let couple = ["Husband", "wife"];
let destination = ["Dhaka", "Chattogram", 3];
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
const user = {
    organization: "Programming Hero",
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true,
};
user.organization = "Programming Hero Fire";
console.log(user);
console.log(user);
//# sourceMappingURL=nonPrimitive.js.map
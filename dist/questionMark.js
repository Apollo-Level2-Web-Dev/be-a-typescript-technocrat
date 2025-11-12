"use strict";
// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const biyerJonnoEligible = (age) => {
    //   if (age >= 21) {
    //     console.log("You are eligible");
    //   } else {
    //     console.log("You are not eligible !");
    //   }
    const result = age >= 21 ? "You are eligible" : "You are not eligible !";
    console.log(result);
};
biyerJonnoEligible(21);
const userTheme = "Green theme";
const selectedTheme = userTheme !== null && userTheme !== void 0 ? userTheme : "Light theme";
console.log(selectedTheme);
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNulish = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : '"You are guest !';
console.log({ resultWithTernary }, { resultWithNulish });
//optional chaining
const user = {
    address: {
        city: "Dhaka",
        town: "Banani",
    },
};
const postalCode = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.postalCode;
console.log(postalCode);
//# sourceMappingURL=questionMark.js.map
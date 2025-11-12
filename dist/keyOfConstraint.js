"use strict";
// keyof : type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "ship";
const user = {
    id: 222, // key: value
    name: "Mezba",
    address: {
        city: "ctg",
    },
};
// //const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];
//console.log({ myId, myName, address });
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
// const result1 = getPropertyFromObj(user, "emni");
// console.log(result);
const product = {
    brand: "HP",
};
const student = {
    id: 123,
    class: "four",
};
const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");
//# sourceMappingURL=keyOfConstraint.js.map
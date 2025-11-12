"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Rahim", "Karim"];
const schoolFriends = ["pintu", "chintu", "bulbul"];
const collegeFriends = ["Mr. Smart", "Mr very very smart"];
// const friends = ["Rahim", "Karim", ["pintu", "chintu", "bulbul"]];
friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);
const user = { name: "Mezba", phoneNo: "0170000000" };
const otherInfo = { hobby: "outing", favouriteColor: "Black" };
const userInfo = Object.assign(Object.assign({}, user), otherInfo);
console.log(userInfo);
// rest opeartor
const sendInvite = (...friends) => {
    friends.forEach((friend) => console.log(`Send invitation to ${friend}`));
};
sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");
//# sourceMappingURL=spreadAndRest.js.map
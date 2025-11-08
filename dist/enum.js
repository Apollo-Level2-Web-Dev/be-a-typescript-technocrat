"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type UserRoles = "Admin" | "Editor" | "Viewer";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
};
const result = canEdit(UserRoles.Admin);
console.log(`User Role 'Admin': ${result}`);
//# sourceMappingURL=enum.js.map
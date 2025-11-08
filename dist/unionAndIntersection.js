"use strict";
// union |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User dashboard";
    }
    else {
        return "guest dashboard";
    }
};
getDashboard("guest");
const ChowdhuryShaheb = {
    id: "123",
    name: "Chowdhury Shaheb",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
};
//# sourceMappingURL=unionAndIntersection.js.map
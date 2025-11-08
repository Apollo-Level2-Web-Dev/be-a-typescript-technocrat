// as const assertion
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
var UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
/*
{
  readonly Admin: "Admin",
  readonly Editor: "Editor",
  readonly Viewer: "Viewer",

1. typeof perator
2. keyof operator

const user= {
 id: 222,
 name:'Mezba'
}

typeof user;

{
id: number;
name:string
}

typeof UserRoles

{
 Admin: 'Admin';
 Editor: "Editor",
 Viewer: "Viewer",
}

keyof typeof UserRoles
'Admin'| 'Editor' | 'Viewer'


}
*/
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);

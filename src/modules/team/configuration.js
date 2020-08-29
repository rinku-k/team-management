import { ROLES } from '../../constants';

export const memberDetail = [{
  placeholder: "First name",
  key: "first",
  type: null,
}, {
  placeholder: "Last name",
  key: "last",
  type: null,
}, {
  placeholder: "Email",
  key: "email",
  type: "email-address",
}, {
  placeholder: "9876543210",
  key: "phone",
  type: "phone-pad",
},
];

export const roles = [{
  text: "Regular - Can't delete members",
  type: ROLES.REGULAR,
}, {
  text: "Admin - Can delete members",
  type: ROLES.ADMIN,
},
];
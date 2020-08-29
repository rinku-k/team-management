import { ROLES } from '../../../constants';

export const memberDetail = [{
  placeholder: "First name",
  key: "first",
  limit: 20,
  type: null,
}, {
  placeholder: "Last name",
  key: "last",
  limit: 20,
  type: null,
}, {
  placeholder: "Email",
  key: "email",
  limit: 40,
  type: "email-address",
}, {
  placeholder: "9876543210",
  key: "phone",
  limit: 12,
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
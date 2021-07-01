export * from './fonts';
export * from './colors';

export const SPACINGS = {
  inner: 10,
  container: 15,
  headerPadding: 30,
};

export const BORDERS = {
  thin: 0.5,
  medium: 1,
  thick: 2,
  radius: 4,
};

export enum ROLES {
  UNKNOWN,
  REGULAR,
  ADMIN,
}

export enum SCREENS {
  LIST,
  EDIT,
}

export enum ACTIONS {
  BACK,
  DELETE,
  SAVE,
}

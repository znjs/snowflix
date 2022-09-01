export type DefaultAuthContext = {
  userData: {
    encodedToken: string;
    user: { firstName: String; lastName: string };
  };
  setUserData: any;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, otherData: {}) => Promise<void>;
};

export const getAuth = jest.fn(() => ({
  currentUser: {
    getIdToken: jest.fn(async () => ''),
  },
}));

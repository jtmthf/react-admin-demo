export default {
  login: async ({ username }: { username: string }) => {
    localStorage.setItem("username", username);
  },
  logout: async () => {
    localStorage.removeItem("username");
  },
  checkError: async ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      throw new Error();
    }
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

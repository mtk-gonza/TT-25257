let users = [];
let id = 1;

export const findAll = async () => {
  return users;
};

export const create = async (userData) => {
  const newUser = { id: id++, ...userData };
  users.push(newUser);
  return newUser;
};
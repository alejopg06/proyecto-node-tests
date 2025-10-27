const users = [];

function addUser(name, age) {
  if (!name || age < 0) return null;
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  return newUser;
}

function getUsers() {
  return users;
}

module.exports = { addUser, getUsers };

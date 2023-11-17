// enahced object literals

function newUser(user, age, country, uID) {
  return {
    user,
    age,
    country,
    ID: uID /* asi se trabaja antes por ejemplo ID: uID */,
  };
}
console.log(newUser('Bryan', 24, 'SV', 2));

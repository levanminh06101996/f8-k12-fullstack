const templateString =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateId(prefix, length) {
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * templateString.length);
    id += templateString[randomIndex];
  }

  return prefix + id;
}
generateId("category - ", 6); // Output: "category - 2Fb3aD"

// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(user: User) {
  return user;
}

const newUser = createUser({firstName:'Ola', lastName: 'Nordmann', age: 18, isAdmin: null, id: 1});
const newAdmin = createUser({firstName: 'Kari', lastName: 'Nordmann', age: 36, isAdmin: true, id: 2});

console.log(newUser);
console.log(newAdmin);

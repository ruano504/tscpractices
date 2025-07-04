
interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  { type: 'admin', name: 'Javier Castillo', age: 32, role: 'Estudiante' },
  { type: 'user', name: 'Maria Isabel Hernandez', age: 23, occupation: 'Abogada' },
  { type: 'admin', name: 'Jorge Perez', age: 64, role: 'Contador' },
];

export function isAdmin(person: Person): unknown {
  return person.type === 'admin';
}

export function isUser(person: Person): unknown {
  return person.type === 'user';
}

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
    additionalInformation = (<Admin>person).role;
  }
  if (isUser(person)) {
    additionalInformation = (<User>person).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

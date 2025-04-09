export const sayHello = (name: string): string => `Hello, ${name}!`;

export interface User {
  id: number;
  name: string;
}

export const getUser = (id: number): User => ({ id, name: `User${id}` });
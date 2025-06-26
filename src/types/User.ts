export interface User {
  id: number
  name: string
  email: string
}

/* define to not include "id" for new create user */
export type NewUser = Omit<User, 'id'>

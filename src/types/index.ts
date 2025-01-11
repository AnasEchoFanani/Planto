export interface User {
  id: string;
  name: string;
  email: string;
}

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading'; 
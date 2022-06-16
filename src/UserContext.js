import { createContext } from 'react';

const UserContext = createContext({properties: [], setProperties :() => {},});

export default UserContext;
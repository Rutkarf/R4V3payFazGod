import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  urlAPI: 'http://localhost:3000/v1',
  auth: {
    domain: 'dev-potitschat.eu.auth0.com',
    clientId: 'eTJncrvP8o5RyOMhuUlXod6OG4Iqgl2h',
    authorizationParams: {
      audience: 'https://api.potits-chats.com',
      redirect_uri: 'http://localhost:4200/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:3000',
  },
};

import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  urlAPI: 'https://api.potits-chats.com/v1',
  auth: {
    domain: 'dev-potitschat.eu.auth0.com',
    clientId: 'jhgfd',
    authorizationParams: {
      audience: 'https://api.potits-chats.com',
      redirect_uri: 'https://potits-chats.com/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'https://api.potits-chats.com',
  },
};

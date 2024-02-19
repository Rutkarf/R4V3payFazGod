import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  urlAPI: 'https://api.potits-chats.com/v1',
  auth: {
    domain: 'dev-potitschat.eu.auth0.com',
    clientId: 'eTJncrvP8o5RyOMhuUlXod6OG4Iqgl2h',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};

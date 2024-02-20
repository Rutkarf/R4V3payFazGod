import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  urlAPI: 'http://localhost:3000/v1',
  auth: {
    domain: 'dev-potitschat.eu.auth0.com',
    clientId: 'eTJncrvP8o5RyOMhuUlXod6OG4Iqgl2h',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};

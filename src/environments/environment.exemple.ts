export const environment = {
  production: false,
  auth: {
    domain: 'toto.eu.auth0.com',
    clientId: 'aze123',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
};

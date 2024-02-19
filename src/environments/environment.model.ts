export interface Environment {
  production: boolean;
  urlAPI: string;
  auth: {
    domain: string;
    clientId: string;
    authorizationParams: {
      redirect_uri: string;
    };
  };
}

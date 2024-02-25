export interface Environment {
  production: boolean;
  urlAPI: string;
  auth: {
    domain: string;
    clientId: string;
    authorizationParams: {
      audience: string;
      redirect_uri: string;
    };
    errorPath: string;
  };
  api: {
    serverUrl: string;
  };
}

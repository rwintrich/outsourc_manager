export const environmentDefaults = {
  api: {
    uiManager: 'https://devk8.sinqia.com.br/api/core-ui-manager-server/api/v1',
    scheduler: 'https://dev.sinqia.io/api-consorcio-scheduler'
  },
  supportedLanguages: [
    'pt-Br'
  ],
  defaultLanguage: 'pt-BR',
  //systemVersion: require('../../package.json').version,
  defaultPage: 15,
  mockService: false,
  production: false,
  hmr: false,
  baseOauth2: 'https://dev.sinqia.com.br/auth/realms/sinqia',
  enabledSecurity: false,
  enabledAuthorization: false,
  enabledTracking: false
};

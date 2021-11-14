import { environmentDefaults } from './enviroment-defaults';

export const environment = {
  ...environmentDefaults,
  api: {
    ...environmentDefaults.api,
    workflow: 'http://localhost:8345',
    cadastroCota: 'http://localhost:8315',
    audit: 'http://localhost:8360',
    eventService: 'http://localhost:8355'
  },
  mockService: true,
  envName: 'test',
  version: '(dev)',
  baseUrl: window.location.origin,
  baseUrlAssembleia: 'http://localhost:4210',
  baseUrlDashboard: 'http://localhost:8365/api-consorcio-dashboard/',
  baseUrlFilemanagerAdmin: 'https://localhost:4240/',
  baseUrlReportAdmin: 'https://localhost:4300/',
  baseUrlDocumentAdmin: 'https://localhost:4310/',
  baseUrlWorkflow: 'http://localhost:4220',
  baseUrlBack: 'http://localhost:8285/v1',
  enabledSecurity: false,
  enabledAuthorization: false,
  enabledTracking: false,
  clientId: 'sq-consorcio'
};

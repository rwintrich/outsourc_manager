import { environmentDefaults } from './enviroment-defaults';

export const environment = {
  ...environmentDefaults,
  api: {
    ...environmentDefaults.api,
    workflow: 'http://localhost:8345',
    uiManager: 'http://localhost:7083/api/v1',
    atendimento: 'http://localhost:8310/v1',
    cadastroCota: 'http://localhost:8315',
    reports: 'http://localhost:8330',
    filemanager: 'http://localhost:8325',
    audit: 'http://localhost:8360',
    scheduler: 'http://localhost:8375',
    eventService: 'http://localhost:8355'
  },
  envName: 'dev',
  version: '(dev)',
  baseUrl: window.location.origin,
  baseUrlEncerramentoGrupos: 'http://localhost:4270',
  baseUrlAssembleia: 'http://localhost:4210',
  baseUrlFilemanagerAdmin: 'http://localhost:4240',
  baseUrlReportAdmin: 'http://localhost:4300/',
  baseUrlDocumentAdmin: 'https://localhost:4310',
  baseUrlDashboard: 'http://localhost:8365/',
  baseUrlWorkflow: 'http://localhost:4220',
  baseOauth2: 'http://localhost:9999/auth/realms/sinqia',
  baseUrlBack: 'http://localhost:8310/v1',
  enabledSecurity: false,
  enabledAuthorization: false,
  enabledTracking: false,
  clientId: 'sq-consorcio',
  contextPath: '/'
};

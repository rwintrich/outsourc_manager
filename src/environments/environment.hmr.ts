import { environmentDefaults } from './enviroment-defaults';

export const environment = {
  ...environmentDefaults,
  api: {
    ...environmentDefaults.api,
    workflow: 'https://hmg.sinqia.io/workflow',
    atendimento: 'https://hmg.sinqia.io/api-consorcio-core/v1',
    cadastroCota: 'https://hmg.sinqia.io/api-consorcio-gestao-cota',
    reports: 'https://hmg.sinqia.io/api-report-service',
    filemanager: 'https://hmg.sinqia.io/api-consorcio-filemanager',
    documents: 'https://hmg.sinqia.io/api-document-service',
    audit: 'https://hmg.sinqia.io/api-consorcio-audit',
    eventService: 'https://hmg.sinqia.io/api-consorcio-event-service'
  },
  envName: 'dev',
  version: '(dev)',
  baseUrl: window.location.origin,
  baseUrlBack: 'https://hmg.sinqia.io/api-consorcio-core/v1',
  baseUrlEncerramentoGrupos: 'https://hmg.sinqia.io/encerramento/',
  baseUrlFilemanagerAdmin: 'https://hmg.sinqia.io/filemanager/',
  baseUrlReportAdmin: 'https://hmg.sinqia.io/report',
  baseUrlDocumentAdmin: 'https://hmg.sinqia.io/document',
  baseUrlAssembleia: 'https://hmg.sinqia.io/assembleia/',
  baseUrlDashboard: 'https://hmg.sinqia.io/api-consorcio-dashboard/',
  baseUrlWorkflow: 'https://hmg.sinqia.io/workflow',
  hmr: true,
  enabledSecurity: false,
  enabledAuthorization: false,
  enabledTracking: false,
  clientId: 'sq-consorcio',
  contextPath: '/'
};

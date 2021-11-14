import { environmentDefaults } from './enviroment-defaults';

// TODO: Verificar como autorizacao ira trabalhar com funcionalidade de abrir abas no menu - enabledAuthorization
export const environment = {
  ...environmentDefaults,
  api: {
    uiManager: '$UIMANAGER_API_BASEURL',
    workflow: '$API_WORKFLOW',
    atendimento: '$APP_BACKEND_URL_CORE',
    cadastroCota: '$API_CADASTRO_COTA',
    reports: '$REPORT_API_BASEURL',
    filemanager: '$FILEMANAGER_API_URL',
    eventService: '$EVENT_SERVICE_API_URL',
    audit: '$AUDIT_API_URL',
    scheduler: '$SCHEDULER_API_URL'
  },
  production: true,
  envName: 'prod',
  version: '1.0.0',
  baseUrl: '$APP_FRONT_REDIRECTURL',
  baseUrlEncerramentoGrupos: '$APP_FRONT_ENCERRAMENTO_GRUPOS_URL',
  baseUrlAssembleia: '$APP_FRONT_ASSEMBLEIA_URL',
  baseUrlDashboard: '$APP_FRONT_DASHBOARD_URL',
  baseUrlReportAdmin: '$APP_FRONT_REPORT_URL',
  baseUrlFilemanagerAdmin: '$APP_FRONT_FILEMANAGER_URL',
  baseUrlDocumentAdmin: '$APP_FRONT_DOCUMENT_URL',
  baseUrlWorkflow: '$APP_FRONT_WORKFLOW_URL',
  baseUrlBack: '$APP_BACKEND_URL_CORE',
  enabledSecurity: JSON.parse('$ENABLED_SECURITY'),
  enabledAuthorization: JSON.parse('$ENABLED_AUTHORIZATION'),
  enabledTracking: JSON.parse('$ENABLED_TRACKING'),
  baseOauth2: '$BASE_OAUTH2_URL',
  clientId: '$CLIENT_ID',
  contextPath: '$APP_CONTEXT_PATH'
};

import { environmentDefaults } from './enviroment-defaults';

export const environment = {
    ...environmentDefaults,
    api: {
        ...environmentDefaults.api,
        workflow: 'https://dev.sinqia.io/workflow',
        uiManager: 'https://dev.sinqia.io/core-ui-manager-server/api/v1',
        atendimento: 'https://dev.sinqia.io/api-consorcio-core/v1',
        cadastroCota: 'https://dev.sinqia.io/api-consorcio-gestao-cota',
        reports: 'https://dev.sinqia.io/api-report-service',
        filemanager: 'https://dev.sinqia.io/api-consorcio-filemanager',
        documents: 'https://dev.sinqia.io/api-document-service',
        audit: 'https://dev.sinqia.io/api-consorcio-audit',
        scheduler: 'https://dev.sinqia.io/api-consorcio-scheduler',
        eventService: 'https://dev.sinqia.io/api-consorcio-event-service'
    },
    envName: 'dev',
    version: '(dev)',
    baseUrl: window.location.origin,
    baseUrlBack: 'https://dev.sinqia.io/api-consorcio-core/v1',
    baseOauth2: 'https://dev.sinqia.io/auth/realms/sinqia',
    baseUrlFilemanagerAdmin: 'https://dev.sinqia.io/filemanager/',
    baseUrlReportAdmin: 'https://dev.sinqia.io/report',
    baseUrlDocumentAdmin: 'https://dev.sinqia.io/document',
    baseUrlEncerramentoGrupos: 'https://dev.sinqia.io/encerramento/',
    baseUrlAssembleia: 'https://dev.sinqia.io/assembleia/',
    baseUrlDashboard: 'https://dev.sinqia.io/api-consorcio-dashboard/',
    baseUrlWorkflow: 'https://dev.sinqia.io/workflow',
    enabledSecurity: true,
    enabledAuthorization: true,
    clientId: 'sq-consorcio',
    contextPath: '/consorcio'
};

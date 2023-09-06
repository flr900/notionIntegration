
const msal = require('@azure/msal-node');
const clientConfig = require('./config.json')

const confidentialClientApplication = new msal.ConfidentialClientApplication(clientConfig);

return getTokenAuthCode(config, confidentialClientApplication, null);
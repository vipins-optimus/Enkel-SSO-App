// export default {
//     apiUrl: 'http://172.16.2.27:1500/application/',
//     oidc: {
//         clientId: '0oajf4fmekXu3wfGZ0h7',
//         issuer: 'https://dev-987362.oktapreview.com/oauth2/default',
//         redirectUri: 'http://enkelwebapp.azurewebsites.net/implicit/callback',
//         scope: 'openid profile email'
//     },
//     resourceServer: {
//         messagesUrl: 'http://enkelwebapp.azurewebsites.net/api/messages',
//     },
// };

// apiUrl: 'http://172.16.2.27:1500/application/',
// redirectUri: 'http://webappenkel1.azurewebsites.net/implicit/callback',
// messagesUrl: 'http://webappenkel1.azurewebsites.net/api/messages',


export default {
    apiUrl: 'http://172.16.2.27:1500/application/',
    oidc: {
        clientId: '0oaex6g9ftPUtl9XF356',
        issuer: 'https://dev-603976.okta.com/oauth2/default',
        redirectUri: 'http://localhost:8080/implicit/callback',
        scope: 'openid profile email'
    },
    resourceServer: {
        messagesUrl: 'http://localhost:8080/api/messages',
    },
};

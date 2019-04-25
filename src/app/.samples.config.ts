export default {
    apiUrl: 'http://172.16.2.27:1500/application/',
    oidc: {
        clientId: '0oai2q8utNjgekb7Z356',
        issuer: 'https://enkel.okta.com',
        redirectUri: 'http://enkelwebapp.azurewebsites.net/implicit/callback',
        scope: 'openid profile email'
    },
    resourceServer: {
        messagesUrl: 'http://enkelwebapp.azurewebsites.net/api/messages',
    },
};


// export default {
//     apiUrl: 'http://172.16.2.27:1500/application/',
//     oidc: {
//         clientId: '0oai2q8utNjgekb7Z356',
//         issuer: 'https://enkel.okta.com',
//         redirectUri: 'http://localhost:8080/implicit/callback',
//         scope: 'openid profile email'
//     },
//     resourceServer: {
//         messagesUrl: 'http://localhost:8080/api/messages',
//     },
// };

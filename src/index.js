let oidc;
if (ok === "true") {
    oidc = require("oidc-client/lib/oidc-client");
} else {
    oidc = require("oidc-client");
}
const {Log, OidcClientSettings} = oidc;

Log.level = Log.DEBUG;
Log.logger = console;

const validator = new OidcClientSettings({})._validator;

const metadataService = validator._metadataService;
metadataService.getIssuer = () => Promise.resolve("test");
metadataService.getSigningKeys = () => Promise.resolve([{kid:"a3rMUgMFv9tPclLa6yF3zAkfquE"}]);
validator._joseUtil.validateJwt = () => Promise.resolve();

const log = console.log.bind(console);
const resp = validator._validateIdToken({
    nonce: "7221005209972382"
}, {
    id_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMzMy9jb3JlIiwiYXVkIjoianMudG9rZW5tYW5hZ2VyIiwiZXhwIjoxNDU5MTMwMjAxLCJuYmYiOjE0NTkxMjk5MDEsIm5vbmNlIjoiNzIyMTAwNTIwOTk3MjM4MiIsImlhdCI6MTQ1OTEyOTkwMSwiYXRfaGFzaCI6IkpnRFVDeW9hdEp5RW1HaWlXYndPaEEiLCJzaWQiOiIwYzVmMDYxZTYzOThiMWVjNmEwYmNlMmM5NDFlZTRjNSIsInN1YiI6Ijg4NDIxMTEzIiwiYXV0aF90aW1lIjoxNDU5MTI5ODk4LCJpZHAiOiJpZHNydiIsImFtciI6WyJwYXNzd29yZCJdfQ.f6S1Fdd0UQScZAFBzXwRiVsUIPQnWZLSe07kdtjANRZDZXf5A7yDtxOftgCx5W0ONQcDFVpLGPgTdhp7agZkPpCFutzmwr0Rr9G7E7mUN4xcIgAABhmRDfzDayFBEu6VM8wEWTChezSWtx2xG_2zmVJxxmNV0jvkaz0bu7iin-C_UZg6T-aI9FZDoKRGXZP9gF65FQ5pQ4bCYQxhKcvjjUfs0xSHGboL7waN6RfDpO4vvVR1Kz-PQhIRyFAJYRuoH4PdMczHYtFCb-k94r-7TxEU0vp61ww4WntbPvVWwUbCUgsEtmDzAZT-NEJVhWztNk1ip9wDPXzZ2hEhDAPJ7A"
})
.then(log)
.catch(log);

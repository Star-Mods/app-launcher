import {GoogleDriveAPI} from "../files.js";
import url from 'url'

let data = {
    "client_id": "000000000000-00000000000000000000000000000000.apps.googleusercontent.com",
    "project_id": "heroes-of-the-strife",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "000000-000000000000000-000000000000",
    "redirect_uris": [
      "http://localhost"
    ]
}


function getAuthorizeUrl(){
  // which should be downloaded from the Google Developers Console.
  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = gdrive.client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/drive'
  });
  return authorizeUrl
}

async function getCredetialsFromAuthCallbackURL(urlstring){
  let code = url.parse(urlstring, true).query.code
  const r = await gdrive.client.getToken(code);
  gdrive.client.setCredentials(r.tokens);
  console.info('Tokens acquired.');
  return r;
}
let gdrive = new GoogleDriveAPI()
let url2 = getAuthorizeUrl()
console.log(url2)


let codeUrl = `http://localhost:3131/?code=4/0000000000000000000000000-000000000000000000000000000000000000000000000&scope=https://www.googleapis.com/auth/drive`
let r = await getCredetialsFromAuthCallbackURL(codeUrl)
console.log(r)
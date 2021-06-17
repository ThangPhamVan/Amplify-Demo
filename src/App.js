import logo from './logo.svg';
import './App.css';
import {API,Auth} from 'aws-amplify'
import { AmplifyChatbot, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  async function getInfo (){
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log("🚀 ~ file: App.js ~ line 10 ~ getInfo ~ token", token)
    const request = {
      headers: {Authorization:token},
    }
    const data = await API.get("hello","/hello",request);
    console.log("🚀 ~ file: App.js ~ line 15 ~ getInfo ~ data", data)
  }
  return (
    <div className="App">
        <AmplifyChatbot
       botName="yourBotName"
       botTitle="My ChatBot"
         welcomeMessage="Hello, how can I help you?"
  />
        <button
          onClick={getInfo}
        >
         Get Info User
        </button>
    </div>
  );
}

export default withAuthenticator(App);

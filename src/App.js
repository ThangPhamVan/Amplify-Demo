import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Auth } from 'aws-amplify';
import './App.css';

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
        <button
          onClick={getInfo}
        >
         Get Info User Hello
        </button>
    </div>
  );
}

export default withAuthenticator(App);

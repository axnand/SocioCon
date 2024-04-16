import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";

import { RegisterPage } from "./pages/RegisterPage";

import { GoogleOAuthProvider } from '@react-oauth/google';

import Index from './components/signin/index';
import GoogleDriveAPI from './pages/GoogleDriveAPI'


function App() {
  const [accessToken, setAccessToken] = useState(null);
  const handleAuthenticationSuccess = (token) => {
    setAccessToken(token);
  };
  return (
    <GoogleOAuthProvider clientId="361860959019-dke2kqtfqg095g2c41q75g06raebr8ln.apps.googleusercontent.com">
    <Router>
       <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact >
        <Index onAuthenticationSuccess={handleAuthenticationSuccess} />
        </Route>
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
      {accessToken && <GoogleDriveAPI accessToken={accessToken} />}
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

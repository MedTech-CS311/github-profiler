import "./App.css";
import reducer from './store/reducers/index'

// Components
import RepositoriesList from "./components/repositories/RepositoriesList";
import Profile from "./components/profile/Profile";
import Navbar from "./components/layouts/Navbar";

// eslint-disable-next-line
import authInterceptor from "./interceptors";

function App() {
  return (
    <div className="App">
      <Navbar />
      {!process.env.REACT_APP_GITHUB_TOKEN ? (
        <div className="app-container">
          Please insert your Github Token in the .env file
        </div>
      ) : (
        <div className="app-container">
          <div className="profile-container">
            <Profile />
          </div>
          <div className="repositories-container">
            <RepositoriesList />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

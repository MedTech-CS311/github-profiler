import './App.css';

// Components
import RepositoriesList from './components/repositories/RepositoriesList';
import Profile from './components/profile/Profile';

// eslint-disable-next-line
import authInterceptor from './interceptors';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <div className="profile-container">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;

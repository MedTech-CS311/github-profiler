import './App.css';
import RepositoriesList from './components/repositories/RepositoriesList';
// eslint-disable-next-line
import authInterceptor from './interceptors';

function App() {
  return (
    <div className="App">
      <RepositoriesList />
    </div>
  );
}

export default App;

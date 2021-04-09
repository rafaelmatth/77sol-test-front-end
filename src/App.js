import { Provider } from "react-redux";
import Routes from './routes';
import store from './store'
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Routes />
      </Provider>
    </div>
  );
}

export default App;

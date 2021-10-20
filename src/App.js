import { Provider } from 'react-redux'
import Button from './components/Button';
import Count from './components/Count';
import Data from './components/Data';
import store from './store/store';

function App() {
  return (
    
      <Provider store={store}>  
     
        Hello React Redux
        <Count />
        {/* <Data /> */}
        <Button />
      </Provider>
  
    
  );
}

export default App;

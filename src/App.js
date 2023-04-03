import './App.css';
import Store from './component/Store/Store';
import CardProvider from './StoreContext/CardProvider'

function App() {
  return (
    <CardProvider>
      <Store/>
    </CardProvider>
     
     
  )
}

export default App;

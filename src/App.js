
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import CounterButton from './CounterButton';
import Greetings from './Greetings';
import  Blog  from './Blog'
import Home from './Home'
import Layout from './Layout'
import Register from './Register';
function App() {

  return (   
    <BrowserRouter>    
    <Routes>
      <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/counter" element={<CounterButton/>} />
          <Route path="/greetings" element={<Greetings/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

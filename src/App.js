import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import CounterButton from './CounterButton';
import Greetings from './Greetings';
import  Blog  from './Blog'
import Home from './Home'
import Layout from './Layout'
import Register from './Register';
import StudentList from './StudentList';
function App() {
const students = [
  {
    name:'ajay',
    age: 22 
  },
  {
    name: 'sunil',
    age: 23
  },
  {
    name: 'reema',
    age:28
  }
]
  return (   
    <BrowserRouter>    
    <Routes>
      <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/counter" element={<CounterButton/>} />
          <Route path="/greetings" element={<Greetings/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/studentlist" element={<StudentList students={students}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

import { Routes, Route } from 'react-router-dom';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;

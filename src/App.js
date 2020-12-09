import './App.css';
import UseCallback from './pages/UseCallback';
import UseMemo from './pages/UseMemo';

function App() {
  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      {/* <UseCallback /> */}
      <UseMemo />
    </div>
  );
}

export default App;

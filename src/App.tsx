import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  
  return (
    <div className="App">
      {/* 此处可添加公共布局 */}
      {element}
    </div>
  );
}

export default App;

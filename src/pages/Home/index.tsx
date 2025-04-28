import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">关于我们</Link>
    </div>
  );
};

export default Home;

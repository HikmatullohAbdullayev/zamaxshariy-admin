import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <Link to="lessons">
        <h1 className="flex justify-center mx-auto px-[20px] py-[14px] bg-blue-500 max-w-[200px] text-white rounded-[12px] cursor-pointer">
          Darsliklar bo`limi
        </h1>
      </Link>
    </div>
  );
}

export default Home;

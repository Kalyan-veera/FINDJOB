import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
    <NavBar/>
    <div>
      <h1>Welcome to Job Portal</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
    </>
  );
}

export default Home;

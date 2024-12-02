import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <h3>CRUD Tutorial</h3>
      </Link>
      <div className="nav-routes">
        <Link className ="button" to ="/">Add Student</Link>
        <Link className ="button" to ="/list-students">List Students</Link>
      </div>
    </nav>
  );
}

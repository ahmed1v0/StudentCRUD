import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <a href="/">
        <h3>CRUD Tutorial</h3>
      </a>
      <div className="nav-routes">
        <a href="/">Add Student</a>
        <a href="/list-students">List Students</a>
      </div>
    </nav>
  );
}

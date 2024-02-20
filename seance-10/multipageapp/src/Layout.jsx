import { Link } from "react-router-dom";
export default function Layout({ withNav, children }) {
  if (withNav) {
    return (
      <div>
        <ul style={{ height: "100px", background: "orange" }}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
        {children}
        <div style={{ height: "200px", background: "green" }}>footer</div>
      </div>
    );
  }
  return children;
}

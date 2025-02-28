import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>找不到這個頁面</h2>
      <Link to="/">返回首頁</Link>
    </>
  );
}

export default NotFound;

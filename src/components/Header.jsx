import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Link to={"/"}>
          <strong>CreatorVerse</strong>
        </Link>

        <Link to={"/creators/add"}>Add Creator</Link>
      </div>
      <div style={{ height: 1, backgroundColor: "grey" }} />
    </>
  );
}

export default Header;

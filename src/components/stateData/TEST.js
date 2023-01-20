import { Link } from "react-router-dom"

const TEST = () => {
  return (
    <div>
      <h1>TEST</h1>
      <Link to="/">
        <button
          style={{
            width: "80px",
            height: "40px",
            alignSelf: "center",
            padding: "10px 20px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          HOME
        </button>
      </Link>
    </div>
  );
};



export default TEST;

import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>
        This is Homepage <strong>Route 🚀</strong>
      </h3>
      {/* cara berpindah ke halaman lain menggunakan click */}
      <button onClick={() => navigate("/about")}>Check About</button>
    </>
  );
};

export default First;

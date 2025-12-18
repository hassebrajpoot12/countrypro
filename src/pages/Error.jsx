import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  function handle() {
    navigate("/");
  }

  return (
    <>
      <h1>Error Page</h1>
      <button onClick={handle}>Go Back</button>
    </>
  );
};

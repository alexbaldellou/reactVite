import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <form className="flex flex-col bg-slate-800 p-5 rounded-md w-md">
        <input
          type="text"
          placeholder="Usuario"
          className="border-2 border-gray-100 rounded-md m-3 p-2 text-white placeholder-slate-300"
        ></input>
        <input
          type="password"
          placeholder="Contraseña"
          className="border-2 border-gray-100 rounded-md m-3 p-2 text-white placeholder-slate-300"
        ></input>
        <button
          className="m-3 bg-gray-50 text-slate-800 rounded-md p-3"
          onClick={onSubmit}
        >
          Acceder
        </button>
      </form>
    </div>
  );
};

export default Login;

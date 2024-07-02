import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";

const General = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, name, role } = useSelector((state) => state.reducer.user.user);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold my-2">General</h1>
      <p className="text-base font-medium mb-2">Email - {email}</p>
      <p className="text-base font-medium mb-2">Name - {name}</p>
      <p className="text-base font-medium mb-2">Role - {role}</p>

      <button
        type="button"
        className="bg-red-500 px-2 py-2 rounded-md"
        onClick={logoutHandler}
      >
        Log Out
      </button>
    </section>
  );
};

export default General;

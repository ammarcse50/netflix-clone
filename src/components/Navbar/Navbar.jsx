import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = async (e) => {
    e.preventDefault();

    await logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your logged out!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="absolute w-full p-4 flex item-center  justify-between z-50">
      <Link to={"/"}>
        <h1 className="text-red-600 font-nsans-bold text-5xl uppercase">
          Netflix
        </h1>
      </Link>

      <div>
        {user ? (
          <>
            {" "}
            <Link to="/profile">
              <button className="capitalize pr-4">Profile</button>
            </Link>
            <Link onClick={handleLogOut}>
              <button className="bg-red-600 px-6 py-2 rounded capitalize pr-4">Logout</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="capitalize pr-4">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded capitalize pr-4">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Nav = () => {
  const { userId } = useSelector((state) => state.reducer.user);

  return (
    <nav className=" shadow-lg flex items-center justify-between p-4">
      <Link to={"/"} className="font-extrabold text-2xl">
        POINT.IO
      </Link>
      {userId ? (
        <Link
          to={"/profile"}
          className="px-2 py-1 text-red-600 flex items-end gap-1 "
        >
          {" "}
          <UserCircleIcon width={27} /> Profile
        </Link>
      ) : (
        <div className="text-red-600 flex items-center gap-3 text-base font-medium">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

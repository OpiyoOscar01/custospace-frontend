import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Custospace</h1>

      <NavLink
        to={ROUTES.login}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        <BsBoxArrowInRight className="text-lg" />
        Go to Login
      </NavLink>
    </div>
  );
}

import { Link } from "@tanstack/react-router";

export const HeaderPanel = () => {
  return (
    <div className="h-14 bg-blue-800 p-4">
      <div className="flex items-end gap-4 text-white">
        <Link className="text-xl font-bold" to={"/"}>
          Tanstack router
        </Link>
        <Link to={"/movies/list"}>Movies</Link>
      </div>
    </div>
  );
};

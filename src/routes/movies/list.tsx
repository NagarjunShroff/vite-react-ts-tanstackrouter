import { createFileRoute, Link } from "@tanstack/react-router";
import { data } from "../../data/data";

export const Route = createFileRoute("/movies/list")({
  component: List,
});

function List() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map((e) => (
        <Link to="/movies/$movieId" params={{ movieId: e.id }}>
          {e.name}
        </Link>
      ))}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { data } from "../../data/data";

export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetails,
});

function MovieDetails() {
  const { movieId } = Route.useParams();
  const selectedMovie = data.filter((d) => d.id === movieId);
  return (
    <div className="p-4">
      This is the movie selected <b>{selectedMovie[0].name}</b>
    </div>
  );
}

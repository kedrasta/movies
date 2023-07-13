import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { URL_MOVIES } from "../response/data";

export function FilmDetailsCard({
  poster_path,
  backdrop_path,
  original_title,
  overview,
}) {
  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardMedia
          sx={{ width: 300, height: 300, backgroundSize: "100% 100%" }}
          image={`${URL_MOVIES.IMAGE}${poster_path || backdrop_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {original_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">back</Link>
        </CardActions>
      </Card>
    </>
  );
}

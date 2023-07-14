import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { Badge, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const ProductCard = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 280,
          padding: "0.1em",
        }}
      >
        <CardMedia
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image="/assets/images/product1.png"
          title="green iguana"
          component="img"
          height="250"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Play Station 3 Pro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Chip avatar={<CurrencyPoundIcon />} label="100" />
          <Badge
            color="secondary"
            badgeContent={0}
            sx={{ marginLeft: "5px", cursor: "pointer" }}
          >
            <AddShoppingCartIcon />
          </Badge>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;

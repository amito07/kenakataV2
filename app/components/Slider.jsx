import { Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";


const Item = ({item})=>{
  return (
    <Paper sx={{height:"60vh"}}>
       <Image src={item.img_url} fill/>
    </Paper>
)

}
const Slider = () => {
  var items = [
    {
      name: "Random Name #1",
      img_url: '/assets/images/cover1.png',
    },
    {
      name: "Random Name #2",
      img_url: '/assets/images/cover2.png',
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slider;

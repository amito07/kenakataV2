import WhatshotIcon from "@mui/icons-material/Whatshot";
import DealsMain from "./Cards/DealsCard/DealsMain";
const divStyle ={
    marginTop: '10px',
    marginLeft:'10px',
    marginRight:'10px'
}
const Deals = () => {
  return (
    <div style={divStyle}>
      <DealsMain icon = {<WhatshotIcon/>} title = "Flash Deals"  /><br/>
      <DealsMain icon = {<WhatshotIcon/>} title = "Hot Deals"  />
    </div>
  );
};

export default Deals;

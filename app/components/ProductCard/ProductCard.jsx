
import product from '../../../public/assets/images/product1.png';
import './ProductCard.css';
const ProductCard = () => {
  return (
    <div class="card">

    <div class="imgBox">
      <img src={product} alt="mouse corsair" class="mouse"/>
    </div>
  
    <div class="contentBox">
      <h3>Mouse Corsair M65</h3>
      <h2 class="price">61.<small>98</small> €</h2>
      <a href="#" class="buy">Buy Now</a>
    </div>
  
  </div>
  );
};

export default ProductCard;

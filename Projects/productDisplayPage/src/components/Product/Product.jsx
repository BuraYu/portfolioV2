import "./product.css";
import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";
import measure from "../../assets/measure.svg";
import amex from "../../assets/payment/amex.svg";
import mastercard from "../../assets/payment/mastercard.svg";
import paypal from "../../assets/payment/paypal.svg";
import visa from "../../assets/payment/visa.svg";

const Product = () => {
  let home = "Home";
  let category = "Category";
  let productPage = "Product page";

  return (
    <div className="product-wrapper">
      <div className="product-container">
        <div className="breadcrumb">
          <a href="#">{home}</a>
          <span>&gt;</span>
          <a href="#">{category}</a>
          <span>&gt;</span>
          <a href="#">{productPage}</a>
        </div>

        <div className="product__content-container">
          <div className="product__images">
            <img src="https://picsum.photos/500" alt="" />
            <div className="product__thumbnail-container">
              <img src="https://picsum.photos/150/110" alt="" />
              <img src="https://picsum.photos/150/110" alt="" />
              <img src="https://picsum.photos/150/110" alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Product name</h1>
            <div className="product__reviews">
              {/* Change to numbers at top, to iterate over them */}
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={emptyStar} alt="" />
              <a href="#">Read reviews</a>
            </div>
            <div className="product__price">
              <span className="product__old-price">$259</span>
              <span>|</span>
              <span className="percentage-off">40% off</span>
              <h2>$155.40</h2>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              totam adipisci necessitatibus alias officia corrupti qui.
        
            </span>
            <div className="product__size-selector">
              <span>Choose size</span>
              <select class="custom-select">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>

              <div className="product__size-guide">
                <img src={measure} alt="" />
                <a href="#">
                  <span>Size guide</span>
                </a>
              </div>
            </div>

            <div className="product__choose-color">
              <span>Choose Color</span>
              <div className="product__color-options">
                <div className="circle color-1"></div>
                <div className="circle color-2"></div>
                <div className="circle color-3"></div>
                <div className="circle color-4"></div>
              </div>
            </div>
            <span className="product__to-cart">Add to cart</span>
            <div className="product__checkout">
              <span>Checkout safety</span>
              <div className="line"></div>
              <div className="product__payment-methods">
                <img src={paypal} alt="" />
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={amex} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

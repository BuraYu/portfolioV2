import "./product.css";
import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              facere quisquam illo, quos placeat vel totam saepe inventore
              cupiditate quaerat?
            </span>
            <div className="product__size-selector">
              <span>Choose size</span>
              <select class="custom-select">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>

              <div className="product__size-guide">
                <span>icon</span>
                <span>Size guide</span>
              </div>
            </div>

            <div className="product__chose-color">
              <span>Choose Color</span>
              <div className="product__color-options">
                <div className="color-1"></div>
                <div className="color-2"></div>
                <div className="color-3"></div>
                <div className="color-4"></div>
              </div>
            </div>
            <span>Add to cart</span>
            <div className="product__checkout">
              <span>Checkout safety</span>
              <div className="vertical-line"></div>
              <div className="product__payment-methods">
                <span>icon 1</span>
                <span>icon 2</span>
                <span>icon 3</span>
                <span>icon 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import { useState } from "react";
import "./productInfo.css";

const ProductInfo = () => {
  const [isActive, setIsActive] = useState(1);

  const handleChange = (nr) => {
    setIsActive(nr);
  };

  const tabs = [
    { id: 1, label: "Description" },
    { id: 2, label: "Compositon & Care" },
    { id: 3, label: "Shipping & Returns" },
    { id: 4, label: "Free Samples" },
  ];
  return (
    <>
      <div className="product-info__wrapper">
        <div className="product-info__links">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a
                  className={`${isActive === tab.id ? "active" : ""}`}
                  onClick={() => handleChange(tab.id)}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-info__content">
          {isActive === 1 && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              rerum blanditiis est excepturi impedit aliquid cumque id quia
              dolorem ullam repudiandae inventore assumenda repellendus,
              voluptatibus optio? Animi tempore obcaecati possimus. Quae maiores
              adipisci, modi sit voluptates necessitatibus nulla tempore, saepe
              alias mollitia doloribus dolorum ipsum cum voluptas quo eligendi
              dolor.
            </p>
          )}
          {isActive === 2 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              libero obcaecati modi distinctio natus fuga porro ipsa? Soluta
              odit voluptatibus architecto quis illum unde ipsa deleniti nulla
              similique, temporibus, labore tempore qui quibusdam eius
              necessitatibus? Voluptates maxime veniam quaerat optio hic facere
              dolor mollitia at sed, explicabo cum nulla.
            </p>
          )}
          {isActive === 3 && (
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              aliquam tempore aut tempora delectus saepe nulla aspernatur rerum
              natus aperiam explicabo neque ipsum deserunt, consequuntur enim id
              exercitationem possimus distinctio vel officia. Labore commodi
              ullam deserunt earum nemo molestias ipsa! Voluptas ipsa iusto
              quidem. Necessitatibus obcaecati quisquam magni incidunt tempore!
            </p>
          )}
          {isActive === 4 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio in mollitia ducimus sunt natus rem dolor, quod
              aspernatur non eaque repellat, incidunt ipsam maiores qui quae
              dolores aut doloremque beatae eveniet harum id ex! Dolor unde,
              doloremque error harum dignissimos nam vitae architecto, nostrum
              reprehenderit officia culpa fuga animi voluptatibus!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

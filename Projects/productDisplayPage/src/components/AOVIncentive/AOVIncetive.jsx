import "./aovIncetive.css";

const AOVIncetive = () => {
  let freeShipping = 200;
  let freeShippingTarget = 200;
  let missingAmount = freeShippingTarget - freeShipping;
  let stylePercentage = (freeShipping / freeShippingTarget) * 100 > 20;
  let minimumAmountReached = missingAmount <= 0;
  let firstContainerWidth = (freeShipping / freeShippingTarget) * 100;
  let secondContainerWidth = (missingAmount / freeShippingTarget) * 100;

  return (
    <div className="aov-container">
      <div
        className="incentive-container"
        style={{ width: firstContainerWidth + "%" }}
      >
        {stylePercentage ? (
          minimumAmountReached ? (
            <span>Free shipping costs</span>
          ) : (
            <span>Only {missingAmount}$ away from free shipping</span>
          )
        ) : null}
      </div>
      {minimumAmountReached ? null : (
        <div
          className="incentive-missing"
          style={{ width: secondContainerWidth + "%" }}
        >
          {stylePercentage ? null : (
            <span>Only {missingAmount}$ away from free shipping</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AOVIncetive;

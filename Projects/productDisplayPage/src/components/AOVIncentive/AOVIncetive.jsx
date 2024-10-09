import "./aovIncetive.css";

const AOVIncetive = () => {
  let freeShipping = 60;
  let freeShippingTarget = 200;
  let missingAmount = freeShippingTarget - freeShipping;
  let percentageReached = (freeShipping / freeShippingTarget) * 100 > 20;
  let hasReachedFreeShipping = missingAmount <= 0;
  let firstContainerWidth = Math.max(freeShipping / freeShippingTarget) * 100;
  let secondContainerWidth = Math.max(missingAmount / freeShippingTarget) * 100;

  const renderMessage = () => {
    if (hasReachedFreeShipping) {
      return <span>Free shipping costs</span>;
    }

    return <span>Only {missingAmount}$ away from free shipping</span>;
  };
  return (
    <div className="aov-container">
      <div
        className="incentive-container"
        style={{ width: `${firstContainerWidth}%` }}
      >
        {percentageReached && renderMessage()}
      </div>

      {!hasReachedFreeShipping && (
        <div
          className="incentive-missing"
          style={{ width: `${secondContainerWidth}%` }}
        >
          {!percentageReached && renderMessage()}
        </div>
      )}
    </div>
  );
};

export default AOVIncetive;

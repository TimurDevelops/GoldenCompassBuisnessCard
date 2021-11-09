import './PriceCard.css';

const PriceCard = ({children}) => {
  return (
    <div className="price-card-wrapper">
      {children}
    </div>
  );
}

export default PriceCard;

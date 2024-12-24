import PropTypes from 'prop-types';

// Category Object Shape
export const Category = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Restaurant Object Shape
export const Restaurant = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  offer: PropTypes.string,
  priceForTwo: PropTypes.string.isRequired,
  promoted: PropTypes.bool,
  veg: PropTypes.bool,
};

// CartItem Object Shape
export const CartItem = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  restaurant: PropTypes.string.isRequired,
};

// Usage in React components:

// Category Component Example
const CategoryComponent = ({ category }) => (
  <div>
    <h2>{category.title}</h2>
    <img src={category.image} alt={category.title} />
  </div>
);

CategoryComponent.propTypes = {
  category: PropTypes.shape(Category).isRequired,
};

// Restaurant Component Example
const RestaurantComponent = ({ restaurant }) => (
  <div>
    <h2>{restaurant.name}</h2>
    <p>{restaurant.cuisine.join(', ')}</p>
    <p>{restaurant.rating} stars</p>
  </div>
);

RestaurantComponent.propTypes = {
  restaurant: PropTypes.shape(Restaurant).isRequired,
};

// CartItem Component Example
const CartItemComponent = ({ item }) => (
  <div>
    <h3>{item.name}</h3>
    <p>{item.quantity} x ₹{item.price}</p>
  </div>
);

CartItemComponent.propTypes = {
  item: PropTypes.shape(CartItem).isRequired,
};


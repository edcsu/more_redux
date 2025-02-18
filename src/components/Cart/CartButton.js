import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const toggleHandler = () => {
    dispatch(uiSliceActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

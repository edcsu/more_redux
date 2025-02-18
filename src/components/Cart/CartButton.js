import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(uiSliceActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

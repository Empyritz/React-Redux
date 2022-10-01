import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Features/cart/cartSlice';

const CartItem = ({ id, img, price, amount, title }) => {
    const dispatch = useDispatch()
    const handlerRemove = () => {
        dispatch(cartActions.removeItem(id))
    }
    const handlerIncrease = () => {
        dispatch(cartActions.increase({id}))
    }
    const handlerDecrease = () => {
        if(amount === 1) {
            dispatch(cartActions.removeItem(id))
            return
        }
        dispatch(cartActions.decrease({id}))
    }

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button className='remove-btn' onClick={handlerRemove}>remove</button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn' onClick={handlerIncrease}>
                    <ChevronUp />
                </button>
                {/* amount */}
                <p className='amount'>{amount}</p>
                {/* decrease amount */}
                <button className='amount-btn' onClick={handlerDecrease}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem
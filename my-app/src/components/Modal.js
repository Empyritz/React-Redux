import { useDispatch } from "react-redux"
import { modalActions } from "../Features/modal/modalSlice"
import { cartActions } from "../Features/cart/cartSlice"

const Modal = () => {
    const dispatch = useDispatch()
    const handlerConfirm = () => {
        dispatch(cartActions.clearCart())
        dispatch(modalActions.closeModal())
    }
    const handlerCancel = () => {
        dispatch(modalActions.closeModal())
    }

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={handlerConfirm}>confirm</button>
                    <button type="button" className='btn clear-btn' onClick={handlerCancel}>cancel</button>
                </div>
            </div>
        </aside>
    )
}
export default Modal
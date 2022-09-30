import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { sendCartData, fetchData } from "./store/cart.actions"


let isFirstRender = true

function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart)
  
  React.useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]) 

  React.useEffect(() => {
    if(isFirstRender) {
      isFirstRender = false
      return
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
    
  }, [cart, dispatch])
  
  // FISRT RESOLUTION WITH THE MESSAGE ALERT
  // React.useEffect(() => {
  //   if(isFirstRender) {
  //     isFirstRender = false
  //   }
  //   // Send state as Sending request 
  //   dispatch(uiActions.showNotification({
  //     open: true,
  //     message: "Sending Request",
  //     type: "warning"
  //   }))
  //   const sendRequest = async () => {
  //     const res = await fetch("https://redux-http-799b3-default-rtdb.firebaseio.com/cartItems.json", {
  //       method: "PUT",
  //       body: JSON.stringify(cart)
  //     })
  //     const data = res.json()
  //     // Send state as Request is successful
  //     dispatch(uiActions.showNotification({
  //       open: true,
  //       message: "Sedn Rquest to database Successfully",
  //       type: "success"
  //     }))
  //   }
  //   sendRequest().catch(err => {
  //     dispatch(uiActions.showNotification({
  //       open: true,
  //       message: "Sending reuquest fail",
  //       type: "error"
  //     }))
  //   })
    
  // }, [cart])


  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
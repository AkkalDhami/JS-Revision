//! Callback hell / Pyramid of DOM
const cart = ["shirt", "shoes"];

api.createOrder(cart, () => {

    api.proceedToPayment(() => {
      
        api.showPayment(() => {
        
            api.completePayment(() => {
          
                api.notifyCustomer(() => {
            
         
                    console.log("Order completed!");
       
                });
      
            });
    
        });
 
    });
});


//! Inversion of control:
//* lose the control of the code while using callbacks. , blindly trust
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import MobileBottomNav from "../common/MobileBottomNav";
import OrderSuccess from "../common/OrderSuccess";


const CheckoutPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [processing, setProcessing] = useState(false);


  const {
    cartItems,
    cartTotal,
    clearCart
  } = useCart();


  const navigate = useNavigate();



  useEffect(() => {

    if(cartItems.length === 0){
      navigate("/bag", {replace:true});
    }

  }, []);



  const handlePlaceOrder = () => {

    try {

      setProcessing(true);


      const orderData = {

        amount: cartTotal,

        items: cartItems,

        date: new Date().toLocaleString(),

      };



      localStorage.setItem(
        "order",
        JSON.stringify(orderData)
      );



      clearCart();



      // Same page par modal open
      setShowSuccessModal(true);



    } catch(error){

      console.log(error);

    } finally {

      setProcessing(false);

    }

  };




return (

<>


<Announcement />


<Navbar 
openMenu={()=>setIsOpen(true)}
/>


<MobileSidebar
isOpen={isOpen}
closeMenu={()=>setIsOpen(false)}
/>



<section className="
max-w-5xl 
mx-auto 
px-5 
py-10 
mt-8 
lg:mt-28
">


<aside className="
rounded-3xl
border
bg-white
p-6
shadow-sm
">


<div>

<h2 className="
text-xl 
font-semibold 
text-[#3c2a21]
">
Order Total
</h2>


<p className="text-sm text-gray-500">
Confirm your total before placing the order.
</p>


</div>





<div className="mt-6 divide-y">


<div className="space-y-4 pb-4">


{
cartItems.map((item)=>(


<div
key={`${item.id}-${item.name}`}
className="
flex 
justify-between
text-sm
"
>


<div>

<p className="font-medium">
{item.name}
</p>


<p className="text-gray-500">

{item.color}

Qty {item.quantity}

</p>


</div>


<span>
₹{item.price * item.quantity}
</span>


</div>


))
}


</div>





<div className="pt-4 space-y-4">


<div className="flex justify-between">

<span>
Subtotal
</span>


<span>
₹{cartTotal}
</span>

</div>





<div className="
border-t 
pt-4 
flex 
justify-between 
font-semibold
">

<span>
Total
</span>


<span>
₹{cartTotal}
</span>


</div>






<button

onClick={handlePlaceOrder}

disabled={processing}

className={`
mt-3
w-full
rounded-full
bg-[#7B1D2A]
py-3
text-white
font-semibold

${processing 
? "opacity-70 cursor-not-allowed"
:"hover:bg-[#5b151f]"
}

`}

>


{
processing
?
"Processing..."
:
"Place Order"
}


</button>





<Link

to="/bag"

className="
block
text-center
mt-3
text-[#7B1D2A]
"

>

Back to Bag

</Link>



</div>


</div>


</aside>


</section>





{
showSuccessModal && (

<div
className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
backdrop-blur-sm
px-4
"
>


<OrderSuccess

onClose={()=>setShowSuccessModal(false)}

/>


</div>

)

}





<MobileBottomNav />


</>

)

}


export default CheckoutPage;
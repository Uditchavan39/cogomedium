import GetStripe from "./GetStripe";
import styles from '../../styles/subscription.module.css'
import Header from "../Header";
const SubscriptionPayment=()=>{
   const apisecret='sk_test_51NeI1NSFZpFU8O6ejTwr24qKzhbIcQJh6tt6PewgDXAmEQGhVKOD1z1MMAFjb0cGn0c4wjtHaICKYXTbyQ1L5n4O002bw6YoUe' 
  async function handlecheckout3(){
   const stripe=await GetStripe();
   const {error}=await stripe.redirectToCheckout({
    lineItems:[
        {
            price:'price_1NeI7aSFZpFU8O6ezp9hoMFs',
            quantity:1,
        },
    ],
    mode:'subscription',
    successUrl:'http://localhost:3001/success?currentplan=3',
    
});
   console.log('no error: '+error.message);
}
async function handlecheckout5(){
    const stripe=await GetStripe();
    const {error}=await stripe.redirectToCheckout({
     lineItems:[
         {
             price:'price_1NeI9cSFZpFU8O6ent2ILF6d',
             quantity:1,
         },
     ],
     mode:'subscription',
     successUrl:'http://localhost:3001/success?currentplan=5',
     
 });
    console.log('no error: '+error.message);
 }
 async function handlecheckout10(){
    const stripe=await GetStripe();
    const {error}=await stripe.redirectToCheckout({
     lineItems:[
         {
             price:'price_1NeIABSFZpFU8O6e7NiBkJQ0',
             quantity:1,
         },
     ],
     mode:'subscription',
     successUrl:'http://localhost:3001/success?currentplan=10',
     
 });
    console.log('no error: '+error.message);
 }
   return(
        <>
        <div className={styles.submain}>
        <Header  heading={'Choose A Plan !!!'}/>
       <button onClick={handlecheckout3} className={styles.subtn}>3 post per day plan</button>
       <button onClick={handlecheckout5} className={styles.subtn}>5 post per day plan</button>
       <button onClick={handlecheckout10} className={styles.subtn}>10 post per day plan</button>
       </div>
        </>
    );
}
export default SubscriptionPayment;
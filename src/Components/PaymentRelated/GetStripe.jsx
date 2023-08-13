import { loadStripe } from '@stripe/stripe-js';

const GetStripe=()=>{
    const apikey='pk_test_51NeI1NSFZpFU8O6e3eYRvdfpeUVguH2rqVEnAv9uFIPGkJH9BJIBjrZZmcLQaYs3BYEStwvOvyMT0R1qzELm49Kg00cvMy00o2'
  
    let stripePromise;
      if (!stripePromise) {
        stripePromise = loadStripe(apikey);
      }
      return stripePromise; 
};
export default GetStripe;
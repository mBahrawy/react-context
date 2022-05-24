import { createContext } from "react";

export const AppContext = createContext({
    products:[],
    cartItems:[],
    totalPrice:0,
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    updateInCart:()=>{}
});

// export let ctx = createContext(0);

// export default function ctxProvider(props) {

//     let initValue = {
//         cartItems:[],
//         totalprice:0
//     }

//     const [count, setcount] = useState(initValue);


//     const increase = () => {
//         setcount(count + 1)
//     };
//     const decrease = () => {
//         setcount(count - 1)
//     };

//     return <ctx.Provider value={count}>
//         {props.children}
//     </ctx.Provider>
// }

// import { Balancereducer,} from "./CountReducer";
import { productapidata,addtocartdata, addtoWhishlist,} from "./productreducer";
import { combineReducers } from "redux";
// import { incrementcount,decmenetcount } from "../Action/CountAction";

export const RootReducer =combineReducers({
    // count:Balancereducer,
    prod:productapidata,
    tocart:addtocartdata,
    towishlist:addtoWhishlist,

})
 
import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        saveAllBlogs: (state,action)=>{
          //  console.log(action.payload.data)
            return action.payload.data.products
           
        },
        removeitem:(state,action)=>{
            let index
            
             for(let i=0;i<state.length;i++)
            {     
                if(state[i].id===action.payload.id)
                {  
                     index=i;
                    break;
                 }
            }
            console.log("Delete :" +index)
              state.splice(index,1)
              return state


        },
        qtychange:(state,action)=>{
            

                console.log(action.payload.id,action.payload.qty,action.payload.stocks)
           
             let qty=action.payload.qty
             let id=action.payload.id
             let stocks=action.payload.stocks

            if(qty==""||qty==0 ){
                qty=1
               }
               else if (Number(qty)>=stocks){
                qty=stocks
               }

               let index
               for(let i=0;i<state.length;i++)
               {
                   if(state[i].id===action.payload.id)
                   {
                       index=i;
                       break;
                   }
               }
               
               state[index].orderqty=Math.round(qty)

               return state

        }
    }
})

export const {saveAllBlogs,removeitem,qtychange} = cartSlice.actions
export default cartSlice.reducer
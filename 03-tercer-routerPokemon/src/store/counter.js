import {defineStore} from 'pinia'
import { computed,ref } from 'vue'

export const useCounterStore=defineStore('counter',()=>{
    const count= ref(0)
    const increment=()=>count.value++
   
    const double=computed(()=>count.value*2);
    const triple=computed(()=>count.value*3);
    return{
        count,
        increment,
        double,
        triple
    }
        
})

// export const useCounterStore=defineStore('counter',{
//     state:()=>({
//         count:0,
//     }),
//     actions:{
//         increment(){
//             this.count++;
//         }
//     },
//     getters:{
//         double:(state)=>state.count*2,
//         triple:(state)=>state.count*3,
//     }
// })
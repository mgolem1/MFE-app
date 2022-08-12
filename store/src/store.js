import React from "react";
import { configureStore, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";



const initialState=[{
    id:1,
    brRacuna:'2',
    RBR:12,
    smjer:'ulazni',
    datumRacuna:new Date(),
    rokPlacanja:new Date(),
    nazivPartner:'Niko',
    adresaPartnera:'Šibenska 37',
    OIBPartnera:'321543654',
    iznosPrije:100,
    porez:25,
    iznosPoreza:25,
    saPorezon:125
},
{
    id:2,
    brRacuna:'3',
    RBR:13,
    smjer:'ulazni',
    datumRacuna:new Date("2020-01-16"),
    rokPlacanja:new Date("2020-02-16"),
    nazivPartner:'Ana',
    adresaPartnera:'Splitksa 37',
    OIBPartnera:'842374234',
    iznosPrije:100,
    porez:25,
    iznosPoreza:25,
    saPorezon:125
},
{
    id:3,
    brRacuna:'43dasd',
    RBR:20,
    smjer:'izlazni',
    datumRacuna:new Date("2021-01-16"),
    rokPlacanja:new Date("2021-02-16"),
    nazivPartner:'Judita',
    adresaPartnera:'Miljenka Buljana 30',
    OIBPartnera:'',
    iznosPrije:1000,
    porez:25,
    iznosPoreza:250,
    saPorezon:1250
},
{
    id:4,
    brRacuna:'798fsd',
    RBR:213,
    smjer:'ulazni',
    datumRacuna:new Date("2022-07-16"),
    rokPlacanja:new Date("2022-09-16"),
    nazivPartner:'Josipa',
    adresaPartnera:'Put Kuka 27',
    OIBPartnera:'983216312',
    iznosPrije:750,
    porez:20,
    iznosPoreza:150,
    saPorezon:900
},
{
    id:5,
    brRacuna:'687h2',
    RBR:100,
    smjer:'izlazni',
    datumRacuna:new Date("2022-02-18"),
    rokPlacanja:new Date("2022-03-18"),
    nazivPartner:'Luka',
    adresaPartnera:'Put Ferate 2',
    OIBPartnera:'',
    iznosPrije:900,
    porez:20,
    iznosPoreza:180,
    saPorezon:1080
}
]

export const racunSlice=createSlice({
    name:'racun',
    initialState,
    reducers:{
        addRacun:(state,action)=>{
            const existingID=state.find((item)=>item.id===action.payload.id);
            const existingBrRac=state.find((item)=>item.brRacuna===action.payload.brRacuna)
            if(existingID || existingBrRac){
                console.log('error')
                
            }
            else{
                return [action.payload,...state]
            };
            
        },
        deleteRacun:(state,action)=>{
            return state= state.filter(racun=>racun.id!==action.payload);
        }

    }
})


const {addRacun,deleteRacun}=racunSlice.actions;



const store = configureStore({
    reducer: {
      racun: racunSlice.reducer,
    },
  });

 function useStore() {
    const racun = useSelector((state) => state.racun);
    const dispatch = useDispatch();
    return {
      racun
      
    };
  }
  
 function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  export {useStore,StoreProvider}

import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
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

export function racunReducer(state=initialState,action){
    switch(action.type){
        case "DELETE_BILL":
            return state= state.filter(racun=>racun.id!==action.payload)
        case "ADD_BILL":
            return [action.payload,...state]
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {
      racun: racunReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  });

function useStore(){
    const racun=useSelector((state)=>state.racun);
    return{
        racun,
        addBill:(action)=>store.dispatch({
            type:"ADD_BILL",
            payload:action
        }),
        deleteBill:(id)=>store.dispatch({
            type:"DELETE_BILL",
            payload:id
        })
    }
  }

 function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  export {useStore,StoreProvider}

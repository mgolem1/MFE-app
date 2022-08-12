/*import React, { createContext, useContext, useState } from "react";

const BillContext = createContext([{
    id:0,
    brRacuna:'',
    RBR:0,
    smjer:'izlazni',
    datumRacuna:new Date(),
    rokPlacanja:new Date(),
    nazivPartner:'',
    adresaPartnera:'',
    OIBPartnera:'',
    iznosPrije:0,
    porez:0,
    iznosPoreza:0,
    saPorezon:0

}, () => {}]);

export function CountProvider({ children }) {
  return (
    <BillContext.Provider value={useState({
        id:0,
    brRacuna:'',
    RBR:0,
    smjer:'izlazni',
    datumRacuna:new Date(),
    rokPlacanja:new Date(),
    nazivPartner:'',
    adresaPartnera:'',
    OIBPartnera:'',
    iznosPrije:0,
    porez:0,
    iznosPoreza:0,
    saPorezon:0
    })}>
      {children}
    </BillContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}*/


import {useStore,StoreProvider} from "store/storeApp"

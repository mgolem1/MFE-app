import React,{useState} from "react";
//import { useSelector } from "react-redux";
//import { deleteRacun, getRacunSelector,sortSilazno,sortUzlazno } from "./RacunSlice";
//import { useAppDispatch } from "../store/store";
import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow,Paper } from "@material-ui/core";

import {useStore,StoreProvider} from "store/storeApp"

const BillList=()=>{
    //const dispatch=useAppDispatch();
    //const racun=useSelector(getRacunSelector);
    const { racun } = useStore();
    console.log(racun)
    /*const [racun,setRacun]=useState([{
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
    }])*/

    /*const removeFromListHandler=(id:number)=>{
        dispatch(deleteRacun(id));
    }
    let total=0;
    racun.forEach(el=>{
        total+=+el.saPorezon;
    })

    const sortSilazni=(n:string)=>{
        dispatch(sortSilazno(n));
    }
    const sortUzlazn=(n:string)=>{
        dispatch(sortUzlazno(n));
    }*/
    return (
        <>
            <TableContainer component={Paper} >
                <Table stickyHeader={false} style={{ tableLayout: "auto" }}  >
                    <TableHead>
                        <TableRow>
                            <TableCell scope="header" align="left" >
                                <label>ID:</label><br></br>
                                {/*<Button onClick={()=>sortUzlazn('id')}>▲</Button><br></br>
                                <Button onClick={()=>sortSilazni('id')}>▼</Button>*/}
                                
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>Broj računa: </label><br />
                                {/*<Button onClick={()=>sortUzlazn('brRacun')}>▲</Button><br></br>*/}
                                {/*<Button onClick={()=>sortSilazni('brRacun')}>▼</Button>*/}
                                
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>RBR:</label><br />
                                {/*<Button onClick={()=>sortUzlazn('RBR')}>▲</Button><br></br>
                                <Button onClick={()=>sortSilazni('RBR')}>▼</Button>*/}
                                
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>Smjer: </label><br />
                                {/*<Button onClick={()=>sortUzlazn('smjer')}>▲</Button><br></br>
                                <Button onClick={()=>sortSilazni('smjer')}>▼</Button>*/}
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>Datum računa: </label><br />
                                {/*<Button onClick={()=>sortUzlazn('datumRacuna')}>▲</Button><br></br>
                                <Button onClick={()=>sortSilazni('datumRacuna')}>▼</Button>*/}
                                
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>Naziv partnera:</label><br />
                                {/*<Button onClick={()=>sortUzlazn('nazivPartnera')}>▲</Button><br></br>
                                <Button onClick={()=>sortSilazni('nazivPartnera')}>▼</Button>*/}
                                 
                            </TableCell>
                            <TableCell scope="header" align="center">
                                <label>Cijena sa porezom: </label><br/>
                                {/*<Button onClick={()=>sortUzlazn('saPorezom')}>▲</Button><br />
                            <Button onClick={()=>sortSilazni('saPorezom')}>▼</Button>*/}
                                
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {racun.map((racun)=>(
                        <TableRow key={racun.id}>
                            <TableCell scope="row" align="center" onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.id}
                            </TableCell>
                            <TableCell scope="row" align="center" onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.brRacuna}
                            </TableCell>
                            <TableCell scope="row" align="center" onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.RBR}
                            </TableCell>
                            <TableCell scope="row" align="center" onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.smjer} račun
                            </TableCell>
                            <TableCell scope="row"  align="center"onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.datumRacuna.toDateString()}
                            </TableCell>
                            <TableCell scope="row"  align="center"onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.nazivPartner}
                            </TableCell>
                            <TableCell scope="row"  align="center"onClick={()=>redirectDetails(racun.id.toString())}>
                                {racun.saPorezon} 
                            </TableCell>
                            <TableCell scope="row">
                                {/*<Button onClick={()=>removeFromListHandler(racun.id)}>Obriši</Button>*/}
                            </TableCell>
                            <TableCell scope="row" >
                                <Button onClick={()=>redirectUpdate(racun.id.toString())}>Uredi</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Ukupan iznos: </TableCell>
                        {/*<TableCell>{total}</TableCell>*/}
                    </TableRow>
                </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default BillList;
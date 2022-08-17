import React,{useState,useEffect} from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow,Paper } from "@material-ui/core";
import { Switch, Route, Routes,Link } from "react-router-dom";
import {useStore} from "store/storeApp"
import BillApp from "./BillApp";

const BillList=()=>{
    //const dispatch=useAppDispatch();
    //const racun=useSelector(getRacunSelector);
    const { racun, deleteBill } = useStore();
    console.log(racun)

    const removeFromListHandler=(id)=>{
        deleteBill(id);
    }
    
    let total=0;
    racun.forEach(el=>{
        total+=+el.saPorezon;
    })

    return (
        <>
            <Link to="/addRacun"><Button>NOVI RAČUN</Button></Link>
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
                            <TableCell scope="row" align="center">
                                {racun.id}
                            </TableCell>
                            <TableCell scope="row" align="center">
                                {racun.brRacuna}
                            </TableCell>
                            <TableCell scope="row" align="center">
                                {racun.RBR}
                            </TableCell>
                            <TableCell scope="row" align="center">
                                {racun.smjer} račun
                            </TableCell>
                            <TableCell scope="row"  align="center">
                                {racun.datumRacuna.toDateString()}
                            </TableCell>
                            <TableCell scope="row"  align="center">
                                {racun.nazivPartner}
                            </TableCell>
                            <TableCell scope="row"  align="center">
                                {racun.saPorezon} 
                            </TableCell>
                            <TableCell scope="row">
                                <Button onClick={()=>removeFromListHandler(racun.id)}>Obriši</Button>
                            </TableCell>
                            <TableCell scope="row" >
                                <Button>Uredi</Button>
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
                        <TableCell>{total}</TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default BillList;
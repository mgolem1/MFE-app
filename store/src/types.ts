import { Action } from "redux";
import { Racun } from "./store";

export interface AddBill extends Action {
    type: 'ADD_BILL';
    payload:Racun;
  }
  
  export interface DeleteBill extends Action {
    type: 'DELETE_BILL';
    payload:number;
  }

export type AppAction=AddBill | DeleteBill;
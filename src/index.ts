//npm install azle

import { $query, $update, Record, StableBTreeMap, Vec, match, Result, nat64, ic, Opt, float32 } from 'azle';
import { v4 as uuidv4 } from 'uuid';

type Turno = Record<{
    id: nat64;
    date: nat64; //Timestamp
    causa: String;
}>

type Evento = Record<{
    date: nat64; //Timestamp
    sintomas: String[];
    diagnostico: String;
    observaciones: String;
    tratamiento: String;
    nuevaVisita: Turno;
}>

 


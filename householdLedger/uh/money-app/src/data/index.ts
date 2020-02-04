import { MaterData } from './master';

let instance;

if (instance === undefined || instance === null){
    instance = new MaterData()
}

export let masterData = instance;
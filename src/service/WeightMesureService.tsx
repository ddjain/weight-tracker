import Weight from '../model/Weight.interface.'
import {storageService} from '../service/storageService';
export const WeightMesureService = {
    addWeight,
    getWeightAll,
    getWeightById,
    updateWeightById,
    deleteById
};

function addWeight(weight:Weight){
    let weights:Weight[];
    weights=storageService.getItemAsJson("weights");
    if(weights === null){
        weights=[weight];
    } else{
        weights.push(weight);
    }
    storageService.setItemAsJSON("weights",weights);
}

function getWeightAll():Weight[]{
    let weights:Weight[];
    weights=storageService.getItemAsJson("weights");
    if(weights){
        return weights;
    } else{
        return []
    }
}

function getWeightById(id:any) {
    let weights:Weight[] = getWeightAll()
    for(let i=0;i<weights.length;i++){
        if(weights[i].id===id){
            return weights[i];
        }
    }
    return null;
}

function updateWeightById(id:any,weight:Weight) {
    let weights:Weight[] = getWeightAll()
    for(let i=0;i<weights.length;i++){
        if(weights[i].id===id){
            weights[i]=weight;
            storageService.setItemAsJSON("weights",weights);
            break;
        }
    }
}

function deleteById(id:any) {
    let weights:Weight[] = getWeightAll()
    for(let i=0;i<weights.length;i++){
        if(weights[i].id===id){
            weights.splice(i,1);
            storageService.setItemAsJSON("weights",weights);
            break;
        }
    }
}
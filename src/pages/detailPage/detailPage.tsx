import { Component } from "react";

import React from 'react';
import { WeightMesureService } from "../../service/WeightMesureService";
import Weight from "../../model/Weight.interface.";

interface detailPageStats{
    weights:Weight[];
    currentWeight?:Weight;
}
export default class DetailPage extends Component<Weight,detailPageStats>{
    
    constructor(props:Weight){
        super(props)
         this.state={
             weights:WeightMesureService.getWeightAll()
         }
    }

    editWeight = (weight:Weight) => {
         this.setState({currentWeight:weight});
    }

    deleteWeight=(weight:Weight)=>{
        WeightMesureService.deleteById(weight.id);
        this.setState({weights:WeightMesureService.getWeightAll()})
    }

render(){
     const weights:Weight[]= this.state.weights;
     const weightList=weights.map(weight=> <tr key={weight.id}><td>{weight.date}</td><td>{weight.weight}</td><td>{weight.note}</td><td><span  onClick={() => this.editWeight(weight)}>Edit</span>|<span onClick={() => this.deleteWeight(weight)}>Delete</span></td></tr>)
     return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Note</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {weightList}  
                </tbody>
            </table>
        </div>
    )
}
}

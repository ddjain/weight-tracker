import { Component } from "react";
import React from 'react';
import Weight from '../../model/Weight.interface.';
import { WeightMesureService } from "../../service/WeightMesureService";
const uuidv1 = require('uuid/v1');

export default class WeightComponent extends Component<Weight,Weight>{
   constructor(props:Weight){
      super(props)
       this.state={
                  id : this.props.id,
                  date : this.props.date,
                  note: this.props.note,
                  weight: this.props.weight
               }
   }
    
   addWeight = () =>{
      const wt:Weight=this.state;
      if(wt.id ==="-1"){
         wt.id=uuidv1();
         WeightMesureService.addWeight(wt);
         this.setState({ weight: 0,date:"",note:"",id:"-1" });
      }
   }

   handleWeightChange = (event:any) => {
       
      this.setState({ weight: parseInt(event.target.value) });
   }

   handleDateChange = (event:any) => {
      this.setState({ date: event.target.value });

   }

   handleNoteChange = (event:any) => {
      this.setState({ note: event.target.value });

   }

render(){
   
    return(
        <div>
             <div className="form-group">
              <label>Weight:</label>
              <input type="number" className="form-control" placeholder="Weight" onChange={ this.handleWeightChange } value={this.state.weight}/>
             </div>

             <div className="form-group">
              <label>Date: </label>
              <input type="date" className="form-control" value={this.state.date} onChange={ this.handleDateChange } placeholder="Date"/>
             </div>

             <div className="form-group">
              <label>Note: </label>
              <input type="text" className="form-control"  placeholder="Note" onChange={ this.handleNoteChange } value={this.state.note}/>
             </div>
             
             <div className="form-group">
                <button type="button" className="btn btn-primary float-right" onClick={() => this.addWeight()}>
                     {this.props.id === "-1"? <React.Fragment>Add</React.Fragment>: <React.Fragment>Edit</React.Fragment> }
                 </button>
             </div>

        </div>
     )
}
}
 
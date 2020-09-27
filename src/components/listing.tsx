import axios from 'axios';
import React from 'react';
import * as _ from 'lodash';

type ResultState = {
    result: any
  }

class ListingComponent extends React.Component<{},ResultState> {
    constructor(props:any) {
        super(props);
        this.state = {
            result: []
        };
    }
    componentDidMount() {
        axios.get("https://api.spacexdata.com/v3/launches?limit=100")
            .then(response => {
                this.setState({ result: response.data });
            })
            .catch(err => {
                console.log("oppps", err);
            });
    }
    renderContent = () => {
        const ResultData = this.state.result;
        return _.forEach(ResultData,function(data){
            return(
            <div className="mission_name col-md-3">{data.mission_name}</div>
            )
        })
    }
    render() {
        return (
		<div className="demo">
            <h2>Spacex Launch Programs</h2>
	        <div className='view-container'>
                <div className='container'>
                    <div className='col-md-9'>
                        {this.renderContent()}
                    </div>
                    <div className='col-md-3'>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
		</div>
        )
    }
}
export default ListingComponent;
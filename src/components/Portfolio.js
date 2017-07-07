import React, {Component} from 'react';


export default class Portfolio extends Component{
    
    render(){
        return(

            <div className="portfolio">
                <h2>This is the Portfolio Component</h2>
                <div className="project">
                    <img src="https://s17.postimg.org/xixeyesbz/image_grid.png" alt="#" />
                </div>

                <div className="info">
                    <h3>Project Name</h3>
                    <p>Something Describing This Project</p>
                </div>
            </div>
            )
    }
    
    
    
}
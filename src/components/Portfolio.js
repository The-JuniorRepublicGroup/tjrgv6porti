import React, {Component} from 'react';
import '../stylesheets/portfolio.css';

export default class Portfolio extends Component{
    
    render(){
        return(

            <div className="portfolio-page">

                <h2>My Projects</h2>

                    <div className="polaroid">
                        
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/SOME_LIKE_IT_HOT_TITLE.jpg" alt="Norway" className="card-img" />
                            <div className="container">
                                <p>Gidii Tv</p>
                                {/* <p>Web Application like Netflix, created this app to be able to stream video content.</p> */}
                            </div>
                        
                    </div>

                    <div className="polaroid">

                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/SOME_LIKE_IT_HOT_TITLE.jpg" alt="Norway" className="card-img" />
                            <div className="container">
                                <p>Northern Lights in Norway</p>
                            </div>
                        
                    </div>

                    <div className="polaroid">

                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/SOME_LIKE_IT_HOT_TITLE.jpg" alt="Norway" className="card-img" />
                            <div className="container">
                                <p>Northern Lights in Norway</p>
                            </div>
                        
                    </div>

            </div>
            
            )
    }
    
    
    
}
import React, { Component } from 'react';
import Header from './Header';
import Vegetables from './Vegetables';

class Home extends Component {
    
    render(){
        return(
            <div>
                <Header/>
                <Vegetables/>
            </div>
        )
    }
}
export default Home
import React, { Component } from 'react';

class Admin extends Component {

    constructor(){
        super();
        this.state = {
            name:'Sahil',
            city:'Pune'
        };
    }
    
    render() {
        return (
            <div>
                <p> {this.state.name}</p>
            </div>
        );
    }
}

export default Admin;
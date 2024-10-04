import React, { Component } from 'react';
class User extends Component {
    
    constructor(props) {
        super(props)
        console.log('Hi From Consttcutor');
        this.state = {
            message: 'Hello, React!',
            name: 'Aditya',
            cityList: ['Pune','Mumbai','Nagpur']
        };
    }

    componentDidMount = () => {
        console.log('componentDidMount') //=> On Page Load /on Component Load
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount') // on pgae redirect // on component destroy
    } 

    componentDidUpdate = () => {
        console.log('componentDidUpdate') // it execute on every state changes
    }

    chnageValue = () => {
        this.setState({
            name: 'Sachin'
          });
    }

    showAlert =() => {
        alert('Hii From Alert'+ this.state.message)
    }

    render() {
        return (
            <div>
                Hii From USer = {this.state.name}
                <ul>
                    {
                        this.state.cityList.map((item)=> {
                            return(<li>{item}</li>)
                        }) 
                    }
                </ul>
                <button onClick={this.showAlert}> Alert</button>
                <button onClick={this.chnageValue}> Change Name</button>
            </div>
        );
    }
}

export default User;

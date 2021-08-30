import React, { Component } from 'react'
import loading from '../loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div>
               <center><img className="my-3" src={loading} alt="loading" /></center> 
            </div>
        )
    }
}

export default Spinner

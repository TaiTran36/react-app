import React, { useState, Component } from 'react'
import SweetAlert from 'sweetalert-react';
export default class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            isShow : false,
            isDelete : false
        }
    }

    render(){
        let {item,index} = this.props;
        return (
            <>
                <tr>
                    <td className="text-center">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td className="text-center">
                        <img src={item.avatar}></img>
                    </td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm" onClick={() => {this.setState({isShow:true})}}>Edit</button>
                        <SweetAlert
                            show={this.state.isShow}
                            title="Demo"
                            text="SweetAlert in React"
                            onConfirm={()=>this.setState({ isShow: false })}
                        />
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => {this.setState({isDelete:true})}}>Delete</button>
                        <SweetAlert
                            show={this.state.isDelete}
                            title="Delete Account"
                            text="SweetAlert in React"
                            onConfirm={()=>this.setState({ isDelete: false })}
                        />
                    </td>
                </tr>
            </>
        )
    }
 
}


import React, { Component } from 'react';
import Title from './Components/Title';
import Search from './Components/Search';
import Sort from './Components/Sort';
import AddItems from './Components/AddItems';
import ListItems from './Components/ListItems';
import './../node_modules/sweetalert/dist/sweetalert.css';
class App extends Component {
    render() {
        return (
            <div className="container">
              <Title></Title>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search></Search>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort></Sort>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                       <AddItems></AddItems>
                    </div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">List Item</div>
                    <ListItems></ListItems>
                </div>  
            </div>
        );
    }
}

export default App;
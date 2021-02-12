import './App.css';
import React from 'react';
import {deleteItem, fetchData} from "./store/actionCreators";
import { connect } from 'react-redux';
import store from "./store";
import Table from "./components/TableEdit";

class App extends React.Component {
    state = {
        hideTitles :["_id", "isEditing"],
    }

    componentDidMount() {
        store.dispatch(fetchData())
    }

    handleClick = (e) => {
        console.log(e)
        store.dispatch(deleteItem(e))
    }

    render() {
        if(!this.props.data.length) return 'loading'
        return (
            <div>
                <div className="App">
                    <Table data={this.props.data} hideTitles={this.state.hideTitles} canEdit={true} onClickEdit={this.handleClick}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { data: state.data }
}

export default connect(
    mapStateToProps
)(App)

import './App.css';
import React from 'react';
import {editItem, fetchData, updateItem} from "./store/actionCreators";
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

    onClickEdit = (e) => {
        e.isEditing = true
        store.dispatch(editItem(e))
    }

    onClickSave = (e) => {
        e.isEditing = false
        store.dispatch(updateItem(e))
    }
    render() {
        if(!this.props.data.length) return 'loading'
        return (
            <div>
                <div className="App">
                    <Table data={this.props.data} hideTitles={this.state.hideTitles} canEdit={true} onClickEdit={this.onClickEdit} onClickSave={this.onClickSave}/>
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

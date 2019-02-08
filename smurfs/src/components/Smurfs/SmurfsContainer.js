import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getSmurfs } from '../../actions';

import SmurfsForm from './SmurfsForm';
import Smurf from './Smurf';

class Smurfs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smurfs: []
        }
    }

    componentDidMount() {
        this.props.getSmurfs()
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                this.setState({
                    smurfs: res.data
                })
            })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <div className='smurfs'>
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <div>Welcome to your Redux version of Smurfs!</div>
                <div>Start inside of your `src/index.js` file!</div>
                <div>Have fun!</div>
                {this.state.smurfs.map((smurf, index) => {
                    return (
                        <Smurf key={index} id={index} smurf={smurf} />
                    )
                })}
                <SmurfsForm />
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        fetchingSmurfs: state.fetchingSmurfs,
        postingSmurfs: state.postingSmurfs,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
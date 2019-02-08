import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../../actions';

import SmurfsForm from './SmurfsForm';

class Smurfs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smurfs: []
        }
    }

    componentDidMount(smurfs) {
        this.props.getSmurfs()

    }

    render() {

        return (
            <div className='smurfs'>
                {this.state.smurfs.map((smurf, index) => {
                    return (
                        <div key={index}>
                            <div>{smurf.name}</div>
                            <div>{smurf.age}</div>
                            <div>{smurf.height}</div>
                        </div>
                    )
                })}
                <SmurfsForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        postingSmurfs: state.postingSmurfs,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
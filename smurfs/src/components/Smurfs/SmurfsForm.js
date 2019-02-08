import React from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../../actions'

class SmurfsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }

    postSmurf = e => {
        e.preventDefault();
        this.props.postSmurf(this.state.smurf)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postSmurf} >
                    <input placeholder='Name' type='text' name='name' value={this.state.smurf.name} onChange={this.handleChange} />
                    <input placeholder='Age' type='number' name='age' value={this.state.smurf.age} onChange={this.handleChange} />
                    <input placeholder='Height' type='text' name='height' value={this.state.smurf.height} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        postingSmurfs: state.postingSmurfs,
        postSmurf: state.postSmurf,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfsForm);
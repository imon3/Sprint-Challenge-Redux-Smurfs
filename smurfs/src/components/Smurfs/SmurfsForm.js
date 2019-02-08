import React from 'react';

class SmurfsForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input placeholder='Name' name='name' />
                    <input placeholder='Age' name='age' />
                    <input placeholder='Height' name='height' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default SmurfsForm;
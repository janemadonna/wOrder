import React from 'react'

class NewPoem extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
    }
    render() {
        return (
            <form className='new-poem'>
                <label>title</label>
                <input type='text' />
                <label>content</label>
                <textarea rows='10' cols='30'></textarea>
                <input className='new-poem-submit' type='submit' />
            </form>
        )
    }
}

export default NewPoem
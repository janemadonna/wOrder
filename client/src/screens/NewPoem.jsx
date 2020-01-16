import React from 'react'
import { newPoem } from '../services'

class NewPoem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async () => {
        const poem = {title: this.state.title, content: this.state.content}
        await newPoem(poem)
        .then(this.props.history.push('/anthology'))
    }

    render() {
        const { title, content } = this.state
        return (
            <form onSubmit={e => this.handleSubmit(e)} className='new-poem'>
                <label>title</label>
                <input name='title' value={title} onChange={e => this.handleChange(e)} type='text' />
                <label>content</label>
                <textarea name='content' value={content} onChange={e => this.handleChange(e)} rows='10' cols='30'></textarea>
                <input className='new-poem-submit' type='submit' />
            </form>
        )
    }
}

export default NewPoem
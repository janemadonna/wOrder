import React from 'react'
import { newWord, getDefs } from '../services'

class NewWord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            synonym: '',
            definitions: []
        }
    }

    fetchDefs = async () => {
        try {
            const definitions = await getDefs(this.state.synonym)
            this.setState({ definitions })   
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const word = {title: this.state.title, synonym: this.state.synonym}
        await this.fetchDefs()
        if (this.state.definitions.length > 0) {
            await newWord(word)
            .then(this.props.history.push('/fictionary'))
        } else {
            console.log('invalid word')
        }
    }

    render() {
        const { title, synonym } = this.state
        return (
            <form onSubmit={e => this.handleSubmit(e)} >
                <label>word</label>
                <input name='title' value={title} onChange={e => this.handleChange(e)} type='text' />
                <label>synonym</label>
                <input name='synonym' value={synonym} onChange={e => this.handleChange(e)} type='text'/>
                <input type='submit' />
            </form>
        )
    }
}

export default NewWord
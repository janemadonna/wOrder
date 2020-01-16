import React from 'react'
import { getDefs, getWordById, updateWord } from '../services'

class UpdateWord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            synonym: '',
            definitions: []
        }
    }

    async componentDidMount() {
        await this.fetchWord()
    }

    fetchWord = async () => {
        try {
            const word = await getWordById(this.props.match.params.id)
            this.setState({
                title: word.title,
                synonym: word.synonym
            })
        } catch (err) {
            console.error(err)
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
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const word = {title: this.state.title, synonym: this.state.synonym}
        console.log(word)
        await this.fetchDefs()
        if (this.state.definitions.length > 0) {
            await updateWord(this.props.match.params.id, word)
            .then(this.props.history.push(`/fictionary/${this.props.match.params.id}`))
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

export default UpdateWord
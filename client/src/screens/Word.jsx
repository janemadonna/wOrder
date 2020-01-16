import React from 'react'
import { getWordById, getDefs, deleteWord } from '../services'
import { Link } from 'react-router-dom'

class Word extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: {},
            definitions: []
        }
    }

    async componentDidMount() {
        await this.fetchWord()
        await this.fetchDefs()
    }

    fetchWord = async () => {
        try {
            const word = await getWordById(this.props.match.params.id)
            this.setState({word})
        } catch (err) {
            console.error(err)
        }
    }

    fetchDefs = async () => {
        try {
            const definitions = await getDefs(this.state.word.synonym)
            this.setState({definitions})
            console.log(this.state)
        } catch (err) {
            console.error(err)
        }
    }

    handleDelete = (e) => {
        e.preventDefault()
        console.log('delete')
        deleteWord(this.props.match.params.id)
        .then(this.props.history.push('/fictionary'))
        .catch(console.error)
    }

    render() {
        return (
            <div>
                <h4>{this.state.word.title}</h4>
                <p><strong>synonym: </strong>{this.state.word.synonym}</p>
                {this.state.definitions.map(definition => {
                    return (
                        <div key={definition.definition}>
                            <p><strong>definition:</strong> {definition.definition}</p>
                        </div>
                    )
                })}
                <div>
                    {this.props.isAuthenticated ? <Link to={`/fictionary/${this.state.word.id}/update`} ><button>update word</button></Link> : null}
                    {this.props.isAuthenticated ? <button onClick={e => this.handleDelete(e)}>delete word</button> : null}
                </div>
            </div>
        )
    }
}

export default Word
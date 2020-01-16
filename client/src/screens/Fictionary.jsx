import React from 'react'
import { getWords, getDefs } from '../services'
import { Link } from 'react-router-dom'

class Fictionary extends React.Component {
    constructor() {
        super()
        this.state = {
            words: []
        }
    }

    async componentDidMount() {
        await this.fetchWords()
        await this.fetchDefs()
    }

    fetchWords = async () => {
        try {
        const words = await getWords()
        this.setState({ words })
        } catch (err) {
        console.error(err)
        }
    }

    fetchDefs = async () => {
        try {
            this.state.words.forEach(async (word, index) => {
                const definitions = await getDefs(word.synonym)
                this.setState(state => { 
                    state.words[index] = {...word, definitions}
                    return state
                })
            })        
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        const { words } = this.state
        return (
            <div>
                {words.map(word => {
                    return (
                        <div className='word-card' key={word.id}>
                            <Link to={`/fictionary/${word.id}`} ><h4 className='word-title'>{word.title}</h4></Link>
                            <p><strong>synonym:</strong> {word.synonym}</p>
                            <div>
                                {word.hasOwnProperty('definitions') ? word.definitions.map(definition => {
                                    return (
                                        <div key={definition.definition}>
                                            <p><strong>definition:</strong> {definition.definition}</p>
                                        </div>
                                    )
                                }) : 'loading...' }
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Fictionary
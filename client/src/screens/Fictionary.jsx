import React from 'react'
import { getWords, getDefs } from '../services'

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
        await this.setState({ words })
        } catch (err) {
        console.error(err)
        }
    }

    fetchDefs = async () => {
        console.log(this.state.words)
        try {
            this.state.words.forEach(async (word, index) => {
                console.log(word.synonym)
                const definitions = await getDefs(word.synonym)
                console.log(definitions)
                this.setState(state => { 
                    state.words[index] = {...word, definitions}
                    return state
                })
            })  
            console.log(this.state.words)         
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
                        <div key={word.id}>
                            <h4>{word.title}</h4>
                            <p>synonym: {word.synonym}</p>
                            <div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Fictionary
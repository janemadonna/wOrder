import React from 'react'
import { getWords } from '../services'

class Fictionary extends React.Component {
    constructor() {
        super()
        this.state = {
            words: []
        }
    }

    async componentDidMount() {
       this.fetchWords()
    }

    fetchWords = async () => {
        try {
        const words = await getWords()
        this.setState({ words })
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
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Fictionary
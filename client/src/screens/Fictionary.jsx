import React from 'react'
import { getWords, getDefs } from '../services'

class Fictionary extends React.Component {
    constructor() {
        super()
        this.state = {
            words: [{id: 1,
                title: "abbifal",
                synonym: "cat",
                created_at: "2020-01-14T15:04:25.399Z",
                updated_at: "2020-01-14T15:04:25.399Z",
                user_id: 3}],
            definitions: []
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
            const definitions = this.state.words.map(async (word) => {
                const result = await getDefs(word.synonym)
                return result
            })
            //const definitions = await getDefs('Cat')            
            console.log('def:' ,definitions)
            this.setState({definitions})
            console.log(this.state.definitions)
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        const { words, definitions } = this.state
        const { fetchDefs } = this
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
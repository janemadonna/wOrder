import React from 'react'
import { getPoems } from '../services'

class Anthology extends React.Component {
    constructor() {
        super()
        this.state = {
            poems: []
        }
    }

    async componentDidMount() {
        this.fetchPoems()
    }

    fetchPoems = async () => {
        try {
        const poems = await getPoems()
        this.setState({ poems })
        } catch (err) {
        console.error(err)
        }
        console.log(this.state.poems)
    }

    render() {
        const { poems } = this.state
        return (
            <div>{poems.map(poem => {
                return (
                    <div key={poem.id}>
                        <h4>{poem.title}</h4>
                        <p>{poem.content}</p>
                    </div>
                )
            })}</div>
        )
    }
}

export default Anthology
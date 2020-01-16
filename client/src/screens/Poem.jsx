import React from 'react'
import { getPoemById, deletePoem } from '../services'
import { Link } from 'react-router-dom'

class Poem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            poem: {}
        }
    }

    async componentDidMount() {
        await this.fetchPoem()
    }

    fetchPoem = async () => {
        const poem = await getPoemById(this.props.match.params.id)
        this.setState({poem})
    }

    handleDelete = async () => {
        await deletePoem(this.props.match.params.id)
        .then(this.props.history.push('/anthology'))
        .catch(console.error)
    }

    render() {
        const {poem} = this.state
        return (
            <div>
                <h4>{poem.title}</h4>
                <p>{poem.content}</p>
                <div>
                    {this.props.isAuthenticated ? <Link to={`/anthology/${poem.id}/update`} ><button>update poem</button></Link> : null}
                    {this.props.isAuthenticated ? <button onClick={e => this.handleDelete(e)} >delete poem</button> : null}
                </div>
            </div>
        )
    }
}

export default Poem
import React from 'react'


class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (e) => {
        this.setState({term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        // TODO: panggil callback dari parent component 
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term} 
                        // onChange={e => {this.setState({ term: e.target.value })}}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar
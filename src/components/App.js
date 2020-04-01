import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

const KEY = 'AIzaSyClENxLwTxELVSyHXCh4iODrPBv8KdRs44'

class App extends React.Component {

    state = { videos: [] }

    onTermSubmit =  async (term) => {

           const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: term,
                    part: 'snippet',
                    maxResults: 5,
                    key: KEY,
                    type: 'video',        
                }
            })  
            this.setState({ videos: response.data.items  })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
    
}

export default App
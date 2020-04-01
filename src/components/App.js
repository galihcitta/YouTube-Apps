import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyClENxLwTxELVSyHXCh4iODrPBv8KdRs44'

class App extends React.Component {

    state = { videos: [], selectedVideo: null }



    componentDidMount() {
        this.onTermSubmit('Rans Entertaiment')
    }

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
            this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (vid) => {
       this.setState({ selectedVideo: vid})
    }

    //untuk komunikasi dari child ke parent menggunakan callback system
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App


//bikin event handler onVideoSelect isinya callback di app.js(parent)
//bikin props di VideoList di app.js(parent)
//di videolist.js(child) masukin props dari parent dgn cara didestruct {onVideoSelect}
//di videolist.js(child) bikin prop di VideoItem
//di videoitem.js(child dari videolist) masukin props dari parentnya dgn cara didestruct {onVideoSelect}
//bikin event handler onClick di videoItem untuk dicallback ke parent(app.js)
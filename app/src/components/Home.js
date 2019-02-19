import React, { Component } from 'react'
import Location from './Location'
import Preloader from './Preloader'
import { getCookie, setCookie } from '../helpers/cookieManager'

class Home extends Component {
  state = {
    index_list: []
  }
  componentDidMount() {
    fetch('/api/index')
      .then(res => res.json())
      .then(json => this.setState({ index_list: json }))
      .catch(err => {
        console.error(err)
        window.alert('Failed to load list of Masaajid, please refresh the page')
      })
  }
  
  makeDefaultLocation = key => {
    this.props.makeDefaultLocation(key)
  }
  render() {
    const content = this.state.index_list.length ? (
      this.state.index_list.map(location => (
        <Location
          defaultLocation={this.props.default_location}
          location={location}
          key={location.key}
          makeDefaultLocation={this.makeDefaultLocation}
        />
      ))
    ) : (
      <Preloader />
    )

    return (
      <div className="Home container">
        <h4 className="center-align orange-text text-accent-2">Masjid Directory</h4>
        {content}
      </div>
    )
  }
}

export default Home

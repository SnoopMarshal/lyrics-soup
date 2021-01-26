import React, { Component } from 'react'
import SongCard from './song-card'

export default class TopSong extends Component {
    render() {
        return (
            <div className="flex flex-col justify-center items-center w-full mt-10 px-40">
        <div className="w-5/6 justify-start items-start mb-4">
          <span className="lh-text-gray font-semibold text-xl">
            Top searched songs
          </span>
        </div>
        <div className="w-5/6 flex justify-between items-center ">
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
            <SongCard/>
        </div>
      </div>
        )
    }
}

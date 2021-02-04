import React, { Component } from 'react'
import LyricsCard from './lyricsCard';

export default class LyricsList extends Component {
    render() {
        const lyricsList = this.props.lyricsList.data;
        console.log(lyricsList);
        return (
            <div className="flex flex-col justify-center w-full lg:w-1/2 md:w-2/3">
                { lyricsList ? lyricsList.length> 0 ? lyricsList.map(o => {
                    return (
                        <LyricsCard data={o} key={o.id}/>
                    )
                }):<div className="text-white font-bold p-4 rounded-md">No data found</div> : <></>}
            </div>
        )
    }
}

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ArtistCard extends Component {
    render() {
        return (
            <div className="flex lh-card-pink py-12 px-4 items-center">
                <div className="flex w-1/2 rounded-full">
                    <img srcSet=""
                     className="w-full rounded-full object-contain"
                      src="http://cdn-images.deezer.com/images/artist/32f4286d3082999df24439308e2d7669/500x500-000000-80-0-0.jpg" />
                </div>
                <div className="flex w-1/2 flex-col justify-center items-start pl-2">
                    <span className="text-white font-semibold text-lg">Linkin Park</span>
                </div>
            </div>
        )
    }
}

/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ArtistCard extends Component {
    render() {
        const {name, imageUrl, colorScheme } = this.props;
        return (
            <div className={`flex lh-card-${colorScheme} w-full py-12 px-4 items-center`}>
                <div className="flex w-1/3 rounded-full">
                    <img srcSet=""
                     className="w-20 h-20 rounded-full object-contain"
                      src={imageUrl} />
                </div>
                <div className="flex w-2/3 flex-col justify-center items-start pl-2">
                    <span className="text-white font-semibold text-lg">{name}</span>
                </div>
            </div>
        )
    }
}

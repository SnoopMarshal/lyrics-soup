/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ArtistCard extends Component {
    render() {
        const {name, imageUrl, colorScheme } = this.props;
        return (
            <div className={`flex lh-card-${colorScheme} py-12 px-4 items-center`}>
                <div className="flex w-1/2 rounded-full">
                    <img srcSet=""
                     className="w-full rounded-full object-contain"
                      src={imageUrl} />
                </div>
                <div className="flex w-1/2 flex-col justify-center items-start pl-2">
                    <span className="text-white font-semibold text-lg">{name}</span>
                </div>
            </div>
        )
    }
}

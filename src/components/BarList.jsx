import React from 'react'

import Loader from './Loader'

const BarList = ({ barList, location, onClick, loading }) => {
    return loading
    ?
    (
    <Loader />
    )
    :
(
    <div className='bars-list'>
        <h1>Bars near {location}:</h1>
        <ul className="list-group">
            {barList.map(bar => {
                return (
                    <li key={bar.id} className="list-group-item bar-details" onClick={onClick}>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h2>{bar.name}</h2>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Distance: 
                                <span className="badge badge-dark badge-pill">{Math.round(bar.distance)}m</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Rating:
                                <span className="badge badge-dark badge-pill">{bar.rating}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Address:
                                <span className="badge badge-dark badge-pill">{bar.address}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Phone:
                                <span className="badge badge-dark badge-pill">{bar.phone}</span>
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    </div>
)
}

export default BarList
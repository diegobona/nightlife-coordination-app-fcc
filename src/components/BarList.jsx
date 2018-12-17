import React from 'react'
import { connect } from 'react-redux'

import Loader from './Loader'

let BarList = ({ barList, location, loading, error, onClick }) => {
    return loading
    ?
    (
    <Loader />
    )
    :
    (location && !error.error) 
    ? 
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
    : null
}


const mapStateToProps = (state) => (
    {
      loading: state.loading,
      barList: state.bars.bars,
      location: state.bars.location,
      error: state.error
    }
)


BarList = connect(mapStateToProps, null)(BarList)

export default BarList
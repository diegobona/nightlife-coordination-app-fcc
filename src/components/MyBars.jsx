import React from 'react';
import { connect } from 'react-redux'

import Loader from './Loader'

let MyBars = ({ loading, barList}) => {
    if (loading) return <Loader />
    else {
        if (barList.length == 0) return (
            <div>
                <h2>You're not going anywhere tonight!</h2>
            </div>
        )
        else return (
            <div>
                <h2>You want to go here tonight:</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
      loading: state.loading,
      barList: state.bars.bars
    }
)

MyBars = connect(mapStateToProps, null)(MyBars)

export default MyBars
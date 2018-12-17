import React from 'react'
import BarSearch from './BarSearch'
import BarList from './BarList'

let BarSearcher = ({ findBars }) => (
    <div>
        <BarSearch findBars={findBars} />
        <BarList />
    </div>
)

export default BarSearcher
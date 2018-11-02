import React from 'react'

const BarSearch = ({ findBar }) => (
    <div className='jumbotron text-center'>
        <form method='GET' onSubmit={e => findBar(e)}>
            <div className="form-group">
                <label htmlFor="location"><h2>Where are you looking for a bar:</h2></label>
                <input type="text" className="form-control" id="location" autoComplete='off' required={true} name='location'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)

export default BarSearch
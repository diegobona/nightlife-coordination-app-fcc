import React from 'react'

const BarList = () => (
    <div className='container'>
        <form action="/action_page.php">
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
)

export default BarList
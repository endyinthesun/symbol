import React from 'react'
import './page-not-found.scss';

function PageNotFound() {
    return(
        <div className="page-not-found">
            <div className='text'>
                <span>
                    Error 404
                    <br/>
                    Page Not Found.
                </span>
            </div> 
        </div>
    );
}

export default PageNotFound;

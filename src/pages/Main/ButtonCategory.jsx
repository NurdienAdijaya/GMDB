import React from 'react'
// import { Button } from 'react-bootstrap'

function ButtonCategory(button, filter) {


    return (
        <div className="Container fluid">
            <div className="container align-items-start">
                <div className="col">
                    <div class="col-lg-100 py-4">
                        <h2 className="fw-bold mb-3 text-md-start">Browse by category</h2>
                    </div>
                    <div className="row-cols text-md-start">
                        {/* <Button type="button" class="btn btn-danger" onClick={filter('All')}>All</Button>
                        <Button type="button" onClick={filter('Action')}>Action</Button>
                        <Button type="button" onClick={filter('Sci-fi')}>Sci-fi</Button>
                        <Button type="button" onClick={filter('Drama')}>Drama</Button>
                        <Button type="button" onClick={filter('Romance')}>Romance</Button>
                        <Button type="button" onClick={filter('Thriller')}>thriller</Button> */}
                        <button type="button" class="btn btn-danger rounded-pill">All</button>
                        <button type="button" class="btn btn-danger rounded-pill">Action</button>
                        <button type="button" class="btn btn-danger rounded-pill">Sci-fi</button>
                        <button type="button" class="btn btn-danger rounded-pill">Drama</button>
                        <button type="button" class="btn btn-danger rounded-pill">Romance</button>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default ButtonCategory
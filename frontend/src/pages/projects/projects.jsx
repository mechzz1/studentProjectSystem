import React from 'react'
import Card from '../../components/card/appCard'
import Masonry from 'react-masonry-css'
function projects() {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    const arr = [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores dolorum consequuntur! Est fuga odit aperiam nobis quisquam quas! Ea quisquam reiciendis id quos architecto, labore enim incidunt dolorem voluptates at nisi!"
    ]
    return (
        <>
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    <Card message={arr[0]}/>
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                    <Card />

                </Masonry>
                <p>
                </p>

            </div>
        </>
    )
}

export default projects
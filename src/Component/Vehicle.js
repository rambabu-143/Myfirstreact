import React from 'react';

const Vehicle = () => {
    return (
        <>
            <h1 id='selectvehicle'>Select Vehicle</h1>
            <div className="allvehicles">

                <div className="bike">
                    <h4 id='bikehead'>Bike</h4>
                    <h2>₹1000</h2>
                    <button id='Booknow'>Book now to get discount</button>
                </div>
                <div className="car1">
                    <h4 id='bikehead'>Car</h4>
                    <h2>₹3500</h2>
                    <h3>(800cc-1200cc)</h3>
                    <button id='Booknow'>Book now to get discount</button>
                </div>
                <div className="car2">
                    <h4 id='bikehead'>Car</h4>
                    <h2>₹3500</h2>
                    <h3>(1250cc-1500cc)</h3>
                    <button id='Booknow'>Book now to get discount</button>
                </div>

            </div>



        </>
    )
}

export default Vehicle

import React from 'react';

function StarRating(rating) {

    const handleStarRating = (rating) => {
        console.log("rating",rating.rating);

            return (
                <div>
                    <span className={`${rating.rating > 0 && rating.rating < 1 ? 'fa fa-star-half-o checked':''}`}></span>
                    <span className={`${rating.rating > 1 ? 'fa fa-star checked':'fa fa-star'}`}></span>
                    <span className={`${rating.rating > 1 && rating.rating < 2 ? 'fa fa-star-half-o checked':''}`}></span>
                    <span className={`${rating.rating > 2 ? 'fa fa-star checked':'fa fa-star'}`}></span>
                    <span className={`${rating.rating > 2 && rating.rating < 3 ? 'fa fa-star-half-o checked':''}`}></span>
                    <span className={`${rating.rating > 3 ? 'fa fa-star checked':'fa fa-star'}`}></span>
                    <span className={`${rating.rating > 3 && rating.rating < 4 ? 'fa fa-star-half-o checked':''}`}></span>
                    <span className={`${rating.rating > 4 ? 'fa fa-star checked':'fa fa-star'}`}></span>
                    <span className={`${rating.rating > 4 && rating.rating < 5 ? 'fa fa-star-half-o checked':''}`}></span>
                </div>
            )

    }
    return (
        <div>
            {rating.rating ?
                handleStarRating(rating) : <div>No Rating</div>
            }
        </div>
    );
}

export default StarRating;
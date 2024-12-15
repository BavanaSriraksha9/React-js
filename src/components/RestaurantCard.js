import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor: "lightgrey"
}

const RestaurantCard = (props) => {
    console.log('props value: ', props)
    const { resData } = props

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData?.data
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-image" src= { CDN_URL } />
        <h3> { name } </h3>
        <h4> { cuisines.join(", ")} </h4>
        <h4> { avgRating } stars </h4>
        <h4> Rs { costForTwo / 100} For two </h4>
        <h4> { deliveryTime } minutes </h4>
        </div>
    )
}

export default RestaurantCard
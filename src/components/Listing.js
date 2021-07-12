import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Listing = (props) => {
    const { items } = props;

    return (
        <div className="item-list">
            {items.map(el => <ListItem key={el.listing_id} item={el} />)}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing;
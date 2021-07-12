import PropTypes from "prop-types";

const ListItem = (props) => {
    const { url, MainImage, title, currency_code, price, quantity } = props.item;
    let shortTitle = '';
    let priceWithCurrency = '';
    let quantityClassName = '';

    if (title.length > 50) {
        shortTitle = title.slice(0, 50) + '...';
    }

    switch (currency_code) {
        case 'USD':
            priceWithCurrency = `$${price}`;
            break;
        case 'EUR':
            priceWithCurrency = `€${price}`;
            break;
        default:
            priceWithCurrency = `${price} ${currency_code}`;
            break;
    }

    if (quantity < 10) {
        quantityClassName = 'item-quantity level-low';
    } else if (quantity < 20) {
        quantityClassName = 'item-quantity level-medium';
    } else {
        quantityClassName = 'item-quantity level-high';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN}  alt="item image" />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{shortTitle ? shortTitle : title}</p>
                <p className="item-price">{priceWithCurrency}</p>
                <p className={quantityClassName}>{quantity} left</p>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    items: PropTypes.array
}

export default ListItem;
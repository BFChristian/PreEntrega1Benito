import '../styles/CartWidget.css';

const CartWidget = () => {
    return(
        <>
            <button id="cart-button" className="btn btn-dark position-relative" type="button">
                <img src="cart.svg" alt="cart" width="25" height="25" className="d-inline-block"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1+
                </span>
            </button>
        </>
    )
};

export default CartWidget;
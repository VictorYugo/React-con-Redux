export const BUY_PRODUCT = 'BUY_PRODUCT';
export const RETURN_PRODUCT = 'RETURN_PRODUCT';

export const buy_product_action = (cant) => {
    return {
        type: BUY_PRODUCT,
        payload: cant
    }
}

export const return_product_action = (cant) => {
    return {
        type: RETURN_PRODUCT,
        payload: cant
    }
}
export const initialState = {
    cart: [],
};

export const getCartTotal = (cart) => 
    cart?.reduce((cost, item) => item.price + cost, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'Add_To_Cart':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        default:
            return state;
    }
}

export default reducer;
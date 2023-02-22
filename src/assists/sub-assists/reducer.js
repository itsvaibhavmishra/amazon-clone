export const initialState = {
    cart: [],
};

export const getCartTotal = (cart) => 
    cart?.reduce((cost, item) => item.price + cost, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'Add_To_Cart':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'Remove_From_Cart':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if( index >= 0 ){
                newCart.splice(index, 1);
            }
            else {
                console.warn(
                    `Product id: ${action.id} not found in cart!`
                );
            }

            return {
                ...state,
                cart: newCart
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
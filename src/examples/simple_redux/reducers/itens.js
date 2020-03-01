export default function itens(state = [], action) {
    console.log(state);
    switch (action.type) {
        case 'ADD_ITEM':
            return (
                [...state, action.item]
                // console.log('teste')
            );
        default:
            return state;
    }
}
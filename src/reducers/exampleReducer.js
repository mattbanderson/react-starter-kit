import { AN_ACTION } from '../actions/exampleActions';

export default function exampleReducer(state = {}, action) {
  switch (action.type) {
    case AN_ACTION:
      return action.payload;
    default:
      return state;
  }
}

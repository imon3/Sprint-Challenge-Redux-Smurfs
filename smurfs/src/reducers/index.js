/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAIL
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  postingSmurfs: false,
  postSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: '',
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        postingSmurfs: false,
        error: action.payload
      };
    case POST_SMURFS_START:
      return {
        ...state,
        postingSmurfs: true
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        postingSmurfs: false,
        postSmurf: true,
        smurfs: action.payload
      }
    case POST_SMURFS_FAIL:
      return {
        ...state,
        postingSmurfs: false,
        postSmurf: false,
        error: action.paylod
      }
    default:
      return state;
  }
}

export default reducer;
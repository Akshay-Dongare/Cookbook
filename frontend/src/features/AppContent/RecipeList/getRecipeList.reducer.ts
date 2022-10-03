import * as ACTION_TYPES from './getRecipeList.actionTypes';
import { ActionTypes } from '../../apiMethods';

const initialState = {
  isGetRecipeListLoading: false,
  isGetRecipeListSuccess: false,
  isGetRecipeListFailure: false,
  getRecipeListData: [],
  getRecipeListError: [],
};

export default function getRecipeListAppState(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ACTION_TYPES.LOADING_GET_RECIPE_LIST:
      return {
        ...state,
        isGetRecipeListLoading: true
      };
    case ACTION_TYPES.SUCCESS_GET_RECIPE_LIST:
      return {
        ...state,
        isGetRecipeListLoading: false,
        isGetRecipeListSuccess: true,
        isGetRecipeListFailure: false,
        getRecipeListData: action.payload,
      };
    case ACTION_TYPES.FAILURE_GET_RECIPE_LIST:
      return {
        ...state,
        isGetRecipeListLoading: false,
        isGetRecipeListSuccess: false,
        isGetRecipeListFailure: true,
        getRecipeListError: action.payload,
      };
    default:
      return state;
  }
}
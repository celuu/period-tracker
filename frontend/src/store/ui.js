// TYPE CONSTANTS

export const OPEN_SIGNIN_MODAL = "ui/openSigninModal";
export const CLOSE_SIGNIN_MODAL = "ui/closeSigninModal";
export const OPEN_SIGNUP_MODAL = "ui/openSignupModal";
export const CLOSE_SIGNUP_MODAL = "ui/closeSignupModal";
export const OPEN_PERIOD_MODAL = "ui/openPeriodModal";
export const CLOSE_PERIOD_MODAL = "ui/closePeriodModal";


// ACTION CREATORS
export const openSigninModal = () => ({
  type: OPEN_SIGNIN_MODAL,
});

export const closeSigninModal = () => ({
  type: CLOSE_SIGNIN_MODAL,
});

export const openSignupModal = () => ({
  type: OPEN_SIGNUP_MODAL,
});

export const closeSignupModal = () => ({
  type: CLOSE_SIGNUP_MODAL,
});

export const openPeriodModal = () => ({
  type: OPEN_PERIOD_MODAL,
});

export const closePeriodModal = () => ({
  type: CLOSE_PERIOD_MODAL,
});



// REDUCER
const initialState = {
  signinModalOpen: false,
  signupModalOpen: false,
  periodModalOpen: false
};

const uiReducer = (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case OPEN_SIGNIN_MODAL:
      return { ...state, signinModalOpen: true };
    case CLOSE_SIGNIN_MODAL:
      return { ...state, signinModalOpen: false };
    case OPEN_SIGNUP_MODAL:
      return { ...state, signupModalOpen: true };
    case CLOSE_SIGNUP_MODAL:
      return { ...state, signupModalOpen: false };
    case OPEN_PERIOD_MODAL:
      return { ...state, periodModalOpen: true };
    case CLOSE_PERIOD_MODAL:
      return { ...state, periodModalOpen: false };
    default:
      return state;
  }
};

export default uiReducer;

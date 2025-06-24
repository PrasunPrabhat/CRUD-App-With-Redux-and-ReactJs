import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "../Redux/UseReducer";

// ✅ Load users from localStorage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("users");
    return serializedState ? { user: JSON.parse(serializedState) } : undefined;
  } catch (e) {
    console.warn("Failed to load from localStorage", e);
    return undefined;
  }
};

// ✅ Save users to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.user);
    localStorage.setItem("users", serializedState);
  } catch (e) {
    console.warn("Failed to save to localStorage", e);
  }
};

// ✅ Load persisted state
const persistedState = loadState();

const store = configureStore({
  reducer: {
    user: UseReducer,
  },
  preloadedState: persistedState,
});

// ✅ Subscribe to store updates
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { createEffect } from "solid-js";

function createLocalStore<T>(initState: T): [Store<T>, SetStoreFunction<T>] {
  const [state, setState] = createStore(initState);
  if (localStorage["wrong-lang-settings"]) {
    setState(JSON.parse(localStorage["wrong-lang-settings"]));
  }
  createEffect(
    () => (localStorage["wrong-lang-settings"] = JSON.stringify(state)),
  );
  return [state, setState];
}

export const [state, setState] = createLocalStore({
  darkTheme: false,
  modal: false,
  click: 0
});

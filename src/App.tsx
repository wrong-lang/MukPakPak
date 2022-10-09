import type { Component } from "solid-js";
import { state, setState } from "./lib/store";
import { Modal } from "./components/Modal";

const title = "HardTail";
const description =
  "Template for building SolidJS web application with Tailwind CSS faster!";

const App: Component = () => {
  return (
    <div class="grid min-h-screen place-items-center">
      <Show when={state.modal}>
        <Modal onClose={() => setState({ ...state, modal: !state.modal })} />
      </Show>

      <div class="flex flex-col gap-8 items-center justify-center">
        <img src="/logo.png" alt="logo" width={'300vw'} />
        <h1 class="text-6xl hover:border-b-4 border-blue-700 duration-200">
          <span class="text-blue-700 font-black">Hard</span>
          Tail
        </h1>
        <div class="flex flex-col gap-4 items-center justify-center">
          <p class="text-lg font-bold">
            Amount of Clicks: {state.click}
          </p>
          <div class="flex flex-row gap-2">
            <button
              class="px-4 py-2 bg-blue-700 hover:bg-transparent border-2 border-blue-700 hover:text-blue-700 rounded-lg text-white uppercase active:scale-[95%] duration-200"
              onClick={() => setState({ ...state, click: state.click + 1 })}
            >
              Click Me!
            </button>
            <button
              class="px-4 py-2 hover:bg-blue-700 bg-transparent border-2 border-blue-700 text-blue-700 rounded-lg hover:text-white uppercase active:scale-[95%] duration-200"
              onClick={() => setState({ ...state, click: 0 })}
            >
              Reset Click
            </button>
            <button
              class="px-4 py-2 bg-blue-700 hover:bg-transparent border-2 border-blue-700 hover:text-blue-700 rounded-lg text-white uppercase active:scale-[95%] duration-200"
              onClick={() => setState({ ...state, modal: !state.modal })}
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { Component } from "solid-js";

export const Modal: Component = ({ ...props }) => {
  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed fadein inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={props.onClose}
        />

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-2xl sm:w-full">
          <div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="text-center sm:text-left pb-4">
              <h3
                class="text-3xl leading-6 font-medium text-gray-900 dark:text-gray-100 text-center"
                id="modal-title">
                Why Dihydrogen Monoxide is dangerous?
              </h3>
              <div class="flex flex-col gap-3 text-sm mt-4 w-full justify-between text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse velit ante, consectetur sit amet dapibus eu,
                consectetur sit amet dapibus eu, consectetur sit amet dapibus
              </div>
            </div>
            <hr />
          </div>
          <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black focus:ring-green-300 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={props.onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

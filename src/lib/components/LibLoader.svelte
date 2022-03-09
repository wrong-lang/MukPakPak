<script>
  import { onMount, createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()
  export let src
  export let libraryDetectionObject
  let script
  onMount(() => {
    if (libraryDetectionObject && window && typeof window[libraryDetectionObject] !== "undefined") {
      return dispatch("load")
    }
    script.addEventListener("load", () => {
      dispatch("load")
    })
    script.addEventListener("error", (event) => {
      dispatch("error")
    })
  })
</script>

<svelte:head>
    <script bind:this={script} {src}></script>
</svelte:head>
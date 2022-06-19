<script>
  import { fly } from 'svelte/transition';

  let muk = { question: 'Loading...', answer: '' };
  let isAnswer = false;

  export let random = async() => {
    fetch('https://raw.githubusercontent.com/tinvv/MukPakPak/main/README.md').then(res => res.text()).then(data => {
      let filterMuk = data.split('\n').filter(line => /(^- (.*\?) (.*))/.test(line));
      let randomNum = Math.floor(Math.random() * filterMuk.length);
      let [_, question, answer] = filterMuk[randomNum].match( /(?:^- (.*\?) (.*))/);
      muk.question = question;
      muk.answer = answer;
    });
  }
    
    random()
</script>

<div class="grid h-screen place-items-center">
    <div>
        <div class="flex flex-col justify-center gap-6">
            <p class="md:text-8xl text-6xl m-4 text-center font-bold animate-bounce basis-full">
                มุกแป๊กแป๊ก
            </p>
            <div class="text-3xl text-center animate-pop container max-w-3xl basis-full">
              <span class="before:block before:absolute before:-inset-4 before:bg-blue-500 before:-skew-y-2 before:rounded-lg relative inline-block">
                <p class="relative text-white">
                  {muk['question'] || 'Loading...'}
                </p>
              </span>
              {#if isAnswer}
                <p class="text-black mt-8" transition:fly={{ y: -20, duration: 200 }}>
                  {muk['answer'] || ''}
                </p>
              {/if}
            </div>
            <center class="basis-full">
                <button on:click={() => { random(); isAnswer = false; }} class="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-sm mt-8 hover:bg-blue-600 active:scale-90 duration-200">
                    สุ่มเพิ่ม
                </button>
                <button on:click={() => isAnswer = !isAnswer} class="bg-gray-400 text-white px-4 py-2 rounded-lg max-w-sm mt-8 hover:bg-gray-500 active:scale-90 duration-200">
                  {!isAnswer ? "ดู" : "ซ่อน"}คำตอบ
                </button>
            </center>
        </div>
    </div>
</div>
<div class="absolute top-0 left-0 p-2 text-gray-500">
  By <a href="https://github.com/tinvv">Tinnaphat Somsang (@tinvv)</a>
</div>
<div class="absolute top-0 right-0 p-2 text-gray-500">
<a href="https://github.com/tinvv/mukpakpak">Github</a>
</div>

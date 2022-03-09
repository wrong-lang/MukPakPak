<script>
  export let muk = {question: 'Loading...', answer: ''};
   
   export let random = async() => {
     fetch('https://raw.githubusercontent.com/tinvv/MukPakPak/main/README.md').then(res => res.text()).then(data => {
       let filterMuk = data.split('\n').filter(line => /(?:^- (.*\?) (.*))/.test(line));
       let randomNum = Math.floor(Math.random() * filterMuk.length);
       let randomMuk = filterMuk[randomNum].match( /(?:^- (.*\?) (.*))/);
       muk.question = randomMuk[1];
       muk.answer = randomMuk[2];
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
              <p class="text-black mt-8">
                {muk['answer'] || ''}
              </p>
            </div>
            <center class="basis-full">
                <button on:click={() => random()} class="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-sm mt-8 hover:bg-blue-600 active:scale-90 duration-200">
                    Random
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

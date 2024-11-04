<script>
  let { data, form } = $props();
</script>

<div class="bg-gray-900 text-white w-screen h-screen flex flex-col items-center p-8 space-y-10">
 
  
    <h1 class="text-center text-3xl font-semibold pb-2 mb-4">To Dos</h1>

    {#if form?.error}
		<p class="error">{form.error}</p>
	  {/if}
 

  <form method="POST" action="?/create" class="w-full max-w-md">
    <label class="block text-lg mb-2">Add a Todo
      <input
        class="w-full p-2 text-black"
        type="text"
        name="description"
        value={form?.description ?? ''}
        placeholder="Enter your task"
      />

    </label>
    
  </form>

  <!-- Todo List -->
  <ul class="w-full max-w-md space-y-4">
    {#each data.todos as todo (todo.id)}
      <li class="flex items-center justify-between bg-gray-800 rounded-sm">
        <span class="inline-block align-middle text-lg ">{todo.description}</span>
        <form action="?/delete" method="POST" class="">
          <input type="hidden" name="id" value={todo.id} />
          <button
            type="submit"
            class="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-5"
            aria-label="Delete Todo"
          >
          </button>
        </form>
      </li>
    {/each}
  </ul>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.800);
  }
</style>

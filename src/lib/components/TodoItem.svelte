<script>
let { item } = $props();

</script>

<li class="flex items-center justify-between bg-gray-800 rounded-sm">
  <form action="?/update" method="POST">
    <input type="hidden" name="id" value={item.id}>
    <input class="inline-block align-middle text-lg bg-gray-800" type="text" name="description" value={item.description}/>
  </form>
  <form action="?/delete" method="POST" class="">
    <input type="hidden" name="id" value={item.id} />
    <button
      type="submit"
      class="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-5"
      aria-label="Delete todo"
    >
    </button>
  </form>
</li>

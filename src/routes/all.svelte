<script>
    import { allPastas } from '../lib/copypastaStore';
    import Icon from '@iconify/svelte';
    import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center justify-between h-5/6">
    <ul class="overflow-y-scroll">
        {#each $allPastas as pasta }
            <li class="m-4 p-4 border-4 border-gray-600">{pasta}</li>
        {/each}
    </ul>
    <div class="flex items-center justify-center gap-1">
        <button class="border-2 border-blue-800 p-2 rounded-md hover:border-double bg-blue-500 hover:bg-blue-600" on:click|preventDefault={() => goto("/")} title="Copy">
            <Icon icon="ant-design:home-twotone" />
        </button>
    </div>
</div>

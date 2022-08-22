<script>
    import { allPastas } from '$lib/copypastaStore';
    import Icon from '@iconify/svelte';
    import { goto } from '$app/navigation';

    const copy = (text) => {
        navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard!'));
    };
</script>

<div class="flex flex-col items-center justify-between h-5/6">
    <p class="mt-4 p-2 border-2 border-gray-400 rounded-lg">{$allPastas.length} copypastas in total!</p>
    <ul class="overflow-y-scroll snap-y snap-proximity">
        {#each $allPastas as pasta}
            <li class="m-4 p-4 border-4 border-gray-600 rounded-lg hover:border-gray-400 hover:cursor-pointer snap-center" on:click|preventDefault={() =>copy(pasta) }>{pasta}</li>
        {/each}
    </ul>
    <div class="flex items-center justify-center gap-1 mt-2">
        <button
            class="border-2 border-blue-800 p-2 rounded-md hover:border-double bg-blue-500 hover:bg-blue-600"
            on:click|preventDefault={() => goto('/')}
            title="Copy"
        >
            <Icon icon="ant-design:home-twotone" />
        </button>
    </div>
</div>

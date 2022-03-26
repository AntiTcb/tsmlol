<script>
    import { onMount } from "svelte";
    import { copypasta, getRandomCopypasta } from "../lib/copypastaStore";
    import Icon from '@iconify/svelte';

    onMount(() => getRandomCopypasta());

    const copy = () => {
        navigator.clipboard.writeText($copypasta)
        .then(() => alert('Copied to clipboard!'))
    }
</script>

<svelte:head>
    <title>TSM XD</title>
</svelte:head>

<div class="flex flex-col items-center justify-between h-5/6">
    <p class="flex h-full justify-center items-center text-lg font-semibold mt-5 p-5">{$copypasta}</p>
    <div class="flex items-center justify-center gap-1">
        <button class="border-2 border-blue-800 p-2 rounded-md hover:border-double bg-blue-500 hover:bg-blue-600" on:click|preventDefault={() => copy()}>
            <Icon icon="ep:copy-document" />
        </button>
        <button class="border-2 border-green-800 p-2 rounded-md hover:border-double bg-green-500 hover:bg-green-600" on:click|preventDefault={() => getRandomCopypasta()}>
            <Icon icon="el:refresh" />
        </button>
    </div>
</div>

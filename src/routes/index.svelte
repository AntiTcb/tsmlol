
<script>
    import { onMount } from "svelte";
    import { copypasta, getRandomCopypasta, pastaTotal } from "../lib/copypastaStore";
    import Icon from '@iconify/svelte';
    const gaKey = import.meta.env.VITE_GA_KEY;

    onMount(() => getRandomCopypasta());

    const handleCopypastaButton = () => {
        getRandomCopypasta();
        if (window.gtag) {
            window.gtag("event", 'getPasta', {
                'event_category': 'general',
                'event_label': $copypasta
            });
        }
    };

    const copy = () => {
        navigator.clipboard.writeText($copypasta)
        .then(() => alert('Copied to clipboard!'))
    }
</script>

<svelte:head>
    <title>TSM XD - {pastaTotal()} messages and counting!</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id={gaKey}"></script>
</svelte:head>

<div class="flex flex-col items-center justify-between h-5/6">
    <p class="flex h-full justify-center items-center text-lg font-semibold mt-5 p-5">{$copypasta}</p>
    <div class="flex items-center justify-center gap-1">
        <button class="border-2 border-blue-800 p-2 rounded-md hover:border-double bg-blue-500 hover:bg-blue-600" on:click|preventDefault={() => copy()} title="Copy">
            <Icon icon="ep:copy-document" />
        </button>
        <button class="border-2 border-green-800 p-2 rounded-md hover:border-double bg-green-500 hover:bg-green-600" on:click|preventDefault={() => handleCopypastaButton()} title="New Copypasta">
            <Icon icon="el:refresh" />
        </button>
        <button class="border-2 border-yellow-800 p-2 rounded-md hover:border-double bg-yellow-500 hover:bg-yellow-600" title="View All">
            <Icon icon="carbon:collapse-all" />
        </button>
    </div>
</div>

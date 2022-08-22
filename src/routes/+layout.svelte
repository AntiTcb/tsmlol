<script>
    import '../app.css';
    import Icon from '@iconify/svelte';
    import GoogleAnalytics from '@sajuthankappan/sveltekit-google-analytics';
    import { page } from '$app/stores';
    const gaKey = import.meta.env.VITE_GA_KEY;
</script>

<GoogleAnalytics {page} key={gaKey} />

<slot />

<div class="flex justify-evenly bottom-0 fixed w-full pb-5 text-center">
    <a
        class="link"
        href="https://github.com/antitcb/tsmlol"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon icon="icon-park:plus-cross" class="inline mr-1" width="20" />Suggest a copypasta</a
    >
    <a
        class="link"
        href="https://www.buymeacoffee.com/antitcb"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon icon="icon-park:tea" width="20" class="inline mr-1" />Buy me a cup of tea!</a
    >
</div>

<script>
    import { allPastas } from '../lib/copypastaStore';
</script>

<div class="flex flex-col items-center justify-between h-5/6">
    <ul class="overflow-y-scroll">
        {#each $allPastas as pasta }
            <li class="m-4 p-4 border-4 border-gray-600">{pasta}</li>
        {/each}
    </ul>
</div>

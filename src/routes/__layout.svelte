<script lang="ts">
    import '../tailwind.css'
    import Head from "$lib/components/Head.svelte";
    import Kofi from "$lib/components/Kofi.svelte";
    import SocialButton from "$lib/components/SocialButton.svelte";
</script>

<Head />
<slot />
<Kofi name="tinvv" />
<SocialButton />
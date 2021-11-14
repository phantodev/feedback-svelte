<script>
    import {FeedbackStore} from '../store'
    import {fade,scale} from 'svelte/transition'
    import FeedbackItem from './FeedItem.svelte'
</script>

{#each $FeedbackStore as fb (fb.id)}
<!-- <div transition:fade> -->
<div in:scale out:fade="{{duration: 1000}}">
    <FeedbackItem item={fb} />
</div>
{/each}
<script>
    import {FeedbackStore} from './../store'
    import {v4 as uuidv4} from 'uuid'
    import Button from './Button.svelte'
    import Card from './Card.svelte'
    import RatingSelect from './RatingSelect.svelte'
    let text = ''
    let rating = 10
    let btnDisabled = true;
    let message
    function handleInput(){
       if(text.trim().length <= 10){
        message = 'Text must be at least 10 caractes!'
        btnDisabled = true
       }else{
        message = null
        btnDisabled = false
       }
    }
    function handleSelect(e){
      rating = e.detail
    }
    function handleSubmit(){
      if(text.trim().length > 10){
        const newFeedback = {
          id: uuidv4(),
          text,
          rating: +rating
        }
        FeedbackStore.update((currentFeedback)=>{
          return [newFeedback, ...currentFeedback]
        })
        text = ''
      }
    }
</script>

<Card>
    <header>
        <h2>Dê uma nota e um feedback sobre a nova linguagem Svelte!</h2>
    </header>
    <RatingSelect on:rating-select={handleSelect}/>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value = {text} placeholder="Escreva sua opinião aqui...">
            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>

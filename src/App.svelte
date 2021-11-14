<script>
import FeedbackForm from "./components/FeedbackForm.svelte";
import FeedbackList from "./components/FeedbackList.svelte";
import FeedbackStats from "./components/FeedbackStats.svelte";

</script>

<main class="container">
  <div class="logo">
    <img src="./img/logo.png" alt="Logo Svelte"/>
  </div>
  <FeedbackForm/>
  <FeedbackStats/>
	<FeedbackList/>
</main>

<style>
  img{
    max-width: 300px;
  }
  .logo{
    text-align: center;
  }
</style>
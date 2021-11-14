
<script>
  export let listItem
</script>
<div class="card {listItem}" >
    <slot></slot>
</div>
  
  <style>
    .card {
      background-color: #fff;
      color: #333;
      border-radius: 15px;
      padding: 30px;
      margin: 20px 0;
      position: relative;
    }
    .padding-item{
      padding: 40px !important;
    }
  </style>
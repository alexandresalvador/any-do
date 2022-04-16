<template>
  <div class="head">
    <nav class="navbar navbar-light" style="background-color: #DFE6ED; mb-3">
      <div class="container-fluid">
          <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Any.do_logo.png" alt="">
        <router-link class="navbar-brand text-dark" id="exibirNomePessoa">. {{name}} </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Head-menu',
};
</script>

<style>

.container-fluid {
    height: 105px;
}

.logo {
width: 245px;
padding: 50px;
}
</style>
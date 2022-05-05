<template>
  <div>
    <nav class="navbar navbar-light py-3" id="border" style="background-color: #DFE6ED; mb-3">
      <div class="container-fluid justify-content-evenly">
        <div id="border" class="col-1 d-flex justify-content-center py-3">
          <router-link class="navbar-brand text-dark m-0" to="/">
            <i class="bi bi-image-fill" style="font-size: 2rem"></i>
          </router-link>
        </div>
        <div class="col-9">
          <a class="navbar-brand text-dark m-0" href="/">
            <router-link class="navbar-brand text-dark m-0" to="/">
              <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Any.do_logo.png" alt="">
            </router-link>
          </a>
        </div>
       <div class="col-1 d-flex justify-content-end">
          <a class="navbar-brand text-dark m-0">
            <b v-if="NomeUsuario()" class="text-primary">Olá, {{ nomeCadastrado() }}!</b>
            <router-link
              v-else
              class="navbar-brand text-primary m-0"
              to="/conta"
            >
              <b>Olá, visitante!</b>
            </router-link>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Head-menu',
  methods: {
    NomeUsuario() {
      return localStorage.hasOwnProperty("dadosUsuario");
    },
    nomeCadastrado() {
      let name = localStorage.getItem("dadosUsuario");
      name = JSON.parse(name);
      return name.name;
    },
  },
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
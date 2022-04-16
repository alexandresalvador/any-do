<template>
  <div class="about">
    <Header />
    <div class="container">
      <div class="col">
        <h4>Account</h4>
        <hr />
        <form>
          <div class="row">
            <div class="col">
              <label for="name" id="ExibirNome">Nome</label>
              <label for="x">*</label>
              <input oninput="validacao()" id="nome" type="text" class="form-control" 
              placeholder="nome completo" />
            </div>

            <div class="col">
              <label for="user-name" id="ExibirUsername">Username</label>
              <label for="x">*</label>
              <input oninput="validacao()" id="user" type="text" class="form-control" 
              placeholder="username" />
            </div>

            <div class="col">
              <label for="email" id="ExibirEmail">E-mail</label>
              <label for="x">*</label>
              <input oninput="validacao()" id="email" type="email" class="form-control" 
              placeholder="xpto@mail.com" />
            </div>
          </div>
        </form>

        <div class="col mt-5">
          <h4>Address</h4>
          <hr />
        </div>
        <form>
          <div class="row mt-3">
            <div class="col-4">
              <label for="zipcode">CEP</label>
              <input
                type="number"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
            <div class="col-4">
              <label for="street">Rua</label>
              <input
                type="text"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
            <div class="col-1">
              <label for="num">N.</label>
              <input type="number" class="form-control" placeholder="100" />
            </div>
            <div class="col-3">
              <label for="text">Complemento</label>
              <input
                type="text"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Bairro</label>
              <input
                type="text"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
            <div class="col">
              <label for="city">Cidade</label>
              <input
                type="text"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
            <div class="col">
              <label for="state">Estado</label>
              <input
                type="text"
                class="form-control"
                placeholder="digite aqui"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-secondary">
          <router-link class="text-light text-decoration-none" to="/">
          Cancelar
          </router-link>
        </button>
        <button id="buttonSalvar" type="submit" class="btn btn-primary" to="/logado">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "home-page",
  components: {
    Header,
  },
  data() {
   buttonSalvar.addEventListener("click", function (e) {
    e.preventDefault();
    exibirNomePessoa.textContent = "Hello, " + inputNome.value + "!";
    exibirNome.textContent = inputNome.value;
    exibirUsername.textContent = inputUsername.value;
    exibirEmail.textContent = inputEmail.value;
    validacao();
   });

    function validacaoForm() {
      if (
        inputNome.value === "" ||
        inputCpf.value === "" ||
        inputEmail.value === ""
      ) {
        buttonSalvar.setAttribute("disabled", "disabled");
      }
    }
    function validacaoButton() {
      if (
        inputNome.value !== "" &&
        inputCpf.value !== "" &&
        inputEmail.value !== ""
      ) {
        buttonSalvar.removeAttribute("disabled");
        smallCpf.remove();
        smallEmail.remove();
      }
    }
    function validacao() {
      validacaoForm();
      validacaoButton();
    }
  },
};
</script>


<style>
.container {
  margin: 30px;
}
</style>
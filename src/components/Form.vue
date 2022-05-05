<template>
  <div class="container">
    <div v-if="rotaPerfil" class="col">
      <h4>Account</h4>
      <div class="row justify-content-evenly">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <label for="name"
                  ><span class="d-flex justify-content-between">
                    <b>Name</b>
                    <small v-if="small1()" class="text-danger"
                      >Este campo é obrigatório!</small
                    >
                  </span>
                  <input
                    @input="disabled"
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="nome completo"
                    required
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="username"
                  ><span class="d-flex justify-content-between">
                    <b>Username</b>
                    <small v-if="small2()" class="text-danger"
                      >Este campo é obrigatório!</small
                    >
                  </span>
                  <input
                    @input="disabled"
                    v-model="username"
                    type="text"
                    class="form-control"
                    placeholder="username"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row mb-3">
            <label for="email"
              ><span class="d-flex justify-content-between">
                <b>Email</b>
                <small v-if="small3()" class="text-danger"
                  >Este campo é obrigatório!</small
                >
              </span>
              <input
                @input="disabled"
                v-model="email"
                type="email"
                class="form-control"
                placeholder="xpto@mail.com"
                required
              />
            </label>
          </div>
        </div>
      </div>

      <div class="col mt-5">
        <h4>Address</h4>
        <hr />
      </div>
      <div>
        <div class="row mt-3">
          <div class="col-4">
            <label for="cep"
            >CEP</label>
            <input
              v-model="cep"
              type="number"
              class="form-control"
              placeholder="digite aqui"
            />
          </div>
          <div class="col-4">
            <label for="rua"
            >Rua
            </label>
            <input 
            v-model="rua"
            type="text" 
            class="form-control" 
            placeholder="digite aqui" 
            />
          </div>
          <div class="col-3">
            <label for="numero"
            >N.
            </label>
            <input 
            v-model="numero"
            type="number" 
            class="form-control" 
            placeholder="100" 
            />
          </div>
          <div class="col-9">
            <label for="complemento"
            >Complemento
            </label>
            <input 
            v-model="complemento"
            type="text" 
            class="form-control" 
            placeholder="digite aqui" 
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <label for="bairro"
            >Bairro
            </label>
            <input 
            v-model="bairro"
            type="text" 
            class="form-control" 
            placeholder="digite aqui" 
            />
          </div>
          <div class="col">
            <label for="cidade"
            >Cidade
            </label>
            <input 
            v-model="cidade"
            type="text" 
            class="form-control" 
            placeholder="digite aqui" 
            />
          </div>
          <div class="col">
            <label for="estado"
             >Estado
            </label>
            <input 
            v-model="estado"
            type="text" 
            class="form-control" 
            placeholder="digite aqui" 
            />
          </div>
        </div>
      </div>

      <div class="row justify-content-evenly">
        <div class="col-5">
          <button
            @click="cancelar()"
            id="cancelar"
            type="button"
            class="btn btn-secondary"
          >
            <router-link class="text-light text-decoration-none" to="/">
              Cancelar
            </router-link>
          </button>
        </div>
        <div class="col-5 d-flex justify-content-end">
          <button
            v-if="disabled()"
            disabled
            id="salvar"
            type="button"
            class="btn btn-primary"
          >
            <a class="text-light text-decoration-none" href="/logado">Salvar</a>
          </button>
          <button
            v-else
            @click="salvar"
            id="salvar"
            type="button"
            class="btn btn-primary"
          >
            <a class="text-light text-decoration-none" href="/logado">
            Salvar
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    };
  },
  computed: {
    rotaPerfil() {
      return this.$route.name === "conta";
    },
  },
  methods: {
    cancelar() {
      this.name = "";
      this.username = "";
      this.email = "";
      this.cep = "";
      this.rua = "";
      this.numero = "";
      this.complemento = "";
      this.bairro = "";
      this.cidade = "";
      this.estado = "";
    },
    disabled() {
      return this.name === "" || this.username === "" || this.email === "";
    },
      small1() {
      return this.name === "";
    },
    small2() {
      return this.username === "";
    },
    small3() {
      return this.email === "";
    },
    salvar() {
      const dadosUsuario = {
        id: Math.floor(Math.random() * 1000),
        name: this.name,
        username: this.username,
        email: this.email,
        cep: this.cep,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
      };
      localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
    },
  },
};
</script>

<template>
  <div id="home">
    <Header />

    <div class="container">
      <div class="col">
        <h3>Tasks</h3>
        <hr />
        <br />
        <div v-for="lista in listas" :key="lista.id">
          <input
            type="checkbox"
            id=""
            value=""
            v-model="checked"
          />
          <label for="default"> {{lista.name}} </label>
          <hr />
        </div>
        <router-link class="btn btn-outline-primary" to="/conta">
          Adicionar
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "home-page",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      listas: [
        {
          id: 1,
          name: "- Supermercado, fazer compras... ",
        },
        {
          id: 2,
          name: "- Casa, arrumar mudança",
        },
        {
          id: 3,
          name: "- Computador, organizar SO",
        },
      ],
      
    };
  },
};
</script>

<style>
H3 {
  padding-top: 40px;
}

.btn {
  margin: 40px;
}
</style>
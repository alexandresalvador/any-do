<template>
  <div class="about">
    <Header />
     <Form />
</div>
</template>
<script>
import Header from "@/components/Header.vue";
import Form from "@/components/Form.vue";

export default {
  name: "home-page",
  components: {
    Header,
    Form,
  },
}
</script>
<style>
.container {
  margin: 30px;
}
</style>
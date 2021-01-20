<template>
  <div class="test">
    {{ on1 }}
    <!--<v-btn @click="$emit('start', 'aaaaaaa')">Start</v-btn>-->
  </div>
</template>


<script>
export default {
  props: ["on1"],
};
</script>
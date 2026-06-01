<template>
  <div class="w-full mx-auto py-10 lg:py-20 px-8 2xl:px-0 bg-white ">
    <div class="mx-auto w-full 2xl:w-3/4 flex justify-center items-center">
      <img :src="project.imgLaptopHeader" alt="" class="w-full h-auto 2xl:h-150 2xl:w-auto"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped></style>

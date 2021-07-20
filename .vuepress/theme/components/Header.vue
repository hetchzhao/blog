<template>
  <nav class="header">
    <div class="flex justify-center">
      <div class="w-full max-w-screen-lg min-w-0 mx-16 ">
        <div class="height65 flex items-center">
          <div class="block flex-grow flex-shrink-0 flex-basis-auto">Hetch</div>
          <!-- <div class="block flex-grow-0 flex-shrink-0 flex-basis-auto">
            <div class="flex justify-end items-center"></div>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
}
.height65 {
  height: 65px;
}
.flex-basis-auto {
  flex-basis: auto;
}
</style>
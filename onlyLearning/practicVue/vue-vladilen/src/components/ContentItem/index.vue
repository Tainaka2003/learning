<template>
  <div class="contentItem_1">
    <div class="contentImg">
      <img src="https://i.ibb.co/Jy76hRB/givemoney.png" alt="givemoney" width="300px" height="200px">
    </div>
    <div class="contentText">
      <p class="paragraph">Неси свои деньги</p>
      <p class="paragraph">Год: 1992</p>
      <p class="paragraph">Жанр: боевик, триллер</p>
      <p class="description">Слоган: Денег много не бывает, но... они нужны!</p>
    </div>
  </div>
  <div class="contentItem_2">
    <div class="contentImg">
      <img src="https://i.ibb.co/4SpzrsP/Screenshot-2021-04-12-161216.png" alt="Screenshot-2021-04-12-161216" width="300px" height="200px">
    </div>
    <div class="contentText">
      <p class="paragraph">Восставший из ада</p>
      <p class="paragraph">Год: 1994</p>
      <p class="paragraph">Жанр: боевик, триллер</p>
      <p class="description">Слоган: Мы пришли миром. Или пока что?</p>
    </div>
  </div>
</template>

<script>
export default {
name: "contentItem"
}
</script>

<style lang="less">

.contentItem_1 {
  flex-direction: row !important;
}

.contentItem_2 {
  flex-direction: row-reverse !important;
}

.contentItem_1, .contentItem_2 {
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 800px;
  height: 200px;

  .contentImg {
    width: 300px;
    height: 200px;
  }

  .contentText {
    font-family: 'Balsamiq Sans', cursive;
    font-size: 18px;
    padding: 0 20px 0 20px;
    width: 500px;
    height: 200px;
  }
}

</style>

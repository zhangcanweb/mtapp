<template>
  <div>
    hello world
    <p>1234</p>
    <div>
       <img src="./asset/img/bannertemp.jpg" alt="">
    </div>
    <div class='footer'>
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  div {
    font-size: 1.1rem;
    p {
      color: blue;
    }
    img {
      width: 100%;
    }
    .footer {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      div {
        flex: 1;
        width: 50px;
        display: flex;
      }
      .item1 {
        background: url(./asset/img/sprites/homeIconActive.png) no-repeat;
        background-size: contain;
      }
      .item2 {
        background: url(./asset/img/sprites/myIconActive.png) no-repeat;
        background-size: contain;
      }
      .item3 {
        background: url(./asset/img/sprites/orderIconActive.png) no-repeat;
        background-size: contain;
      }
    }
  }
</style>


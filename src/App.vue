<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.main {
  width: 420px;
  max-width: 100%;
  height: 600px;
  margin: 50px auto;
  -webkit-box-shadow: 0px 0px 5px 3px #c9cdd0;
  box-shadow: 0px 0px 5px 3px #c9cdd0;
  padding: 25px 20px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.actions {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #c9cdd0;
  height: 40px;
  .wr-icon {
    .add,
    .edit,
    .delete,
    .save {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 25px;
      cursor: pointer;
      background: #139aeb;
      left: 50%;
      transform: translateX(-50%);
    }
    .edit {
      right: 50%;
      left: unset;
    }
    .delete {
      left: 52%;
      background: #be2123;
      transform: unset;
    }
  }
  img {
    width: 50%;
  }
}
.detail__widget,
.edit__widget {
  &-back {
    width: 58px;
    display: flex;
    color: #c9cdd0;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
  &-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    color: #139aeb;
    -webkit-box-shadow: 0px 0px 6px 1px #c9cdd0;
    box-shadow: 0px 0px 6px 1px #c9cdd0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    margin: 20px auto;
  }
  &-contactInfo {
    &-sections {
      margin-bottom: 15px;
      span {
        color: #139aeb;
        font-size: 0.8rem;
        display: block;
      }
      p {
        color: #c9cdd0;
        font-size: 1.3rem;
      }
    }
  }
}
</style>

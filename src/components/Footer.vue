<template>
  <footer>
    <div class="content">
      <div class="left">
        <p>community</p>
        <div class="rect">
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
        </div>
      </div>
      <div class="right">
        <p class="join-text">Join our growing community</p>
        <div class="text-wrap">
          <p>Sign up for news and updates about LOGO NFT</p>
          <p>0086-88888988888</p>
        </div>
        <div class="input-wrap">
          <input/>
          <button>Subscribe</button>
        </div>
        <p>I understand I can unsubscribe at any time. Privacy Policy.</p>
      </div>
    </div>
    <div class="line"></div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  flex-shrink: 0;
  width: 100%;
  height: 526px;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #0032B8;
  font-size: 16px;
  padding: 20px;

  .content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .left {
      font-weight: bold;
      font-size: 50px;

      .rect {
        display: flex;

        i {
          display: block;
          margin: 4px;
          width: 60px;
          height: 58px;
          border-radius: 4px;
          background: #bbfff6;
        }
      }
    }

    .right {

      .join-text {
        font-weight: bold;
        font-size: 48px;
      }


      .text-wrap {
        display: flex;

        p:last-child {
          margin-left: 40px;
        }
      }

      .input-wrap {
        display: flex;
        align-items: center;
        margin: 20px 0;

        input {
          width: 412px;
          height: 64px;
          border: none;
          border-radius: 15px;
          font-size: 40px;
          padding: 20px;
          color: #444;
        }

        button {
          width: 264px;
          height: 64px;
          border: none;
          border-radius: 15px;
          background: #000;
          font-size: 18px;
          margin-left: 18px;
          cursor: pointer;
          &:hover {
            background: #3b6df1;
          }
        }
      }
    }
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #fff;
    margin-top: 40px;
  }
}
</style>

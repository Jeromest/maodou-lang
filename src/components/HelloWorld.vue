<template>
  <div class="hello">
    <div class="translation-app">
      <div class="header-content">
        <img src="@/assets/logo.jpg" alt="" width="70px">
        <h1>潘语翻译</h1>
      </div>
    </div>
    <div class="content">
      <div class="div001">
        <div class="div0011">
          <div class="div00111">
            <span>输入</span>
            <button class="renhuabutton">😊 人话</button>
            <span class="jiaohuanspan"></span>
            <button class="jiaohuanbutton">交换</button>
          </div>
          <textarea placeholder="在这儿输入你想翻译的内容" class="textarea1"></textarea>
        </div>
        <div class="div0012">
          <div class="div00112">
            <span>输出</span>
            <button class="panhuabutton">😎 潘话</button>
            <span class="fuzhispan1"></span><span class="fuzhispan2"></span>
            <button class="fuzhibutton"><span>复制</span></button>
          </div>
          <textarea id="output" readonly class="textarea2"></textarea></div>
      </div>
      <!--      <el-input v-model="custom" clearable placeholder="自定义叫声，默认为喵"-->
      <!--      ><template slot="prepend">自定义叫声：</template></el-input-->
      <!--      >-->

      <!--      <el-input v-model="input" @input="h2m" clearable placeholder="这里输入人话">-->
      <!--        <template slot="prepend">人话：</template>-->
      <!--      </el-input>-->

      <!--      <el-input v-model="output" @input="m2h" clearable placeholder="这里输入喵语"-->
      <!--      ><template slot="prepend">喵语：</template></el-input-->
      <!--      >-->
      <!--      <el-button @click="copyText" type="primary">复制</el-button>-->
    </div>
  </div>
</template>

<script>
import Miao from "miao-lang";
// import Clipboard from "clipboard";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      input: "",
      output: "",
      custom: "喵",
    };
  },
  methods: {
    h2m() {
      let human_msg = this.input;
      let miao_msg = Miao.encode(human_msg, {calls: this.custom});
      this.output = miao_msg;
    },
    m2h() {
      let miao_msg = this.output;
      let msg2 = Miao.decode(miao_msg);
      if (msg2 != null && msg2 != "") {
        this.input = msg2;
      } else {
        this.input = "哪里来的外乡喵，听不懂思密达~";
      }
    },
    copyText() {
      navigator.clipboard.writeText(this.output).then(() => {
        this.$message.success("复制成功");
      }).catch(err => {
        console.log(err)
        this.$message.error("复制失败");
      });
    },
  },
};
</script>
<style scoped>
.fuzhispan2 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  user-select: none;
  font-size: .75rem;
  line-height: 1rem;
  opacity: 0;
  transition-duration: .3s;
}

.fuzhispan1 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  flex: 1 1 0%;
}

.jiaohuanspan {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  flex: 1 1 0%;
}

.fuzhibutton {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-image: none;
  cursor: default;
  position: relative;
  margin-left: .5rem;
  border-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  opacity: .5;
  transition-duration: .3s;
}

.jiaohuanbutton {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-image: none;
  cursor: pointer;
  margin-left: .5rem;
  border-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  transition-duration: .3s;
}

.div00112 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-border-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  display: flex;
  height: 3rem;
  align-items: center;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
}

.textarea2 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  --tw-border-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  height: 15rem;
  width: 100%;
  resize: none;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding: .5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.textarea1 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  --tw-border-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  height: 15rem;
  width: 100%;
  resize: none;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding: .5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.div00111 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-border-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  display: flex;
  height: 3rem;
  align-items: center;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
}

.div0012 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-bg-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  flex: 1 1 0%;
  overflow: hidden;
  border-bottom-right-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  border-bottom-left-radius: 0;
  border-top-right-radius: .375rem;
  border-top-width: 1px;
  border-left-width: 0;
}

.div0011 {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  --tw-bg-opacity: 1;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  position: relative;
  flex: 1 1 0%;
  overflow: hidden;
  border-top-left-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  border-top-right-radius: 0;
  border-bottom-left-radius: .375rem;
}

.div001 {
  margin: 40px;
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  line-height: inherit;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  display: flex;
  overflow: hidden;
  border-radius: .375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  flex-direction: row;
}

.panhuabutton {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-image: none;
  cursor: pointer;
  margin-left: .5rem;
  border-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  transition-duration: .3s;
}

.renhuabutton {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-image: none;
  cursor: pointer;
  margin-left: .5rem;
  border-radius: .375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  transition-duration: .3s;
}

.content {
  height: 550px;
  background-image: url('@/assets/background-image.png');
  background-position: center;
}

h3 {
  margin: 40px 0 0;
}

.translation-app {
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  padding: 10px;
}

header {
  padding: 10px;
}

.header-content {
  display: flex;
  align-items: center; /* 垂直居中 */
  height: 70px;
}

.header-content img {
  margin-right: 10px;
}
</style>

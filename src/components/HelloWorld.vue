<template>
  <div class="hello">
    <div class="translation-app">
        <div class="header-content">
          <img src="@/assets/logo.jpg" alt="" width="70px">
          <h1>潘语翻译</h1>
        </div>
    </div>
    <el-input v-model="custom" clearable placeholder="自定义叫声，默认为喵"
      ><template slot="prepend">自定义叫声：</template></el-input
    >

    <el-input v-model="input" @input="h2m" clearable placeholder="这里输入人话">
      <template slot="prepend">人话：</template>
    </el-input>

    <el-input v-model="output" @input="m2h" clearable placeholder="这里输入喵语"
      ><template slot="prepend">喵语：</template></el-input
    >
     <el-button @click="copyText" type="primary">复制</el-button>
    <footer>
      <p>潘语翻译</p>
      <p>注：本页面潘语翻译器用于日常交流或工作上的需要，如需更详细的潘潘翻译服务，请联系潘星国大使馆。</p>
      <p>© 2024 Made with by <a href="https://github.com/Jeromest">毛豆</a> |
        <a href="https://github.com/shilinhua">诺诺</a></p>
    </footer>
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
      let miao_msg = Miao.encode(human_msg, { calls: this.custom });
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
h3 {
  margin: 40px 0 0;
}
.translation-app {
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  padding: 20px;
}

header {
  padding: 10px;
}

.header-content {
  display: flex;
  align-items: center; /* 垂直居中 */
}

.header-content img {
  margin-right: 10px;
}
</style>

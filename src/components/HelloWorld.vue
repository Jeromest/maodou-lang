<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  </div>
</template>

<script>
import Miao from "miao-lang";
import Clipboard from "clipboard";
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
      let miao_msg = Miao.encode(human_msg.trim, { calls: this.custom });
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
      const clipboard = new Clipboard(".btn", {
        text: function () {
          return this.output; 
        },
      });
      clipboard.on("success", function () {
        this.$message.success("复制成功");
      });
      clipboard.on("error", function () {
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
</style>

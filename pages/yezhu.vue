<template>
    <div>
        <header>
            <header1></header1>
        </header>
        <div class="wrap">
            <h1>我是业主</h1>
            <p>买新房、买二手房，租房，福居网帮你搞定</p>
        </div>
        <div class="conent">
            <div class="conent-top">
                <span @click="click(1)" :class="index==1?'active':''">我要卖房</span>
                <span @click="click(2)" :class="index==2?'active':''">我要估价</span>
                <span @click="click(3)" :class="index==3?'active':''">我要出租</span>
            </div>
            <div class="form"  v-show="index==1||index==3">
                  <div class="form1">
                      <span style="display: inline-block;width: 100px">区域</span>
                      <input type="text" placeholder="请输入区域">
                  </div>
                  <div class="form2">
                      <span style="display: inline-block;width: 100px">小区</span>
                      <input type="text" placeholder="请输入小区">
                  </div>
                  <div class="form3">
                      <span style="display: inline-block;width: 100px">详细地址</span>
                      <input type="text" style="width:57px;text-align: right"><span>号楼</span>
                      <input type="text" style="width:57px;text-align: right"><span>单元</span>
                      <input type="text" style="width:57px;text-align: right"><span>门牌号</span>
                  </div>
                  <div class="form4" v-show="index==1">
                      <span style="display: inline-block;width: 100px">期望售价</span>
                      <input type="text" placeholder="请输入期望售价" style="width: 250px"><span>万元</span>
                  </div>
                <div class="form4" v-show="index==3">
                    <span style="display: inline-block;width: 100px">期望租金</span>
                    <input type="text" placeholder="请输入期望租金" style="width: 250px"><span>元</span>
                </div>
                  <div class="form5">
                      <span style="display: inline-block;width: 100px">姓名</span>
                      <input type="text" placeholder="请输入姓名">
                  </div>
                  <div class="form6">
                      <span style="display: inline-block;width: 100px">手机号</span>
                      <input type="text" placeholder="请输入手机号">
                  </div>
                <button>提交委托</button>
            </div>
            <div class="form-2" v-show="index==2">
                <div class="from">
                    <span style="display: inline-block;width: 100px">小区</span>
                    <input type="text" placeholder="请输入小区名称">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">户型</span>
                    <input type="text" style="width:116px;text-align: right"><span>室</span>
                    <input type="text" style="width:116px;text-align: right"><span>厅</span>
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">面积</span>
                    <input type="text" placeholder="请输入面积" style="width: 250px"><span>平米</span>
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">朝向</span>
                    <input type="text" placeholder="请输入朝向">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">楼层</span>
                    <input type="text" placeholder="请输入楼层">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">总楼层</span>
                    <input type="text" placeholder="请输入总楼层">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">业主姓名</span>
                    <input type="text" placeholder="请输入业主姓名">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">业主电话</span>
                    <input type="text" placeholder="请输入业主电话">
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">客服电话</span>
                    <span style="color: blue">400-898-1018</span>
                </div>
                <div class="from">
                    <span style="display: inline-block;width: 100px">备注</span>
                    <input type="text" placeholder="备注">
                </div>
                <button>立即估价</button>
            </div>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import header1 from '~/components/header1'
    import MyFooter from '~/components/Footer.vue'
    export default {
        name: "yezhu",
        components:{
            header1,
            MyFooter
        },
        data(){
            return{
                index:1
            }
        },
        methods:{
            click(a){
              this.index = a
            }
        }
    }
</script>

<style scoped lang="less">
.wrap{
    width: 1100px;
    margin: 0 auto;
    text-align: center;
    h1{
        font-size: 40px;
        font-weight: 500;
        color: #333;
    }
    p{
        color: #999;
        margin-top: 10px;
    }

}
    .conent{
        width: 1100px;
        margin: 60px auto;
        .conent-top{
            width: 1100px;
            margin: 0 auto;
            border-bottom: 1px solid #ccc;
            text-align: center;
            padding-bottom: 10px;
            span{
                border: 1px solid #ccc;
                padding: 10px 33px;
                cursor: pointer;
                border-right: 1px solid rgba(0,0,0,.1);
            }
            .active{
                background-color: #000;
                color: white;
            }
        }
        .form,.form-2{
            width: 400px;
            margin: 0 auto;
            input{
                outline: none;
                border: none;
                font-size: 100%;
            }
            .form1,.form2,.form3,.form4,.form5,.form6,.from{
                border: 1px solid #ccc;
                margin-top: 20px;
                height: 50px;
                line-height: 50px;
                padding-left: 5px;
            }
            button{
                color: white;
                background-color: #c30d23;
                width: 360px;
                height: 60px;
                margin: 30px 20px;
                border: none;
                font-size: 16px;
                cursor: pointer;
            }
        }
    }
</style>
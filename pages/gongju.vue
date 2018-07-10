<template>
    <div>
        <header>
            <header1></header1>
        </header>
        <div class="wrap">
            <h1>购房工具</h1>
            <p>复杂的房贷税费计算，购房工具帮你解决</p>
        </div>
        <div class="conent">
            <div class="conent-top">
                <span @click="click(1)" :class="index==1?'active':''">房贷计算器</span>
                <span @click="click(2)" :class="index==2?'active':''">二手房税费计算器</span>
                <span @click="click(3)" :class="index==3?'active':''">新房税费计算器</span>
            </div>
            <div class="tab3" v-show="index == 3">
                <div class="xinfang">
                    <span style="display: inline-block;width: 100px">房屋面积</span>
                    <input type="text" placeholder="100" style="width: 338px"><span>平米</span>
                </div>
                <div class="xinfang">
                    <span style="display: inline-block;width: 100px">房屋单价</span>
                    <input type="text" placeholder="100" style="width: 318px"><span>元/平米</span>
                </div>
                <div class="xinfang">
                    <span style="display: inline-block;width: 100px">房屋面积</span>
                   <select name="number" style="width: 370px;outline: none;border: none">
                       <option value="1">首套</option>
                       <option value="2">两套</option>
                       <option value="3">三套以上</option>
                   </select>
                </div>
                <div class="result">


                </div>


            </div>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import header1 from '~/components/header1'
    import MyFooter from '~/components/Footer.vue'
    export default {
        name: "gongju",
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
        .tab3{
            width: 480px;
            input{
                outline: none;
                border: none;
                font-size: 100%;
            }
            .xinfang{
                border: 1px solid #ccc;
                margin-top: 20px;
                height: 50px;
                line-height: 50px;
                padding-left: 5px;
            }
        }
    }

</style>
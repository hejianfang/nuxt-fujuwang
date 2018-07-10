<template>
    <div>
        <header>
            <header2></header2>
        </header>
       <div class="warp">
           <a href=""><img src="../../assets/img/logo.png"></a>
           <a href="">在售</a>
           <a href="">小区</a>
           <a href="">地图找房</a>
           <a href="">计算器</a>
           <a href="">去估价</a>
       </div>
        <div class="hand-warp">
            <div class="hand-conent">
                <p>福居网>二手房</p>
                <div class="inpt">
                    <input type="text" placeholder="搜索"><span>搜索</span>
                </div>
                <my-box>
                    <template>
                        <div>
                            <div class="form">
                                <span class="span">区域</span>
                                <div class="form1">
                                    <el-checkbox>不限</el-checkbox>
                                    <el-checkbox>金桥开发区</el-checkbox>
                                    <el-checkbox>如意开发区</el-checkbox>
                                    <el-checkbox>玉泉区</el-checkbox>
                                    <el-checkbox>回民区</el-checkbox>
                                    <el-checkbox>赛罕区</el-checkbox>
                                    <el-checkbox>新城区</el-checkbox>
                                </div>
                            </div>
                            <div class="form ">
                                <span class="span">价格</span>
                                <el-checkbox-group class="form1" v-model="formData.total_price">
                                    <el-checkbox v-for="item in price" :key="item.id" :label="item">
                                        {{item.title}}</el-checkbox>
                                    <span><input type="text"  v-model="formData.minPrice"></span>
                                    <span> - </span>
                                    <span><input type="text"  v-model="formData.maxPrice"></span>
                                    <span>万</span>
                                    <span><button @click=" handleCustom">确定</button></span>
                                </el-checkbox-group>
                            </div>
                            <div class="form ">
                                <span class="span">户型</span>
                                <el-checkbox-group class="form1" v-model="formData.bedroom">
                                    <el-checkbox v-for="item in house" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </div>
                    </template>
                    <template slot="middle">
                        <div class="form ">
                            <span class="span">类型</span>
                            <el-checkbox-group class="form1" v-model="formData.type">
                                <el-checkbox v-for="item in leixing" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">装修</span>
                            <el-checkbox-group class="form1" v-model="formData.decoration">
                                <el-checkbox v-for="item in zhuanxiu" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">朝向</span>
                            <el-checkbox-group class="form1" v-model="formData.direction">
                                <el-checkbox v-for="item in chaoxiang" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">面积</span>
                            <el-checkbox-group class="form1" v-model="formData.area">
                                <el-checkbox v-for="item in mianji" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                                <span><input type="text"></span>
                                <span>-</span>
                                <span><input type="text"></span>
                                <span>平</span>
                                <span><button>确定</button></span>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">楼龄</span>
                            <el-checkbox-group class="form1" v-model="formData.built_area">
                                <el-checkbox v-for="item in louling" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">楼层</span>
                            <el-checkbox-group class="form1" v-model="formData.floor_type">
                                <el-checkbox v-for="item in louceng" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">电梯</span>
                            <el-checkbox-group class="form1" v-model="formData.dianti">
                                <el-checkbox v-for="item in ti" :key="item.id" :label="item">{{item.title}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="form ">
                            <span class="span">其他</span>
                            <div class="form1">
                                <span><input type="text" placeholder="在结果中搜索"></span>
                                <span><button>确定</button></span>
                            </div>
                        </div>
                    </template>
                    <template slot="foot">
                        <div class="form-bottom">
                            <span>筛选分类</span>
                            <span v-for="item in selectedData" class="select-item" @click="handleReduce(item)" style="cursor: pointer">
                                {{item.title}}
                            </span>
                            <span @click="handleClearAll"><img src="../../assets/img/u2831.png"> 清除全部</span>
                        </div>
                    </template>
                </my-box>
            </div>
        </div>
         <div class="hand-coniter">
             <div class="span">
                 <label v-for="item in orderData" class="order-label"  :class="{active: params.order == item.id}">
                     {{item.title}}
                     <input type="radio"  name="order" :value="item.id" @change="getData" v-model="params.order">
                 </label>
             </div>
             <div class="shauixuan">
                     <span class="span">筛选</span>
                     <el-checkbox-group class="form1" v-model="formData.label">
                         <el-checkbox v-for="item in xuan" :key="item.id" :label="item" @change="getData">{{item.title}}</el-checkbox>
                     </el-checkbox-group>
             </div>
             <div>
                 <h2>共找到 {{houseCount}} 个  <span> 呼和浩特</span><span> 二手房源</span> </h2>
             </div>
             <div class="ul-li" v-for="item in houseArr">
                 <ul>
                     <li>
                         <nuxt-link :to="{name:'secondhand-detil',params:{id:item.id}}"><img :src="'http://www.fooju.cn'+item.pic"></nuxt-link>
                         <div class="li-middle">
                             <h5>{{item.title}}</h5>
                             <p>{{item.village}}|{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫|{{item.direction}}</p>
                             <p>{{item.floor}}/{{item.floor_totle}}层|{{item.decoration}}</p>
                             <p>{{item.age}}年建|{{item.type}}</p>
                             <p>0人关注|共0次待看|6天前发布</p>
                             <span v-if="item.lable" style="background:#5f1985;color:#FFFFFF;" v-for="label in item.lable">
                            {{label.name}}
                        </span>
                         </div>
                         <div class="li-right">
                             <p>{{item.total_price}}<span>万</span></p>
                             <p>单价 {{item.unit_price}}/平米</p>
                             <span>关注</span>
                         </div>
                     </li>
                 </ul>
             </div>
         </div>
        <rightBox></rightBox>
     <div class="fenye">
         <el-pagination
                 background
                 layout="prev, pager, next"
                 @current-change="handleCurrentChange"
                 :current-page="currentPage"
                 :total="houseCount">
         </el-pagination>
     </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import api from '~/myApi'
    import rightBox from '~/components/rightbox'
    import header2 from '~/components/header2'
    import MyFooter from '~/components/Footer.vue'
    import myBox from '~/components/my-box'
    export default {
        name: "secondhead",
        components: {
            rightBox,
            header2,
            MyFooter,
            myBox
        },
        data(){
            return{
                formData:{
                    r_id:[],
                    total_price: [],
                    bedroom:[],
                    type:[],
                    decoration:[],
                    direction:[],
                    area:[],
                    built_area:[],
                    floor_type:[],
                    dianti:[],
                    minPrice:'',
                    maxPrice:'',
                    order: 1,
                    label:[],
                },
                price:[
                    {
                        title: "不限",
                        id: '0'
                    },
                    {
                        title: "30万以下",
                        id:  '0-30'
                    },
                    {
                        title: "30-40万",
                        id: '30-40'
                    },
                    {
                        title: "40-50万",
                        id: '40-50'
                    },
                    {
                        title: "50万以上",
                        id:'50-99999'
                    }
                ],
                orderData: [
                    {
                        title: "最新",
                        id: 1
                    },
                    {
                        title: "房屋总价",
                        id: 2
                    },
                    {
                        title: "房屋单价",
                        id: 6
                    },
                    {
                        title: "房屋面积",
                        id: 4
                    }
                ],
                house:[
                    {title: "一室", id: 0},
                    {title: "两室", id: 1},
                    {title: "三室", id: 2},
                    {title: "四室", id: 3},
                    {title: "五室", id: 4}
                ],
                leixing:[{title: '平层', id: '平层'},
                    {title: '复式', id: '复式'},
                    {title: '跃层', id: '跃层'}],
                zhuanxiu:[
                    {title: '毛坯', id: '毛坯'},
                    {title: '豪装', id: '豪装'},
                    {title: '精装', id: '精装'},
                    {title: '简装', id: '简装'},
                    {title: '中装', id: '中装'}
                ],
                chaoxiang:[ {title: '东', id:'东'},
                    {title: '西', id: '西'},
                    {title: '南', id: '南'},
                    {title: '北', id: '北'},
                    {title: '南北', id: '南北'},
                    {title: '西南', id: '西南'},
                    {title: '东北', id: '东北'},
                    {title: '西北', id: '西北'},
                    {title: '东西', id: '东西'}],
                mianji:[
                    {title: '不限', id: 0},
                    {title: '50平以下', id: 1},
                    {title: '50-70平', id: 2},
                    {title: '70-90平', id: 3},
                    {title: '90以上', id: 4}
                ],
                louling:[ {id: 0, title: '不限'},
                    {id: 1, title: '5年以内'},
                    {id: 2, title: '10年以内'},
                    {id: 3, title: '15年以内'},
                    {id: 4, title: '15年以上'}],
                louceng:[
                    {id: 0, title: "不限"},
                    {id: 1, title: "底层"},
                    {id: 2, title: "低楼层"},
                    {id: 3, title: "中层"},
                    {id: 4, title: "中高层"},
                ],
               ti:[
                   {id: 0, title: '是'}, {id: 1, title: '否'}
               ],
                xuan:[
                    {id: "两年内", title: "两年内"},
                    {id: "满两年", title: "满两年"},
                    {id: "满五年", title: "满五年"},
                    {id: "随时看房", title: "随时看房"},
                ],
                houseArr: [],
                houseCount:0,
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1
                },
                currentPage:1
            }
        },
        computed:{
            selectedData() {
                let formData = this.formData;
                let allData = [];
                for(let key in formData){
                    if(formData[key] instanceof Array){
                        formData[key].map(item => {
                            item._parentName = key;
                        })
                        allData.push(...formData[key]);
                    }
                }
                return allData;
            }
        },
        methods:{
            handleCurrentChange(val){
                this.currentPage = val;
                this.params.page_num = this.currentPage
            },
            handleCustom(){
                let min = this.formData.minPrice;
                let max = this.formData.maxPrice;
                let newshuju = {
                    title:min+'-'+ max+ "万",
                    id:min+'-'+ max
                }
                this.formData.total_price.push(newshuju)
            },
            handleReduce(item) {
                let index = this.formData[item._parentName].findIndex(val => val == item.id);
                this.formData[item._parentName].splice(index,1)
            },
            handleClearAll() {
                let formData = this.formData;
                for(let arr in formData){
                    if(formData[arr] instanceof Array){
                        formData[arr].splice(0);
                    }
                }
            },
            getData() {
                let formData = this.formData;
                let params = {...this.params};
                for (let key in formData) {
                    if (formData[key] instanceof Array&&formData[key].length>0) {
                        params[key] = formData[key].map(item => item.id)
                    }
                }

                // if(this.userid){
                //     params.userid = this.userid
                // }
                // const loading = this.$loading({
                //     lock: true,
                //     text: '数据加载中...',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(0, 0, 0, 0.7)'
                // });
                axios.get(api.paramToUrl(api.used_lists, params)).then(res => {
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    this.id = res.data.data.id
                    // loading.close()
                }).catch(err => {
                    // loading.close()
                })
            },
        },
        watch:{
            selectedData() {
                this.getData();
            },
            currentPage(){
                this.getData();
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped lang="less">
    .warp{
        width: 1100px;
        margin: 0 auto;
        height: 80px;
        padding-top: 20px;
        a{
            margin-right: 50px;
            vertical-align: middle;
        }
    }
    .warp a:first-child{
        display: inline-block;
    }
    .warp a:hover{
        color: #c30d23;
    }
    .hand-warp{
        width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin-bottom: 80px;
    }
    .hand-conent{
        width: 1100px;
        margin: 0 auto;
        p{
            color: #aaa;
            font-size: 14px;
            margin-top: 20px;
        }
        .inpt{
            margin-top: 40px;
            margin-bottom: 40px;
            input{
                width: 760px;
                height: 60px;
                background-color: #f4f4f4;
                outline: none;
                border: none;
                padding-left: 10px;
            }
            span{
                display: inline-block;
                width: 160px;
                height: 60px;
                background-color:#c30d23 ;
                text-align: center;
                line-height: 60px;
                color: white;
                cursor: pointer;
            }
        }
        .form{
            margin-bottom: 15px;
            .span{
               vertical-align: top;
            }
            .form1{
               display: inline-block;
                margin-left: 40px;
                width: 50%;
                text-align: left;
                span{
                    color: #999;
                    margin-right: 4px;
                    input{
                        width: 56px;
                        height: 16px;
                        color: #999;
                        font-size: 14px;
                        border: 1px solid #ccc;
                        padding: 1px;
                    }
                    button{
                        width: 55px;
                        height: 25px;
                        color: white;
                        background-color: #c30d23;
                        outline: none;
                        border: none;
                        margin-left: 10px;
                    }
                }
            }
        }
        .form-bottom{
            margin-bottom: 40px;
            span{
                margin-right: 20px;
            }:last-child{
            img {
                vertical-align: middle;
            }
            cursor: pointer;
            font-size: 14px;
                         }
        }
        .form-bottomm{
            text-align: center;
            color: #ccc;
            cursor: pointer;
            margin-bottom: 40px;
        }
    }
    .hand-coniter{
        width: 1100px;
        margin: 0 auto;
        .span{
            height: 43px;
             label.active {
                background: #c30d23;
                color: #fff;
            }
            label:hover{
                background: #c30d23;
                color: #fff;
            }
             label {
                float: left;
                font-size: 18px;
                cursor: pointer;
                padding: 10px 20px;
                margin-right: 20px;
                background: #fff;
                color: #c30d23;
                border-radius: 20px;
                border: 1px solid #c30d23;
                input {
                    display: none;
                }
            }
        }

        .shauixuan{
            margin-top: 20px;
            .form1{
                display: inline-block;
                margin-left: 40px;
                text-align: left;
            }
        }
        .ul-li{
            margin: 20px 0;
            height: 217px;
            img{
                float: left;
                width: 285px;
                height: 217px;
            }
            .li-middle{
                margin-left: 20px;
                float: left;
                h5{
                    display: inline-block;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                p{
                     margin-top: 10px;
                    color: #777;
                }
                span{
                    display: inline-block;
                    margin-top: 3px;
                    margin-right: 5px;
                    border: 1px solid #5f1985;
                    background-color: #5f1985;
                    color: white;
                    border-radius: 5px;
                    padding: 5px;
                }
            }
            .li-right{
                float: right;
                text-align: right;
                p{
                    color: #777;
                    margin: 20px 0;
                }
                p+span{
                    display: inline-block;
                    border: 1px solid #c30d23;
                    color:#c30d23 ;
                    border-radius: 5px;
                    padding: 10px 30px;
                    margin-top: 20px;
                    cursor: pointer;
                }
            }
            /*.li-right span:last-child{*/
                /*border: 1px solid #c30d23;*/
                /*border-radius: 5px;*/
                /*padding: 10px 20px;*/
            /*}*/
            .li-right p:first-child{
                font-size: 40px;
                color: #c30d23;
                span{
                    font-size: 16px;
                }
            }
        }
    }
    .fenye{
        text-align: right;
    }
</style>
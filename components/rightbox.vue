<template>
    <div class="right">
        <ul>
            <li>
                <i class="iconfont icon-crmricheng"></i>
                <p>日程</p>
             <div class="lefttext">
                 我的日程
             </div>
            </li>
            <li>
                <i class="iconfont icon-guanzhu"></i>
                <p>关注</p>
                <div class="lefttext">
                    我的关注
                </div>
            </li>
            <li>
                <i class="iconfont icon-fangzi"></i>
                <p>卖房</p>
                <div class="lefttext">
                    在线卖房
                </div>
            </li>
            <li>
                <i class="iconfont icon-gongju"></i>
                <p>工具</p>
                <div class="lefttext">
                    房贷计算器
                </div>
            </li>
            <li>
                <i class="iconfont icon-app"></i>
                <p>APP</p>
                <div class="lefttextpic">
                    <img src="../assets/img/app.png">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "rightbox"
    }
</script>

<style scoped lang="less">
    .right{
        background-color: white;
        position: fixed;
        top: 15%;
        right: 0;
        z-index: 998;
        color: #333;
        ul li{
            margin-bottom: 40px;
            padding: 5px;
            cursor: pointer;
            position: relative;
            .lefttext {
                width: 80px;
                text-align: center;
                position: absolute;
                border-radius: 5px;
                top: 50%;
                right: 50px;
                transform: translateY(-50%);
                background-color: #5f1985;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: none;
               padding: 10px 20px;
            }
            .lefttext::after{
            content: '';
            position: absolute;
             right: -16px;
             top: 50%;
             transform: translateY(-50%);
             border: 8px solid transparent;
             border-left: 8px solid #5f1985;
                         }
            .lefttextpic{
                position: absolute;
                border-radius: 5px;
                top: 50%;
                right: 40px;
                transform: translateY(-50%);
                display: none;
                img{
                    width:150px;
                    height: 150px;
                }
            }
            p{
                font-size: 14px;
            }
        }:last-child{
        margin-bottom: 0;
                 }
        ul li:hover{
            background-color: #5f1985;
            color: white;
        }
        ul li:hover .lefttext{
            display: block;
        }
        ul li:hover .lefttextpic{
            display: block;
        }
    }

</style>
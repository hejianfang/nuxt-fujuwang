<template>
    <div class="switch-container" @click="handlePrev">
        <div class="switch-btn prev-btn fll"></div>
        <div class="switch-box-wrap fll">
            <ul class="switch-box clearfix" :style="{transform: 'translate'+translate}">
                <li v-for="(item,index) in 8" class="switch-item "  @click.stop="handleSwitch(index)">
                    <img src="../assets/img/er2.png">
                </li>
                <li class="active" :style="{left: currentLeft+'px'}"></li>
            </ul>
        </div>
        <div class="switch-btn next-btn flr" @click.stop="handleNext"></div>
    </div>
</template>

<script>

    export default {
        name: "swicthpic",
        data() {
            return {
                translate: "(0,0)",
                left: 0,
                setindex:0,
            }
        },
        methods:{
            handleSwitch(index){
                this.setindex = index
                if(index<=4){
                    index ++;
                    this.translate = `(${-(this.setindex)*130}px,0)`
                }
                else if(index == 9){
                    this.translate = `(${-(0)*130}px,0)`
                }
                else{
                    index ++
                }


                // if(index>this.maxIndex){
                //     this.translate = `(${-this.maxIndex*130}px,0)`
                //     this.setindex = index
                // }
                // else {
                //
                // }
            },
            handleNext(){
                if(this.setindex<3){
                    this.setindex ++;
                    this.translate = `(${-(this.setindex)*130}px,0)`
                }
                else if(this.setindex == 6){
                    this.setindex =0
                    this.translate = `(${-(0)*130}px,0)`
                }
                else{
                    this.setindex ++
                }

            },
            handlePrev(){
                if(this.setindex<=4&&this.setindex>0){
                    this.setindex --;
                    this.translate = `(${-(this.setindex)*130}px,0)`
                }
                else if(this.setindex == 0){
                    this.setindex =0
                    this.translate = `(${-(0)*130}px,0)`
                }
                else{
                    this.setindex --;
                }
            }

        },
        computed:{
            currentLeft() {
                return this.setindex*130;
            },
        }
    }
</script>

<style scoped lang="less">
    .switch-container {
        width: 592px;
        .fll{
            float: left;
        }
        .flr{
            float: right;
        }
        .switch-btn {
            margin-top: 10px;
            width: 30px;
            height: 88px;
            background-color: #fff;
            background-repeat: no-repeat;
            background-position: center center;
            cursor: pointer;
            border: 1px solid #5f1985;
        }
        .prev-btn {
            background-image: url(/assets/img/left_btn2.png);
            margin-top: 10px;
            margin-right: 10px;
            &:hover {
                background-color: #5f1985;
                background-image: url(/assets/img/left_btn.png);
            }
        }
        .next-btn {
            background-image: url(/assets/img/right_btn2.png);
            margin-top: 10px;
            &:hover {
                background-color: #5f1985;
                background-image: url(/assets/img/right_btn.png);
            }
        }
        .switch-box-wrap{
            position: relative;
            width: 512px;
            height: 102px;
            overflow: hidden;
            .switch-box {
                transition: transform ease-in-out .5s;
                width: 3000px;
            }
            .active {
                position: absolute;
                z-index: 998;
                top: 10px;
                box-sizing: border-box;
                width: 120px;
                height: 90px;
                border: 2px solid #5f1985;
                &::after {
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 54px;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-bottom: 10px solid #5f1985;
                }
            }
        }
        .switch-item {
            position: relative;
            float: left;
            margin-top: 10px;
            margin-right: 10px;
            user-select: none;
            width: 120px;
            img {
                display: block;
                width: 100%;
            }
        }
    }

</style>
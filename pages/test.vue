<template>
   <div>

       <swicthpic></swicthpic>
   </div>
</template>

<script>

     import rightBox from '~/components/rightbox'
     import header2 from '~/components/header2'
     import myBox from '~/components/my-box'
     import fangdajing from '~/components/fangdajing'
     import swicthpic from '~/components/swicthpic'
    export default {
        name: "banner",
         components: {
             fangdajing,
             swicthpic
         },

    }
</script>

<style scoped lang="less">

</style>

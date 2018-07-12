<template>
   <div>

       <mapTab></mapTab>
   </div>
</template>

<script>

     import rightBox from '~/components/rightbox'
     import header2 from '~/components/header2'
     import myBox from '~/components/my-box'
     import fangdajing from '~/components/fangdajing'
     import swicthpic from '~/components/swicthpic'
     import mapTab from '~/components/mapTab'
    export default {
        name: "banner",
         components: {
             fangdajing,
             swicthpic,
             mapTab
         },

    }
</script>

<style scoped lang="less">

</style>

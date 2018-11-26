<template>
    <div v-loading="loading" class="loading"></div>
</template>

<script>
export default {
    data(){
        return {
            loading:true
        }
    }
}
</script>

<style lang="less" scoped>
.loading{
    height: 500px;
}
</style>



<template>
    <div>
        <button @click="click($event)">点击</button>
    </div>
</template>

<script>
export default {
    methods:{
        click(e){
            this.$emit('test',e)
        }
    }
}
</script>


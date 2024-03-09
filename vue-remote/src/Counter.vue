<template>
    <button @click="increment">Clicked {{ count  }} times</button>
</template>

<script>
    export default{
        data(){
            return{
                count: 0,
            };
        },
        methods:{
            increment(){
                this.count++;
            },
        },
    };
</script>
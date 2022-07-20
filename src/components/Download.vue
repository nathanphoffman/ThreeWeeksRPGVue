<script setup lang="ts">
    let props = defineProps<{ title?: string, url: string }>();
</script>

<template>
    <li><a :href="`/files/${props.url}`">{{title}}</a>
        
    </li> 
    <p>
        <slot></slot>
    </p>
</template>

<style scoped>
li {
    margin-top: 10px;
    list-style: none;
}

p {
    border-bottom: 1px solid #eee;
}
</style>

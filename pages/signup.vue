<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="message">
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
const message = ref("")
function onSubmit() {
    console.log(message.value)
}
</script>
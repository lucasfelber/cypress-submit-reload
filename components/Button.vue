<template>
    <button class="button" :class="buttonVariants">
        <slot/>
    </button>
</template>

<script setup lang="ts">

const buttonVariants = computed(() => {
    if(props.variants === undefined || props.variants.length === 0)
        return "";
    return props.variants.map(v => "button-" + v).reduce((a, b) => a + " " + b)
})

const props = defineProps<{
    variants?: Variants[]
    loading?: boolean
}>()

type Variants = "default" | "skip"

</script>

<style scoped>
.button {
    font-family: inherit;
    padding: 10px;
    border-radius: 12px;
}

.button-default {
    background-color: var(--dark-green);
    font-size: 16px;
    font-weight: 600;
    color: var(--font-white);
    border: 2px solid transparent;
}

.button-default:hover {
    filter: brightness(75%);
    border: 2px solid var(--font-white);
}

.button-skip {
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    color: var(--font-white);
    border: 2px solid transparent;
}

.button-skip:hover {
    filter: brightness(75%);
    border: 2px solid var(--font-white);
}
</style>
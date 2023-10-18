<template>
    <div class="text-input-wrapper">
        <label :for="props.id" class="text-input-label" :class="{'error': errorMessage}">
            {{ props.label }}
            <span v-if="errorMessage" class="text-input-label-appendage error">
                <span class="text-input-label-appendage-seperator">-</span>
                {{ errorMessage }}
            </span>
            <span v-else class="text-input-label-appendage star">*</span>
        </label>
        <div class="text-input-field-wrapper" :class="{'error': errorMessage}">
            <Field class="text-input-field" v-bind="$attrs" :id="props.id" :name="props.name"/>
        </div>
    </div>
</template>

<script setup>
    import { Field, useField } from 'vee-validate'

    defineOptions({
        inheritAttrs: false
    })

    const props = defineProps({
        name: String,
        label: String,
        id: {
            type: String,
            required: true
        },
    })

    const { errorMessage } = useField(props.name);
</script>

<style scoped lang="scss">
.text-input-wrapper {
    display: flex;
    flex-direction: column;
}
.text-input-label {
    font-size: 12px;
    font-weight: 1000;
    margin-bottom: 8px;
    color: var(--font-light-grey);
}

.text-input-label.error {
    color: var(--font-red);
}

.text-input-label-appendage.star {
    color: var(--font-red);
}

.text-input-label-appendage.error {
    font-weight: 400;
    font-style: italic;
}

.text-input-label-appendage-seperator {
    padding-left: 4px;
    padding-right: 4px;
}

.text-input-field-wrapper {
    display: flex;
    background-color: var(--black);
    padding: 10px;
    border-radius: 12px;
}

.text-input-field-wrapper.error {
    border-style: solid;
    border-width: 2px;
    padding: 8px;
    border-color: var(--font-red);
}

.text-input-field {
    background-color: transparent;
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--font-light-grey);
}
</style>
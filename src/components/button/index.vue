<template>
    <button :type="type" :disabled="disabled" @click="onClick">
        <Icon v-if="icon" :name="icon" />
        <span><slot></slot></span>
    </button>
</template>

<script setup lang="ts">
import { ref, useSlots, useAttrs, onMounted, watch, toRefs } from 'vue';
const emit = defineEmits(['change', 'click']);

interface Props {
    icon?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    icon: undefined,
    type: 'button',
    disabled: false,
});

const slots = useSlots();
const attrs = useAttrs();

// const slots = reactive({});
// console.log(props, attrs);

onMounted(() => {
    //..
});

const { icon, disabled } = toRefs(props);

function onClick(evt: Event) {
    if (!disabled.value) {
        emit('click', icon.value);
    } else {
        evt.preventDefault();
    }
}
</script>

<style scoped lang="less">
button {
    pointer-events: all;
    display: inline-flex;
    flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: normal;
    vertical-align: middle;
    outline: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    box-shadow: inset 0 0 0 1px var(--color-border);
    width: auto;
    height: 10rem;
    min-width: 2.5rem;
    padding: 0.5rem;
    border-radius: var(--border-radius);
    transition: background-color 0.1s ease-out, color 0.1s ease-out,
        box-shadow 0.1s ease-out;
    &:hover {
        box-shadow: inset 0 0 0 1px var(--color-border-hover);
        background-color: var(--color-input-background-hover);
    }
    &:active {
        box-shadow: inset 0 0 0 1px var(--color-active);
    }
    &[disabled] {
        cursor: default;
        pointer-events: none;
        * {
            filter: var(--filter-disabled);
        }
    }
    & > * {
        pointer-events: none;
        transition: filter 0.2s ease-out;
    }
    & > :first-child:not(last-of-type) {
        margin-bottom: 2rem;
    }
    svg {
        align-self: center;
        width: 1.5em;
        height: 1.5em;
    }
    span {
        font-size: 1em;
        display: block;
        text-overflow: ellipsis;
        font-weight: 700;
    }
}
</style>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = withDefaults(
    defineProps<{
        color?: string;
        size?: number | string;
    }>(),
    {
        size: 0,
        color: 'currentColor'
    }
);

const { size } = toRefs(props);

const lines = [1,2,3,4,5];
const i1 = Number(size.value) * .1;
const i2 = Number(size.value) * .2;
const i3 = Number(size.value) * .3;
const i4 = Number(size.value) * .4;
const i5 = Number(size.value) * .5;
const i0 = (i4-i1) * .5 + i1;
</script>
<template>
    <svg :width="size" :height="Number(size)*.5" fill="none" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line
            v-for="(item, index) in lines"
            key={index}
            :x1="i3 + index * i1"
            :y1="i1"
            :x2="i3 + index * i1"
            :y2="i4"
            >
            <animate
                attributeName="y1"
                :values="i1+'; '+i0+'; '+i1"
                dur="1s"
                :begin="(5 % (index + 1)) * 0.2+'s'"
                repeatCount="indefinite"
            />
            <animate
                attributeName="y2"
                :values="i4+'; '+i0+'; '+i4"
                dur="1s"
                :begin="(5 % (index + 1)) * 0.2+'s'"
                repeatCount="indefinite"
            />
        </line>
    </svg>
</template>

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//   <circle cx="12" cy="12" r="10"></circle>
//   <line x1="12" y1="8" x2="12" y2="16"></line>
//   <line x1="8" y1="12" x2="16" y2="12"></line>
// </svg>
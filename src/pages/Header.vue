<script setup lang="ts">
import { ref, onMounted, inject, watch, reactive, computed, defineComponent } from "vue";
import Logo from "@/components/logo/index.vue";

const scroll = inject("scroll");
const bh = inject("bh");
const bg = document.styleSheets[0].cssRules[2] as any;
const sign = ref<HTMLElement>(null!);
const sets = ref<HTMLElement>(null!);

onMounted(() => {
  // 初始化主题模式
  const dark: HTMLInputElement = document.getElementById("dark") as HTMLInputElement;
  const light: HTMLInputElement = document.getElementById("light") as HTMLInputElement;

  try {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    dark.checked = prefersDarkTheme;
    light.checked = !prefersDarkTheme;
    document.body.setAttribute("data-theme", prefersDarkTheme ? "dark" : "light");
  } catch (err) {
    light.checked = true;
  }
});

const setTheme = (evt: Event) => {
  const theme = evt.target as HTMLInputElement;
  if (theme.checked) document.body.setAttribute("data-theme", theme.value);
};

watch(scroll, (val: number, old) => {
  const a: number = Math.min(1, val / (bh as any).value);
  const i: number = Math.max(0, 1.8 - val / (bh as any).value);
  bg.style.opacity = a;
  sign.value.style.opacity = i + "";
  sets.value.style.opacity = i + "";
});
</script>

<template>
  <header>
    <a href="https://www.yunkc.cn/" aria-label="logo">
      <logo />
      <h3 ref="sign">云课程</h3>
    </a>
    <input type="radio" value="dark" name="theme" id="dark" @change="setTheme" class="implicit" />
    <input type="radio" value="light" name="theme" id="light" @change="setTheme" class="implicit" />
    <div class="radio-set" ref="sets">
      <label for="dark" aria-label="Dark theme">
        <icon name="night" />
      </label>
      <label for="light" aria-label="Light theme">
        <icon name="day" />
      </label>
    </div>
  </header>
</template>

<style lang="less">
header {
  justify-content: space-between;
  min-height: var(--page-header-height);
  padding: 0 var(--page-padding);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: background 0.15s;
  z-index: 5;
  &,
  & > a[aria-label] {
    align-items: center;
    display: flex;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: var(--color-page-header-background);
    z-index: -1;
    opacity: 0;
  }
  a[aria-label="logo"] {
    text-decoration: none;
    letter-spacing: 0.5em;
    img,
    svg {
      margin-right: 1rem;
    }
  }
  .radio-set {
    display: inline-flex;
    margin-left: 1rem;
    a,
    a *,
    label {
      color: var(--color-text-light);
    }
    label + label {
      margin-left: -1px;
    }
    a,
    label {
      align-items: center;
      box-shadow: inset 0 0 0 1px var(--color-border);
      cursor: pointer;
      display: flex;
      font-size: 0.625em;
      padding: 0 1em;
      pointer-events: all;
      text-decoration: none;
      transition: background-color 0.15s, color 0.15s;
      user-select: none;
    }
    a:first-of-type,
    label:first-of-type {
      border-bottom-left-radius: 0.325rem;
      border-top-left-radius: 0.325rem;
    }
    a:last-of-type,
    label:last-of-type {
      border-bottom-right-radius: 0.325rem;
      border-top-right-radius: 0.325rem;
    }
    svg {
      width: 1.2em;
      height: 2.8em;
      &:first-child {
        margin-right: 0.5em;
      }
      &:last-child {
        margin-left: 0.5em;
      }
      &:only-child {
        margin: 0;
      }
    }
  }
  input:first-of-type:checked ~ .radio-set label:first-of-type,
  input:nth-of-type(2):checked ~ .radio-set label:nth-of-type(2) {
    background: var(--color-background-light);
    color: var(--color-tab-active-text);
    position: relative;
    z-index: 1;
  }
}
</style>

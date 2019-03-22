<template>
  <div class="m-Input">
    <input
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :minlength="minLength"
      :value="value"
      :disabled="disabled"
      ref="input"
      @input="$emit('input', $event.target.value)"
      @blur="blur"
      :style="{
        width: width,
        height: height,
        fontSize: fontSize
      }"
      class="input-ele"
    >
    <span class="tips" :class="{ tipsSkip: tip === '' }">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: 'm-Input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '50px'
    },
    fontSize: {
      type: String,
      default: '18px'
    },
    maxLength: {
      type: Number
    },
    minLength: {
      type: Number
    },
    tip: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    blur () {
      this.$emit('blur')
    }
  }
}
</script>

<style lang="scss" scoped>
.m-Input {
  .input-ele {
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding-left: 20px;
    font-family: 'Microsoft YaHei';
  }

  .input-ele:focus {
    border: 1px solid #549df8;
  }

  .tips {
    color: #888;
    font-size: 14px;
    line-height: 26px;
  }

  input::-webkit-input-placeholder {
    color: #aaa;
  }
}

.tipsSkip {
  display: block;
  width: 1px;
  height: 26px;
}
</style>

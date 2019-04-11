<template>
  <div class="direction-match-page">
    <h1 class="title">搜索条件</h1>
    <Form
      :model="formItem"
      :label-width="80"
      class="search-form"
    >
      <FormItem label="星座">
        <Select
          v-model="formItem.zodiac"
        >
          <Option
            v-for="item of zodiacList"
            :key="item.key"
            :value="item.key"
          >
          {{ item.value }}
          </Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
          <Row>
              <Col span="11">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
              </Col>
              <Col span="2" style="text-align: center">-</Col>
              <Col span="11">
                <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
              </Col>
          </Row>
      </FormItem>
      <FormItem label="Radio">
          <RadioGroup v-model="formItem.radio">
              <Radio label="male">Male</Radio>
              <Radio label="female">Female</Radio>
          </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
          <CheckboxGroup v-model="formItem.checkbox">
              <Checkbox label="Eat"></Checkbox>
              <Checkbox label="Sleep"></Checkbox>
              <Checkbox label="Run"></Checkbox>
              <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
          <i-switch v-model="formItem.switch" size="large">
              <span slot="open">On</span>
              <span slot="close">Off</span>
          </i-switch>
      </FormItem>
      <FormItem label="Slider">
          <Slider v-model="formItem.slider" range></Slider>
      </FormItem>
      <FormItem label="Text">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
          <Button type="primary">Submit</Button>
          <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'direction-match-page',
  data () {
    return {
      formItem: {
        zodiac: ''
      },
      zodiacList: [
        {
          key: 'baiyang',
          value: '白羊座'
        },
        {
          key: 'jinniu',
          value: '金牛座'
        },
        {
          key: 'shuangzi',
          value: '双子座'
        },
        {
          key: 'juxie',
          value: '巨蟹座'
        },
        {
          key: 'shizi',
          value: '狮子座'
        },
        {
          key: 'chunv',
          value: '处女座'
        },
        {
          key: 'tiancheng',
          value: '天秤座'
        },
        {
          key: 'sheshou',
          value: '射手座'
        },
        {
          key: 'mojie',
          value: '摩羯座'
        },
        {
          key: 'shuiping',
          value: '水瓶座'
        },
        {
          key: 'shuangyu',
          value: '双鱼座'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.direction-match-page {
  h1.title {
    text-align: center;
    font-size: 24px;
    line-height: 48px;
    font-weight: 300;
  }
  .search-form {
    width: 80%;
    margin: 0 auto;
  }
}
</style>

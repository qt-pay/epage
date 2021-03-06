import Schema from '../../../../modules/schema'
import { getRuleValidator } from '../../../helper'

export default class CheckboxSchema extends Schema {
  constructor (props) {
    super()
    this.type = 'array<string>'
    this.title = '多选框'
    this.placeholder = '请选择'
    this.rules = [{ required: false, message: '必填', type: 'array', trigger: 'change' }]
    this.option = {
      type: 'static',
      direction: 'horizontal',
      url: '',
      adapter: '',
      dynamicData: [],
      data: [{ key: 'A', value: 'A' }]
    }
    this.$init(props)
    const rule = {
      trigger: 'change',
      validator: getRuleValidator(this.rules[0], this.type)
    }
    this.updateRequiredRule(rule)
  }
}

// 静态配置，同类widget公有
Object.assign(CheckboxSchema, {
  title: '多选框',
  widget: 'checkbox',
  icon: 'android-checkbox-outline',
  type: ['array<string>', 'array<number>'],
  validators: [],
  logic: {
    value: ['<>', '><'],
    // event: ['change']
    event: []
  }
})

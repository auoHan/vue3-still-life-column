import mitt from 'mitt'

export type ValidateFunc = () => boolean
export const emitter = mitt<{
  formItemCreated: ValidateFunc
}>()


const backgroundColor = '#220000'
const foregroundColor = '#ff3300'
const cursorColor = foregroundColor

const colors = [
  backgroundColor,
  '#1b2b34',
  '#343d46',
  '#4f5b66',
  '#65737e',
  '#a7adba',
  '#c0c5ce',
  '#cdd3de',
  '#d8dee9',
  '#ec5f67',
  '#f99157',
  '#fac863',
  '#99c794',
  '#5fb3b3',
  '#6699cc',
  '#c594c5',
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
      console.log('H Y P E R T E R M I N A T O R')
  }
  next(action)
}


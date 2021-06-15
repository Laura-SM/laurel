const _Environments = {
  REACT_APP_PORT:'http://192.168.0.57:2021',
}

function getEnvironment() {
  return _Environments
}

export const env = getEnvironment()

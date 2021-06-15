const _Environments = {
  REACT_APP_PORT:'YOUR_URL',
}

function getEnvironment() {
  return _Environments
}

export const env = getEnvironment()
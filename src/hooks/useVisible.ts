import { useState } from 'react'

type returnd = [boolean, (visible?: boolean) => void]

const useVisible = (initVisible = false): returnd => {
  const [visible, setVisible] = useState(initVisible)
  function onVisible(value?: boolean) {
    const nextValue = value === undefined ? !visible : value
    setVisible(nextValue)
  }
  return [visible, onVisible]
}

export default useVisible

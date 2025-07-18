import '@testing-library/jest-dom';



// костыль чтобы убрать варнинг
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg, ...args) => {
    if (
      typeof msg === 'string' &&
      msg.includes('React Router Future Flag Warning')
    ) {
      return
    }
    console.warn(msg, ...args)
  })
})
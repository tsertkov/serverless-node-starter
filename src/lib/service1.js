const setTimeoutPromise = delay => new Promise(resolve => setTimeout(resolve, delay))

export default async function service1 () {
  await setTimeoutPromise(4)
  if (Math.random() < 0.5) throw new Error('Random error in service1')
  return Math.random() < 0.5
}

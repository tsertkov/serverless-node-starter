import service1 from './service1'

async function service1executor () {
  try {
    return await service1()
  } catch (e) {
    if (e instanceof Error) {
      return service1executor()
    }
    throw (e)
  }
}

describe('service1', () => {
  it('returns random boolean', async () => {
    const service1response = await service1executor()
    expect(typeof service1response).toBe('boolean')
    console.log(`it returned ${service1response}`)
  })
})

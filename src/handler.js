import 'source-map-support/register'
import config from '../config'
import service1 from './lib/service1'

export async function fn1 (event, context, callback) {
  try {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Result: ${await service1()}`,
        config,
        event
      })
    })
  } catch (e) {
    callback(e)
  }
}

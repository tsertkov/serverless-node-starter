const isProduction = process.env.STAGE === 'prod'

export default {
  myvar: isProduction ? 'prod-value' : 'non-prod-value'
}

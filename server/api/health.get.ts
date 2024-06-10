export default eventHandler(async (event) => {
  try {
    return "OK"
  } catch (error: any) {
    throw createError(error)
  }
})

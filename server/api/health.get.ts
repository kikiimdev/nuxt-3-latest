export default eventHandler(async (event) => {
  try {
    return {
      message: "OK",
    }
  } catch (error: any) {
    throw createError(error)
  }
})

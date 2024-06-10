export default eventHandler(async (event) => {
  try {
    return {
      status: "healthy",
    }
  } catch (error: any) {
    throw createError(error)
  }
})

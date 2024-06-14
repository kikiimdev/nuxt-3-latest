export default eventHandler(async (event) => {
  try {
    const formData = await readFormData(event)

    const url =
      "http://103.170.89.96:5000/webapi/entry.cgi?_sid=Koh_UwJUmdr5ULPj-TDHWxIfGkiMDJpV4Y9xjRcEU3cv4dPwwWKbcB_ogtn0llz1BtdXSiS_GoBendVMRfNkts"

    const body = {
      api: "SYNO.FileStation.Upload",
      version: "2",
      method: "upload",
      path: "/homes/nas_diskominfotik/FTP/angga",
      create_parents: "true",
      overwrite: "true",
    }

    for (const [key, value] of Object.entries(body) as any) {
      formData.append(key, value)
    }

    console.log(formData)

    return $fetch(url, {
      body: formData,
      method: "POST",
    })
    return {
      message: "ok",
    }
  } catch (error: any) {
    throw createError(error)
  }
})

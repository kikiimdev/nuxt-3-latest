<script setup lang="ts">
  const handleUpload = async (event: any) => {
    const file = event?.target?.files[0]

    const url =
      "http://103.170.89.96:5000/webapi/entry.cgi?_sid=Koh_UwJUmdr5ULPj-TDHWxIfGkiMDJpV4Y9xjRcEU3cv4dPwwWKbcB_ogtn0llz1BtdXSiS_GoBendVMRfNkts"

    const body = {
      api: "SYNO.FileStation.Upload",
      version: "2",
      method: "upload",
      path: "/homes/nas_diskominfotik/FTP/angga",
      create_parents: "true",
      overwrite: "true",
      file,
    }

    const formData = new FormData()
    for (const [key, value] of Object.entries(body)) {
      formData.append(key, value)
    }

    const result = await $fetch(url, {
      method: "post",
      body: formData,
    })

    console.log({ result })
  }
</script>

<template>
  <div>
    <form>
      <input name="upload" type="file" @input="handleUpload" />
    </form>
  </div>
</template>

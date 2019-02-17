<template>
  <div class="upload">
    <label for="upload" class="upload-add"></label>
    <input multiple type="file" id="upload" @change="readyUpload($event.target)" style="width: 0; height: 0;">
  </div>
</template>

<script>
import axios from 'axios'
import {ls} from '@/utils'
export default {
  name: 'gjmaTextarea',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    readyUpload (target) {
      let files = target.files
      let len = files.length
      for (let i = 0; i < len; i++) {
        let formData = new FormData()
        formData.append('file', files[i])
        this.upload(formData)
      }
    },
    upload (data) {
      axios({
        method: 'POST',
        url: 'http://test.ucarlinkin.com/webapi/file/upload',
        data: data,
        headers: {
          'X-Auth-Token': ls.get('userToken'),
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.$emit('upload', res.data.data[0])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  display: inline-block;
  &-add {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: url(../../assets/images/check-succ.png) no-repeat;
    background-size: contain;
    margin-right: .24rem;
  }
}
</style>

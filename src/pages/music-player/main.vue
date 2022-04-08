<script setup lang="ts">
import Button from '@/components/global/Button.vue'
import Progress from '@/components/music-player/Progress.vue'
import useGetInfoByID from '@/hooks/useGetInfoByID'
import {
  AngleLeft,
  ListUl,
  EllipsisH,
  ArrowAltCircleLeft,
  ArrowAltCircleRight,
  PauseCircle,
  PlayCircle,
} from '@vicons/fa'
import { Icon } from '@vicons/utils'
import { onBeforeMount, onMounted, reactive, Ref, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

let globalCss = {
  backgroundColor: '#f2f3f7',
}
const ids = [
  '1477405484',
  '421934564',
  '1414849990',
  '1880894132',
  '512733081',
  '1363476321',
  '1407242933',
  '509720124',
]

interface ISong {
  name: string
  artist: string
  playurl: string
  picurl: string
}

let targetSongID = ref(ids[0])
let targetStatus = ref(false)
const targetSong: ISong = reactive({
  name: '',
  artist: '',
  playurl: '',
  picurl: '',
})
onBeforeMount(async () => {
  ;(async function init() {
    const res = await useGetInfoByID(targetSongID.value)
    songAssign(res!)
  })()
})

const songAssign = (song: ISong) => {
  targetSong.name = song.name
  targetSong.artist = song.artist
  targetSong.playurl = song.playurl
  targetSong.picurl = song.picurl
}

const prev = () => {
  if (ids.indexOf(targetSongID.value) === 0) {
    targetSongID.value = ids[ids.length - 1]
  } else {
    targetSongID.value = ids[ids.indexOf(targetSongID.value) - 1]
  }
  targetStatus.value = false
}

const next = () => {
  if (ids.indexOf(targetSongID.value) === ids.length - 1) {
    targetSongID.value = ids[0]
  } else {
    targetSongID.value = ids[ids.indexOf(targetSongID.value) + 1]
  }
  targetStatus.value = false
}

watch(targetSongID, async (newValue) => {
  const res = await useGetInfoByID(newValue)
  songAssign(res!)
})

const canplay = () => {}

const ended = () => {
  next()
}

const myAduio: Ref<HTMLAudioElement> = ref(null as unknown as HTMLAudioElement)

const pause = () => {
  targetStatus.value = false
}

const play = () => {
  targetStatus.value = true
}

watch(targetStatus, async (newValue) => {
  if (newValue) {
    myAduio.value.play()
  } else {
    myAduio.value.pause()
  }
})

const router = useRouter()
const back = () => {
  router.push({
    path: '/',
  })
}
</script>

<template>
  <div class="main">
    <div class="soft-phone">
      <div class="header">
        <Button
          width="58px"
          height="58px"
          backgroundColor="#f1f3f6"
          @click="back"
        >
          <Icon color="#acb8e9" size="32">
            <AngleLeft />
          </Icon>
        </Button>
        <Button width="58px" height="58px" backgroundColor="#f1f3f6">
          <Icon color="#acb8e9" size="32"> <EllipsisH /> </Icon>
        </Button>
      </div>
      <div class="rotary">
        <img v-if="targetSong.picurl !== ''" :src="targetSong.picurl" alt="" />
      </div>
      <div style="font-size: 20px">{{ targetSong.name }}</div>
      <div
        style="font-size: 14px; font-weight: 500; color: #a2adbe; margin: 10px"
      >
        {{ targetSong.artist }}
      </div>

      <Progress></Progress>
      <div class="tool">
        <Button
          width="58px"
          height="58px"
          backgroundColor="#f1f3f6"
          @click="prev"
        >
          <Icon color="#acb8e9" size="32">
            <ArrowAltCircleLeft />
          </Icon>
        </Button>
        <Button width="58px" height="58px" backgroundColor="#f1f3f6">
          <Icon v-if="targetStatus" color="#acb8e9" size="32" @click="pause">
            <PauseCircle />
          </Icon>
          <Icon v-else color="#acb8e9" size="32" @click="play">
            <PlayCircle />
          </Icon>
        </Button>
        <Button
          width="58px"
          height="58px"
          backgroundColor="#f1f3f6"
          @click="next"
        >
          <Icon color="#acb8e9" size="32">
            <ArrowAltCircleRight />
          </Icon>
        </Button>
      </div>
    </div>
  </div>

  <audio
    :src="targetSong.playurl"
    ref="myAduio"
    @canplay="canplay"
    @ended="ended"
    class="myAduio"
  ></audio>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: auto;
  background-color: v-bind('globalCss.backgroundColor');
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.soft-phone {
  width: 100%;
  height: 750px;
  border-radius: 60px;
  background: #f1f3f6;
  box-shadow: 15px 15px 30px #dee0e2, -15px -15px 30px #ffffff;
}
.header,
.tool {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 45px 30px;
}
.rotary {
  width: 220px;
  height: 220px;
  margin: 0 auto 45px;
  border-radius: 130px;
  background: #f1f3f6;
  box-shadow: 21px 21px 43px #dee0e2, -21px -21px 43px #ffffff;

  img {
    width: 100%;
    height: 100%;
    border-radius: 130px;
    transform: scale(1);
  }
}
.tool {
  padding: 45px;
}

.myAduio {
  opacity: 0;
}

@media screen and (min-width: 415px) {
  .main {
    width: 414px;
  }
}
</style>

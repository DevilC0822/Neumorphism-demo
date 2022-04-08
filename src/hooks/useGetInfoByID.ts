import axios from 'axios'

export default async function useGetInfoByID(id: string) {
  interface ISong {
    name: string
    artist: string
    playurl: string
    picurl: string
  }

  let result: ISong = {
    name: '',
    artist: '',
    playurl: '',
    picurl: '',
  }
  const { data: res } = await axios({
    url: 'http://175.24.198.84:3000/song/detail',
    method: 'get',
    withCredentials: true,
    params: {
      ids: id,
    },
  })
  let song = res.songs[0]
  let artists: Array<string> = []
  let artistsFull
  if (song.ar >= 3) {
    for (const key in song.ar) {
      if (parseInt(key) === 3) return
      artists.push(song.ar[key].name)
    }
    artistsFull = artists.join(' / ') + '...'
  } else {
    song.ar.forEach((k: any) => {
      artists.push(k.name)
    })
    artistsFull = artists.join(' / ')
  }
  result.name = song.al.name
  result.artist = artistsFull
  result.picurl = song.al.picUrl

  const { data: res_geturl } = await axios({
    url: 'http://175.24.198.84:3000/song/url',
    method: 'get',
    withCredentials: true,
    params: {
      id: id,
    },
  })
  result.playurl = res_geturl.data[0].url

  return result
}

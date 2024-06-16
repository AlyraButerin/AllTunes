'use client'

import { useState } from 'react'

export interface IMetadata {
  artist?: string
  album?: string
  genre?: string[]
  title?: string
  year?: number
  ISRC?: string
}


function UploadForm() {
  const [file, setFile] = useState<File>()
  const [metadata, setMetadata] = useState<IMetadata>({})
  const [first, setfirst] = useState("test")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
        
        const _data = await res.json()
        console.log(_data.metadata)
        console.log({
          artist: _data.metadata.common.artist,
        })
        // console.log(res)
        // console.log(await res.json())
        setMetadata({
          artist: _data.metadata.common.artist,
          album: _data.metadata.common.album,
          genre: _data.metadata.common.genre,
          title: _data.metadata.common.title,
          year: _data.metadata.common.year,
          ISRC: _data.metadata.common.ISRC ,
        })
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <main className='flex flex-col'>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type="submit" value="Upload" />
      </form>

      <div className='mt-4 flex flex-col'>
        <div className='py-1 px-2'>Artist: <span className='px-2'>{metadata.artist}</span></div>
        <div className='py-1 px-2'>Album: <span className='px-2'>{metadata.album}</span></div>
        <div className='py-1 px-2'>Genre: <span className='px-2'>{metadata.genre}</span></div>
        <div className='py-1 px-2'>Title: <span className='px-2'>{metadata.title}</span></div>
        <div className='py-1 px-2'>Year: <span className='px-2'>{metadata.year}</span></div>
        <div className='py-1 px-2'>ISRC: <span className='px-2'>{metadata.ISRC}</span></div>
      </div>
    </main>
  )
}

export default UploadForm
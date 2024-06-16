import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { parseBuffer, orderTags } from 'music-metadata';


export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  let format = {}
  let common = {}
  let ISRC = undefined

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
//   const path = `/tmp/${file.name}`
  const path = `./public/music/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  try {
    const metadata = await parseBuffer(buffer);
    const _tagTypes = metadata.format.tagTypes
    
    if (_tagTypes.length > 0) {
      const orderedTags_0 = orderTags(metadata.native[_tagTypes[0]]);
      
      console.log(orderedTags_0)
      // console.log(metadata)
      format = metadata.format
      common = metadata.common
      // 
      // https://id3.org/id3v2.3.0
      // The 'ISRC' frame should contain the International Standard 
      // Recording Code (ISRC) (12 characters).
      // 
      // ISRC = undefined

      try {
        ISRC = orderedTags_0.hasAttribute('TIT2')
      } catch (e) {
        ISRC = undefined
      }
      
      console.log("const ISRC : ", ISRC)
      console.log("format : ", format)
      console.log("common : ", common)
    } 
  } catch (error) {
      console.error(error);
  }


  return NextResponse.json({ 
    success: true, 

    metadata: {
      format: format,
      common: common,
      ISRC: ISRC
    } 
  })
}
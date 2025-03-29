'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Page() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImage() {
      try {
        setLoading(true)
        // 使用我们的API路由而不是直接请求外部API
        const response = await fetch('/api/proxy-image')
        const data = await response.json()

        if (data.imageUrl) {
          setImageUrl(data.imageUrl)
        } else {
          setError(data.error || 'Failed to fetch image')
        }
      } catch (error) {
        setError('Error fetching image')
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {imageUrl && !loading && (
        <Image
          src={imageUrl}
          width={720}
          height={480}
          alt='Random'
          unoptimized
        />
      )}
    </div>
  )
}

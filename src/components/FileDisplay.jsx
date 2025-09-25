import { useState } from 'react'
import { FileText, Image, Video, File } from 'lucide-react'

const FileDisplay = ({ file }) => {
  const [imageError, setImageError] = useState(false)
  const [videoError, setVideoError] = useState(false)

  if (!file) return null

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return Image
    if (type.startsWith('video/')) return Video
    if (type === 'application/pdf') return FileText
    return File
  }

  const renderContent = () => {
    // Handle images
    if (file.type.startsWith('image/')) {
      if (imageError) {
        return (
          <div className="text-center text-gray-500">
            <Image className="w-16 h-16 mx-auto mb-4" />
            <p>Unable to display image</p>
            <p className="text-sm">{file.name}</p>
          </div>
        )
      }
      
      return (
        <img
          src={file.url}
          alt={file.name}
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      )
    }

    // Handle videos
    if (file.type.startsWith('video/')) {
      if (videoError) {
        return (
          <div className="text-center text-gray-500">
            <Video className="w-16 h-16 mx-auto mb-4" />
            <p>Unable to display video</p>
            <p className="text-sm">{file.name}</p>
          </div>
        )
      }

      return (
        <video
          src={file.url}
          controls
          autoPlay
          muted
          className="w-full h-full object-contain"
          onError={() => setVideoError(true)}
        >
          Your browser does not support the video tag.
        </video>
      )
    }

    // Handle PDFs
    if (file.type === 'application/pdf') {
      return (
        <iframe
          src={file.url}
          className="w-full h-full border-0"
          title={file.name}
        />
      )
    }

    // Handle other document types or unsupported files
    const IconComponent = getFileIcon(file.type)
    return (
      <div className="text-center text-gray-500">
        <IconComponent className="w-16 h-16 mx-auto mb-4" />
        <p className="text-lg font-medium">{file.name}</p>
        <p className="text-sm">File type: {file.type}</p>
        <p className="text-xs mt-2">
          This file type cannot be displayed directly in the browser
        </p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderContent()}
    </div>
  )
}

export default FileDisplay

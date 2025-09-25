import { useState, useRef } from 'react'
import { useFiles } from '../contexts/FileContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload, X, File, Image, Video, FileText, Link, Trash2 } from 'lucide-react'

const UploadPage = () => {
  const { files, addFile, removeFile } = useFiles()
  const [dragActive, setDragActive] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (fileList) => {
    Array.from(fileList).forEach(file => {
      // Check if file type is supported
      const supportedTypes = [
        'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
        'video/mp4', 'video/webm', 'video/ogg',
        'application/pdf'
      ]
      
      if (supportedTypes.includes(file.type)) {
        addFile(file)
      } else {
        alert(`File type ${file.type} is not supported. Please upload images, videos, or PDF files.`)
      }
    })
  }

  const handleFileInput = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const handleLinkSubmit = (e) => {
    e.preventDefault()
    if (linkUrl.trim()) {
      // Create a mock file object for the link
      const linkFile = {
        id: Date.now() + Math.random(),
        name: linkUrl.split('/').pop() || 'Linked File',
        type: 'link',
        url: linkUrl,
        uploadedAt: new Date().toISOString()
      }
      
      // Add to files (we'll need to modify the context to handle this)
      // For now, we'll show an alert
      alert('Link functionality will be implemented in a future version')
      setLinkUrl('')
    }
  }

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return Image
    if (type.startsWith('video/')) return Video
    if (type === 'application/pdf') return FileText
    if (type === 'link') return Link
    return File
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Upload Files</h1>
        
        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add Content to Presentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Drag and Drop Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Drag and drop files here
              </h3>
              <p className="text-gray-500 mb-4">
                Supports: Images (JPG, PNG, GIF), Videos (MP4, WebM), PDFs
              </p>
              <Button 
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
              >
                Choose Files
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*,.pdf"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>

            {/* Link Input */}
            <div className="border-t pt-6">
              <h4 className="text-md font-medium text-gray-900 mb-3">
                Or add a link to a file
              </h4>
              <form onSubmit={handleLinkSubmit} className="flex gap-2">
                <Input
                  type="url"
                  placeholder="https://example.com/file.pdf"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={!linkUrl.trim()}>
                  <Link className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* File List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Uploaded Files ({files.length})</span>
              {files.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (confirm('Are you sure you want to remove all files?')) {
                      files.forEach(file => removeFile(file.id))
                    }
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {files.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <File className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No files uploaded yet</p>
                <p className="text-sm">Upload some files to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {files.map((file, index) => {
                  const IconComponent = getFileIcon(file.type)
                  return (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-8 h-8 text-gray-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">{file.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Type: {file.type}</span>
                            <span>Uploaded: {formatDate(file.uploadedAt)}</span>
                            <span>Position: #{index + 1}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (confirm(`Remove "${file.name}" from the presentation?`)) {
                            removeFile(file.id)
                          }
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UploadPage

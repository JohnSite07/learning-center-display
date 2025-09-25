import { createContext, useContext, useState, useEffect } from 'react'

const FileContext = createContext()

export const useFiles = () => {
  const context = useContext(FileContext)
  if (!context) {
    throw new Error('useFiles must be used within a FileProvider')
  }
  return context
}

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([])
  const [currentFileIndex, setCurrentFileIndex] = useState(0)

  // Load files from localStorage on mount
  useEffect(() => {
    const savedFiles = localStorage.getItem('learningCenterFiles')
    if (savedFiles) {
      try {
        const parsedFiles = JSON.parse(savedFiles)
        setFiles(parsedFiles)
      } catch (error) {
        console.error('Error loading files from localStorage:', error)
      }
    }
  }, [])

  // Save files to localStorage whenever files change
  useEffect(() => {
    localStorage.setItem('learningCenterFiles', JSON.stringify(files))
  }, [files])

  const addFile = (file) => {
    const newFile = {
      id: Date.now() + Math.random(),
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
      uploadedAt: new Date().toISOString()
    }
    setFiles(prev => [...prev, newFile])
    return newFile
  }

  const removeFile = (fileId) => {
    setFiles(prev => {
      const updatedFiles = prev.filter(file => file.id !== fileId)
      // Adjust current index if necessary
      if (currentFileIndex >= updatedFiles.length && updatedFiles.length > 0) {
        setCurrentFileIndex(updatedFiles.length - 1)
      } else if (updatedFiles.length === 0) {
        setCurrentFileIndex(0)
      }
      return updatedFiles
    })
  }

  const getCurrentFile = () => {
    return files.length > 0 ? files[currentFileIndex] : null
  }

  const nextFile = () => {
    if (files.length > 0) {
      setCurrentFileIndex(prev => (prev + 1) % files.length)
    }
  }

  const previousFile = () => {
    if (files.length > 0) {
      setCurrentFileIndex(prev => prev === 0 ? files.length - 1 : prev - 1)
    }
  }

  const value = {
    files,
    currentFileIndex,
    setCurrentFileIndex,
    addFile,
    removeFile,
    getCurrentFile,
    nextFile,
    previousFile
  }

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  )
}

import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Monitor, Upload, Settings } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/presentation', label: 'Presentation', icon: Monitor },
    { path: '/upload', label: 'Upload', icon: Upload },
    { path: '/settings', label: 'Settings', icon: Settings }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Learning Center Display
        </h1>
        <div className="flex space-x-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path}>
              <Button
                variant={location.pathname === path ? 'default' : 'outline'}
                className="flex items-center space-x-2"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

'use client'

import { useState, useEffect } from 'react'
import { Save, RefreshCw } from 'lucide-react'

interface SettingsPanelProps {
  onRefresh: () => void
}

export default function SettingsPanel({ onRefresh }: SettingsPanelProps) {
  const [settings, setSettings] = useState({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
    apiToken: '••••••••••••••••',
    lastSync: new Date().toLocaleString()
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = async () => {
    setIsLoading(true)
    try {
      // Simulate refresh
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSettings(prev => ({
        ...prev,
        lastSync: new Date().toLocaleString()
      }))
      onRefresh()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">System Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Sanity Configuration</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project ID</label>
                <input
                  type="text"
                  value={settings.projectId}
                  readOnly
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dataset</label>
                <input
                  type="text"
                  value={settings.dataset}
                  readOnly
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Token</label>
                <input
                  type="password"
                  value={settings.apiToken}
                  readOnly
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-3">System Status</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Connection Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Connected
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Sync</span>
                <span className="text-sm text-gray-900">{settings.lastSync}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Data Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
          
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4 mr-2" />
            Export Data
          </button>
          
          <button className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Cache
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-yellow-800 mb-2">Important Notes</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Make sure your Sanity API token has read/write permissions</li>
          <li>• Product enquiries and contact messages are automatically created from website forms</li>
          <li>• Changes are saved automatically to your Sanity CMS</li>
          <li>• Always backup your data before making bulk changes</li>
        </ul>
      </div>
    </div>
  )
}

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface Props {
  title: React.ReactNode
  children?: React.ReactNode
}

export const BlurCard: React.FC<Props> = ({ title, children }) => {
  return (
    <Card className="bg-secondary/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-sm">
          {title}
        </CardTitle>
      </CardHeader>
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  )
}

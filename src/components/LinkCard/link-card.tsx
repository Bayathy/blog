import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface Props {
  title: React.ReactNode
  description?: React.ReactNode
  href: string
}

export const LinkCard: React.FC<Props> = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <Card className="bg-secondary/50 uppercase text-blue-600 backdrop-blur-xl duration-200 ease-in hover:bg-secondary/70 dark:text-blue-400">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
          <CardTitle className="text-sm tracking-wider">
            {title}
          </CardTitle>
        </CardHeader>
        {description && (
          <CardContent>
            {description}
          </CardContent>
        )}
      </Card>
    </Link>
  )
}

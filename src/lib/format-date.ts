export function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0)
    formattedDate = `${yearsAgo}年前`

  else if (monthsAgo > 0)
    formattedDate = `${monthsAgo}ヶ月前`

  else if (daysAgo > 0)
    formattedDate = `${daysAgo}日前`

  else
    formattedDate = '今日'

  const fullDate = targetDate.toLocaleString('jp', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}

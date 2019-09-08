export function getWeekAndDay(dueDate: Date) {
  const oneDay = 1000 * 60 * 60 * 24

  const startDate = new Date(dueDate)
  startDate.setDate(startDate.getDate() - 7 * 40)

  const days = Math.round(Math.abs((startDate.getTime() - new Date().getTime()) / oneDay))
  const weeks = Math.floor(days / 7)
  const finalDays = days - weeks * 7
  return {
    weeks: weeks + 1,
    days: finalDays
  }
}

export function getDaysUntilDueDate(dueDate: Date) {
  const today = new Date()
  if (today.getMonth() == 11 && today.getDate() > 25) {
    dueDate.setFullYear(dueDate.getFullYear() + 1)
  }
  const oneDay = 1000 * 60 * 60 * 24
  return Math.ceil((dueDate.getTime() - today.getTime()) / oneDay)
}

export function getPercentage(dueDate: Date) {
  const remainingDays = getDaysUntilDueDate(dueDate)
  const totalDays = 280
  const percentage = (remainingDays * 100) / totalDays
  return 100 - Math.floor(percentage)
}

export function getTrimester(dueDate: Date) {
  const { weeks, days } = getWeekAndDay(dueDate)

  if (weeks < 13 || (weeks === 13 && days <= 7)) {
    return 1
  } else if (weeks < 27 || (weeks === 27 && days <= 7)) {
    return 2
  } else {
    return 3
  }
}

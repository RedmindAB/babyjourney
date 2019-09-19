const oneDay = 1000 * 60 * 60 * 24

export function getWeekAndDay(dueDate: Date) {
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
  return Math.ceil((dueDate.getTime() - today.getTime()) / oneDay)
}

export function getDaysPassed(dueDate: Date) {
  const daysLeft = getDaysUntilDueDate(dueDate)
  return 280 - daysLeft
}

export function getCalenderMonth(dueDate: Date) {
  const today = new Date()

  const twoWeeksIn = new Date(dueDate)
  twoWeeksIn.setDate(twoWeeksIn.getDate() - 7 * 38)
  var timeDiff = Math.abs(today.getTime() - twoWeeksIn.getTime())
  const calenderMonths = Math.round(timeDiff / (2e3 * 3600 * 365.25))
  console.log(calenderMonths)
  return calenderMonths
}

export function getPregnancyMonths(dueDate: Date) {
  const today = new Date()
  const startDate = new Date(dueDate)
  startDate.setDate(startDate.getDate() - 7 * 42)

  const diffDays = Math.round(Math.abs((startDate.getTime() - today.getTime()) / oneDay))
  return Math.floor(diffDays / 28)
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

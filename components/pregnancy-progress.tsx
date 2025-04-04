"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BabyIcon } from "@/components/pregnancy-icons"

interface PregnancyProgressProps {
  currentWeek: number
  totalWeeks?: number
  className?: string
}

export function PregnancyProgress({ currentWeek, totalWeeks = 40, className = "" }: PregnancyProgressProps) {
  const progress = (currentWeek / totalWeeks) * 100
  const trimester = currentWeek <= 13 ? "1st" : currentWeek <= 26 ? "2nd" : "3rd"

  // Trimester markers
  const markers = [
    { week: 13, label: "1st" },
    { week: 26, label: "2nd" },
    { week: 40, label: "3rd" },
  ]

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <BabyIcon className="mr-2 text-primary" size={20} />
          Pregnancy Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold text-primary">{currentWeek}</span>
              <span className="text-sm text-muted-foreground ml-1">weeks</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium">{trimester} Trimester</span>
              <div className="text-sm text-muted-foreground">{totalWeeks - currentWeek} weeks to go</div>
            </div>
          </div>

          <div className="pregnancy-progress-container">
            <div className="pregnancy-progress-bar" style={{ width: `${progress}%` }} />
            {markers.map((marker) => (
              <div
                key={marker.week}
                className="pregnancy-progress-marker"
                style={{ left: `${(marker.week / totalWeeks) * 100}%` }}
                title={`${marker.label} Trimester`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 text-center text-xs">
            <div>
              <div className="font-medium">1st Trimester</div>
              <div className="text-muted-foreground">Weeks 1-13</div>
            </div>
            <div>
              <div className="font-medium">2nd Trimester</div>
              <div className="text-muted-foreground">Weeks 14-26</div>
            </div>
            <div>
              <div className="font-medium">3rd Trimester</div>
              <div className="text-muted-foreground">Weeks 27-40</div>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-medium">Baby is now the size of a {getBabySize(currentWeek)}</div>
            <div className="text-muted-foreground mt-1">{getBabyDevelopment(currentWeek)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function getBabySize(week: number): string {
  const sizes = [
    "a poppy seed", // week 1
    "a poppy seed", // week 2
    "a poppy seed", // week 3
    "a poppy seed", // week 4
    "an apple seed", // week 5
    "a pea", // week 6
    "a blueberry", // week 7
    "a raspberry", // week 8
    "a cherry", // week 9
    "a strawberry", // week 10
    "a lime", // week 11
    "a plum", // week 12
    "a peach", // week 13
    "a lemon", // week 14
    "an apple", // week 15
    "an avocado", // week 16
    "a pear", // week 17
    "a bell pepper", // week 18
    "a mango", // week 19
    "a banana", // week 20
    "a carrot", // week 21
    "a papaya", // week 22
    "a grapefruit", // week 23
    "an ear of corn", // week 24
    "a cauliflower", // week 25
    "a lettuce", // week 26
    "a cabbage", // week 27
    "an eggplant", // week 28
    "a butternut squash", // week 29
    "a cucumber", // week 30
    "a coconut", // week 31
    "a jicama", // week 32
    "a pineapple", // week 33
    "a cantaloupe", // week 34
    "a honeydew melon", // week 35
    "a head of romaine lettuce", // week 36
    "a bunch of swiss chard", // week 37
    "a winter melon", // week 38
    "a watermelon", // week 39
    "a pumpkin", // week 40
  ]

  return sizes[Math.min(week - 1, sizes.length - 1)]
}

function getBabyDevelopment(week: number): string {
  if (week <= 4) {
    return "The fertilized egg implants in the uterus and begins developing."
  } else if (week <= 8) {
    return "Major organs are forming, and the heart begins to beat."
  } else if (week <= 13) {
    return "Baby's facial features are developing, and limbs can move."
  } else if (week <= 17) {
    return "Baby can make facial expressions and may begin sucking their thumb."
  } else if (week <= 22) {
    return "You might start feeling baby's movements. Baby can hear sounds."
  } else if (week <= 27) {
    return "Baby's lungs are developing, and they're gaining weight rapidly."
  } else if (week <= 31) {
    return "Baby's brain is developing rapidly, and they're practicing breathing."
  } else if (week <= 35) {
    return "Baby is gaining weight and preparing for birth."
  } else {
    return "Baby is considered full term and could arrive any day now!"
  }
}


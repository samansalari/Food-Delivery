"use client"

import { useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EarningsSummary() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formatDate = (date: Date, format: "day" | "week" | "month") => {
    if (format === "day") {
      return date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })
    } else if (format === "week") {
      const startOfWeek = new Date(date)
      startOfWeek.setDate(date.getDate() - date.getDay())
      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(startOfWeek.getDate() + 6)
      return `${startOfWeek.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endOfWeek.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
    } else {
      return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    }
  }

  const navigateDate = (direction: "prev" | "next", period: "day" | "week" | "month") => {
    const newDate = new Date(selectedDate)
    if (period === "day") {
      newDate.setDate(selectedDate.getDate() + (direction === "next" ? 1 : -1))
    } else if (period === "week") {
      newDate.setDate(selectedDate.getDate() + (direction === "next" ? 7 : -7))
    } else {
      newDate.setMonth(selectedDate.getMonth() + (direction === "next" ? 1 : -1))
    }
    setSelectedDate(newDate)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold">Earnings</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <Tabs defaultValue="day" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>

          <TabsContent value="day">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" onClick={() => navigateDate("prev", "day")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-medium">{formatDate(selectedDate, "day")}</h2>
              <Button variant="outline" size="icon" onClick={() => navigateDate("next", "day")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Total Earnings</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>78.50</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Deliveries</span>
                    <span className="text-2xl font-bold">9</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Hours Online</span>
                    <span className="text-2xl font-bold">5.2</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Avg. Per Order</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>8.72</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="font-medium mb-3">Earnings Breakdown</h3>
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Base Pay</h4>
                      <p className="text-sm text-slate-500">9 deliveries</p>
                    </div>
                    <span className="font-medium">$54.00</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Tips</h4>
                      <p className="text-sm text-slate-500">From customers</p>
                    </div>
                    <span className="font-medium">$24.50</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Bonuses</h4>
                      <p className="text-sm text-slate-500">Peak hours</p>
                    </div>
                    <span className="font-medium">$0.00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="week">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" onClick={() => navigateDate("prev", "week")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-medium">{formatDate(selectedDate, "week")}</h2>
              <Button variant="outline" size="icon" onClick={() => navigateDate("next", "week")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Total Earnings</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>412.75</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Deliveries</span>
                    <span className="text-2xl font-bold">47</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Hours Online</span>
                    <span className="text-2xl font-bold">28.5</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Avg. Per Order</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>8.78</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-4">Daily Breakdown</h3>
              <div className="space-y-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                  <div key={day} className="flex items-center">
                    <div className="w-10 text-sm font-medium">{day}</div>
                    <div className="flex-1 mx-2">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${[65, 45, 80, 70, 90, 100, 50][index]}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-16 text-right font-medium">
                      ${[52.25, 36.5, 64.75, 58.25, 72.5, 82.0, 46.5][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="month">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" onClick={() => navigateDate("prev", "month")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-medium">{formatDate(selectedDate, "month")}</h2>
              <Button variant="outline" size="icon" onClick={() => navigateDate("next", "month")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Monthly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Total Earnings</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>1,845.50</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Deliveries</span>
                    <span className="text-2xl font-bold">215</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Hours Online</span>
                    <span className="text-2xl font-bold">124</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 p-4">
                    <span className="text-sm text-slate-500">Avg. Per Order</span>
                    <div className="flex items-center text-2xl font-bold">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>8.58</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-4 rounded-lg border mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Monthly Trend</h3>
                <div className="flex items-center text-sm">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  <span className="text-slate-500">Earnings</span>
                </div>
              </div>
              <div className="h-40 flex items-end justify-between">
                {[420, 380, 450, 520, 480, 550, 590, 510, 480, 520, 550, 600, 580, 620, 590].map((value, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-green-500 rounded-sm mx-px"
                      style={{ height: `${(value / 620) * 100}%` }}
                    ></div>
                    {i % 2 === 0 && <span className="text-xs mt-1">{i + 1}</span>}
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Earning Days</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "Saturday, Jun 15", amount: 98.5, orders: 12 },
                    { date: "Friday, Jun 21", amount: 92.75, orders: 11 },
                    { date: "Saturday, Jun 8", amount: 89.25, orders: 10 },
                  ].map((day) => (
                    <div key={day.date} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div>
                        <h4 className="font-medium">{day.date}</h4>
                        <p className="text-sm text-slate-500">{day.orders} deliveries</p>
                      </div>
                      <div className="flex items-center font-medium">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span>{day.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


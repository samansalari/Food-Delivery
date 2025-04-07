"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Bell,
  ChevronDown,
  Clock,
  DollarSign,
  Download,
  Globe,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  PieChart,
  Settings,
  ShoppingBag,
  Smartphone,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnalyticsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-slate-900 text-white md:flex">
        <div className="flex h-14 items-center border-b border-slate-800 px-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="h-5 w-5" />
            <span>Admin Dashboard</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-400">Dashboard</h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/users">
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/orders">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/finance">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Finance
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-400">Management</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start bg-slate-800 text-white" asChild>
                <Link href="/admin/analytics">
                  <PieChart className="mr-2 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/support">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Support
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </nav>
        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin User</span>
              <span className="text-xs text-slate-400">admin@example.com</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-slate-400">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-slate-900 text-white p-0">
              <div className="flex h-14 items-center border-b border-slate-800 px-4">
                <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Admin Dashboard</span>
                </Link>
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <div className="px-4 mb-4">
                  <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-400">Dashboard</h2>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Overview
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/users">
                        <Users className="mr-2 h-4 w-4" />
                        Users
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/orders">
                        <Package className="mr-2 h-4 w-4" />
                        Orders
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/finance">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Finance
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="px-4 mb-4">
                  <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-400">Management</h2>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start bg-slate-800 text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/analytics">
                        <PieChart className="mr-2 h-4 w-4" />
                        Analytics
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/support">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Support
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
              <div className="mt-auto border-t border-slate-800 p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Admin User</span>
                    <span className="text-xs text-slate-400">admin@example.com</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Analytics Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Platform Analytics</h2>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="90days">Last 90 Days</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Key Metrics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Active Users</p>
                      <h3 className="text-2xl font-bold">12,548</h3>
                    </div>
                    <div className="rounded-full bg-blue-100 p-2">
                      <Users className="h-5 w-5 text-blue-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>12% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Orders Completed</p>
                      <h3 className="text-2xl font-bold">8,742</h3>
                    </div>
                    <div className="rounded-full bg-green-100 p-2">
                      <Package className="h-5 w-5 text-green-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>8% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Conversion Rate</p>
                      <h3 className="text-2xl font-bold">24.8%</h3>
                    </div>
                    <div className="rounded-full bg-purple-100 p-2">
                      <Activity className="h-5 w-5 text-purple-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-red-600">
                    <TrendingDown className="mr-1 h-4 w-4" />
                    <span>2% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Avg. Rating</p>
                      <h3 className="text-2xl font-bold">4.7/5</h3>
                    </div>
                    <div className="rounded-full bg-yellow-100 p-2">
                      <Star className="h-5 w-5 text-yellow-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>0.2 from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Daily active users over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <div className="flex h-full items-end gap-2 pb-6">
                    {[
                      65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 60, 65, 70, 65, 75, 70, 65, 60, 65, 70, 75, 80, 75, 70,
                      65, 60, 55, 50, 55, 60,
                    ].map((height, i) => (
                      <div key={i} className="relative flex w-full flex-col items-center">
                        <div className="w-full bg-blue-500 rounded-sm" style={{ height: `${height}%` }}></div>
                        {i % 5 === 0 && <span className="absolute -bottom-6 text-xs text-slate-500">{i + 1}</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div>
                    <p className="text-slate-500">Average</p>
                    <p className="font-medium">8,245 users/day</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Peak</p>
                    <p className="font-medium">12,547 users</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Growth</p>
                    <p className="font-medium text-green-600">+15.7%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Usage and Demographics */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Usage</CardTitle>
                  <CardDescription>Distribution by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <div className="relative h-40 w-40">
                      {/* Simulated donut chart */}
                      <div
                        className="absolute inset-0 rounded-full border-8 border-blue-500"
                        style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 0, 50% 0, 0 0, 0 50%)" }}
                      ></div>
                      <div
                        className="absolute inset-0 rounded-full border-8 border-green-500"
                        style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" }}
                      ></div>
                      <div
                        className="absolute inset-0 rounded-full border-8 border-yellow-500"
                        style={{ clipPath: "polygon(50% 50%, 50% 100%, 0 100%, 0 50%)" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Smartphone className="h-10 w-10 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm font-medium">Mobile</p>
                        <p className="text-xs text-slate-500">68%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="text-sm font-medium">Desktop</p>
                        <p className="text-xs text-slate-500">24%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="text-sm font-medium">Tablet</p>
                        <p className="text-xs text-slate-500">8%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                  <CardDescription>Age distribution of platform users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">18-24</span>
                        <span className="text-sm font-medium">22%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">25-34</span>
                        <span className="text-sm font-medium">38%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "38%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">35-44</span>
                        <span className="text-sm font-medium">27%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "27%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">45-54</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">55+</span>
                        <span className="text-sm font-medium">3%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "3%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>User distribution by region</CardDescription>
                </div>
                <Select defaultValue="country">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="View By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="country">Country</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                    <SelectItem value="region">Region</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-4">
                  <div className="relative h-[300px] w-full flex items-center justify-center bg-slate-100 rounded-lg">
                    <Globe className="h-16 w-16 text-slate-300" />
                    <span className="absolute text-sm text-slate-500">Geographic map visualization</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Country</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>% of Total</TableHead>
                        <TableHead>Change</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { country: "United States", users: "4,287", percent: "34.2%", change: "+12%" },
                        { country: "United Kingdom", users: "2,156", percent: "17.2%", change: "+8%" },
                        { country: "Canada", users: "1,543", percent: "12.3%", change: "+15%" },
                        { country: "Australia", users: "976", percent: "7.8%", change: "+6%" },
                        { country: "Germany", users: "821", percent: "6.5%", change: "+9%" },
                      ].map((item) => (
                        <TableRow key={item.country}>
                          <TableCell className="font-medium">{item.country}</TableCell>
                          <TableCell>{item.users}</TableCell>
                          <TableCell>{item.percent}</TableCell>
                          <TableCell className="text-green-600">{item.change}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Report
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* User Retention and Engagement */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Retention</CardTitle>
                  <CardDescription>Weekly cohort analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Cohort</TableHead>
                          <TableHead>Week 1</TableHead>
                          <TableHead>Week 2</TableHead>
                          <TableHead>Week 3</TableHead>
                          <TableHead>Week 4</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { cohort: "Week 1", w1: "100%", w2: "64%", w3: "48%", w4: "42%" },
                          { cohort: "Week 2", w1: "100%", w2: "68%", w3: "51%", w4: "45%" },
                          { cohort: "Week 3", w1: "100%", w2: "72%", w3: "56%", w4: "49%" },
                          { cohort: "Week 4", w1: "100%", w2: "75%", w3: "60%", w4: "52%" },
                        ].map((row) => (
                          <TableRow key={row.cohort}>
                            <TableCell className="font-medium">{row.cohort}</TableCell>
                            <TableCell>{row.w1}</TableCell>
                            <TableCell>{row.w2}</TableCell>
                            <TableCell>{row.w3}</TableCell>
                            <TableCell>{row.w4}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 text-sm text-slate-500">
                    <p>Latest cohorts show improved retention rates across all weeks.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                  <CardDescription>Daily active time on platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px]">
                    <div className="flex h-full items-end gap-2 pb-6">
                      {[
                        { day: "Mon", minutes: 32 },
                        { day: "Tue", minutes: 28 },
                        { day: "Wed", minutes: 35 },
                        { day: "Thu", minutes: 42 },
                        { day: "Fri", minutes: 38 },
                        { day: "Sat", minutes: 52 },
                        { day: "Sun", minutes: 48 },
                      ].map((data, i) => (
                        <div key={i} className="relative flex w-full flex-col items-center">
                          <div
                            className="w-full bg-purple-500 rounded-sm"
                            style={{ height: `${(data.minutes / 60) * 100}%` }}
                          ></div>
                          <span className="absolute -bottom-6 text-xs text-slate-500">{data.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Avg. Session Duration</p>
                      <p className="text-lg font-medium">39 minutes</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Sessions per User</p>
                      <p className="text-lg font-medium">2.4 daily</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Features */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Features</CardTitle>
                <CardDescription>Most used platform features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Order Tracking</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Restaurant Search</span>
                      <span className="text-sm font-medium">76%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Reviews & Ratings</span>
                      <span className="text-sm font-medium">64%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "64%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Saved Favorites</span>
                      <span className="text-sm font-medium">52%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "52%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Special Offers</span>
                      <span className="text-sm font-medium">48%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "48%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Platform activity in real-time</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Clock className="mr-2 h-4 w-4" />
                  Live View
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "New User Registration",
                      details: "John D. from New York, USA",
                      time: "2 minutes ago",
                      icon: <Users className="h-4 w-4 text-blue-500" />,
                    },
                    {
                      action: "Order Placed",
                      details: "Order #45892 - $37.85",
                      time: "5 minutes ago",
                      icon: <Package className="h-4 w-4 text-green-500" />,
                    },
                    {
                      action: "Restaurant Added",
                      details: "Thai Delight Restaurant",
                      time: "12 minutes ago",
                      icon: <ShoppingBag className="h-4 w-4 text-purple-500" />,
                    },
                    {
                      action: "Review Submitted",
                      details: "5-star review for Burger Palace",
                      time: "18 minutes ago",
                      icon: <Star className="h-4 w-4 text-yellow-500" />,
                    },
                    {
                      action: "Payment Processed",
                      details: "Transaction #TX-58742 - $24.50",
                      time: "25 minutes ago",
                      icon: <DollarSign className="h-4 w-4 text-green-500" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                      <div className="rounded-full bg-slate-100 p-2">{item.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-slate-500">{item.details}</p>
                      </div>
                      <Badge variant="outline">{item.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Performance Metrics */}
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>App Performance</CardTitle>
                  <CardDescription>Average load times</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative h-32 w-32 rounded-full border-8 border-slate-100">
                      <div
                        className="absolute inset-0 rounded-full border-8 border-green-500"
                        style={{ clipPath: "polygon(50% 50%, 100% 0, 0 0)" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-2xl font-bold">1.2s</span>
                          <p className="text-xs text-slate-500">Avg. Load</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Mobile App</span>
                      <span className="text-sm font-medium">1.1s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Web App</span>
                      <span className="text-sm font-medium">1.4s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API Response</span>
                      <span className="text-sm font-medium">0.8s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Rate</CardTitle>
                  <CardDescription>System stability metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative h-32 w-32 rounded-full border-8 border-slate-100">
                      <div
                        className="absolute inset-0 rounded-full border-8 border-green-500"
                        style={{ clipPath: "polygon(50% 50%, 100% 0, 50% 0, 0 0, 0 10%)" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-2xl font-bold">0.4%</span>
                          <p className="text-xs text-slate-500">Error Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API Errors</span>
                      <span className="text-sm font-medium">0.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Client Errors</span>
                      <span className="text-sm font-medium">0.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Server Errors</span>
                      <span className="text-sm font-medium">0.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Uptime</CardTitle>
                  <CardDescription>System availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative h-32 w-32 rounded-full border-8 border-slate-100">
                      <div
                        className="absolute inset-0 rounded-full border-8 border-green-500"
                        style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)" }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-2xl font-bold">99.98%</span>
                          <p className="text-xs text-slate-500">Uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last 24 Hours</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last 7 Days</span>
                      <span className="text-sm font-medium">99.98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last 30 Days</span>
                      <span className="text-sm font-medium">99.95%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  PieChart,
  Settings,
  ShoppingBag,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-slate-900 text-white md:flex">
        <div className="flex h-14 items-center border-b border-slate-800 px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
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
                <Link href="#">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
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
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
                  <PieChart className="mr-2 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Support
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="#">
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

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 bg-slate-900 text-white p-0">
          <div className="flex h-14 items-center border-b border-slate-800 px-4">
            <Link href="#" className="flex items-center gap-2 font-semibold">
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
                  <Link href="#">
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
                  <Link href="#">
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
                  <Link href="#">
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
                  <Link href="#">
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
                  className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                  asChild
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link href="#">
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
                  <Link href="#">
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
                  <Link href="#">
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

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard Overview</h1>
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
          <div className="grid gap-6">
            {/* Stats cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Total Users</p>
                      <h3 className="text-2xl font-bold">12,548</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <Users className="h-5 w-5 text-slate-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span>12% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                      <h3 className="text-2xl font-bold">$45,231.89</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <DollarSign className="h-5 w-5 text-slate-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span>18% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Active Orders</p>
                      <h3 className="text-2xl font-bold">342</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <Package className="h-5 w-5 text-slate-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    <span>4% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Active Restaurants</p>
                      <h3 className="text-2xl font-bold">156</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <Home className="h-5 w-5 text-slate-700" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span>7% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue and Orders */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue for the current year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <div className="flex h-full items-end gap-2 pb-6">
                      {[35, 45, 30, 50, 65, 75, 60, 80, 70, 90, 85, 60].map((height, i) => (
                        <div key={i} className="relative flex w-full flex-col items-center">
                          <div className="w-full bg-slate-900 rounded-sm" style={{ height: `${height}%` }}></div>
                          <span className="absolute -bottom-6 text-xs text-slate-500">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-900"></div>
                    <span className="text-sm text-slate-600">Revenue</span>
                  </div>
                  <Select defaultValue="year">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest orders across the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "ORD-12345", customer: "John Smith", amount: "$24.50", status: "completed" },
                      { id: "ORD-12346", customer: "Sarah Johnson", amount: "$42.75", status: "processing" },
                      { id: "ORD-12347", customer: "Michael Brown", amount: "$32.99", status: "processing" },
                      { id: "ORD-12348", customer: "Emily Davis", amount: "$18.25", status: "completed" },
                      { id: "ORD-12349", customer: "David Wilson", amount: "$53.45", status: "cancelled" },
                    ].map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-slate-500">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <Badge
                            variant={
                              order.status === "completed"
                                ? "outline"
                                : order.status === "processing"
                                  ? "default"
                                  : "destructive"
                            }
                            className={
                              order.status === "completed"
                                ? "text-green-600 bg-green-50 hover:bg-green-50"
                                : order.status === "processing"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : ""
                            }
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Orders
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* User Activity and Payment Methods */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                  <CardDescription>Active users over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="daily">
                    <TabsList className="mb-4">
                      <TabsTrigger value="daily">Daily</TabsTrigger>
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                    <TabsContent value="daily" className="space-y-4">
                      <div className="h-[200px]">
                        <div className="flex h-full items-end gap-2 pb-6">
                          {[40, 30, 45, 62, 75, 65, 55].map((height, i) => (
                            <div key={i} className="relative flex w-full flex-col items-center">
                              <div className="w-full bg-blue-500 rounded-sm" style={{ height: `${height}%` }}></div>
                              <span className="absolute -bottom-6 text-xs text-slate-500">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-slate-500">Average</p>
                          <p className="font-medium">2,345 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Peak</p>
                          <p className="font-medium">3,752 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Current</p>
                          <p className="font-medium">2,156 users</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="weekly" className="space-y-4">
                      <div className="h-[200px]">
                        <div className="flex h-full items-end gap-2 pb-6">
                          {[55, 60, 45, 70, 50].map((height, i) => (
                            <div key={i} className="relative flex w-full flex-col items-center">
                              <div className="w-full bg-blue-500 rounded-sm" style={{ height: `${height}%` }}></div>
                              <span className="absolute -bottom-6 text-xs text-slate-500">
                                {["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-slate-500">Average</p>
                          <p className="font-medium">16,245 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Peak</p>
                          <p className="font-medium">21,352 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Current</p>
                          <p className="font-medium">18,156 users</p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="monthly" className="space-y-4">
                      <div className="h-[200px]">
                        <div className="flex h-full items-end gap-2 pb-6">
                          {[40, 45, 55, 60, 70, 65, 75, 80, 70, 65, 60, 50].map((height, i) => (
                            <div key={i} className="relative flex w-full flex-col items-center">
                              <div className="w-full bg-blue-500 rounded-sm" style={{ height: `${height}%` }}></div>
                              <span className="absolute -bottom-6 text-xs text-slate-500">
                                {
                                  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
                                    i
                                  ]
                                }
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-slate-500">Average</p>
                          <p className="font-medium">65,245 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Peak</p>
                          <p className="font-medium">82,352 users</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Current</p>
                          <p className="font-medium">72,156 users</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Distribution of payment methods used</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-8">
                    <div className="relative h-40 w-40">
                      {/* Simulated pie chart */}
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
                        <CreditCard className="h-10 w-10 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm font-medium">Credit Card</p>
                        <p className="text-xs text-slate-500">45%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="text-sm font-medium">Digital Wallets</p>
                        <p className="text-xs text-slate-500">30%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div>
                        <p className="text-sm font-medium">Cash on Delivery</p>
                        <p className="text-xs text-slate-500">25%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                      <div>
                        <p className="text-sm font-medium">Other</p>
                        <p className="text-xs text-slate-500">5%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Payment Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


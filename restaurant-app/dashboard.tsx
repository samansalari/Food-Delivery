"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Clock, DollarSign, Menu, Package, Settings, ShoppingBag, Star, Users } from "lucide-react"

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function RestaurantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-white border-r border-slate-200 md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="h-5 w-5" />
            <span>Restaurant Portal</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-500">Dashboard</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Finance
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <Star className="mr-2 h-4 w-4" />
                  Reviews
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-500">Management</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <Users className="mr-2 h-4 w-4" />
                  Menu
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="#">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </nav>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Restaurant" />
              <AvatarFallback>BP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Burger Palace</span>
              <span className="text-xs text-slate-500">manager@burgerpalace.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <ShoppingBag className="h-5 w-5" />
              <span>Restaurant Portal</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 mb-4">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-500">Dashboard</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Finance
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <Star className="mr-2 h-4 w-4" />
                    Reviews
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-4 mb-4">
              <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-slate-500">Management</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <Users className="mr-2 h-4 w-4" />
                    Menu
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setSidebarOpen(false)}>
                  <Link href="#">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Restaurant" />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Burger Palace</span>
              <span className="text-xs text-slate-500">manager@burgerpalace.com</span>
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
            <h1 className="text-lg font-semibold">Dashboard</h1>
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
                    <AvatarImage src="/placeholder.svg" alt="Restaurant" />
                    <AvatarFallback>BP</AvatarFallback>
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
                      <p className="text-sm font-medium text-slate-500">Today's Orders</p>
                      <h3 className="text-2xl font-bold">42</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <Package className="h-5 w-5 text-slate-700" />
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
                    <span>12% from yesterday</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Revenue</p>
                      <h3 className="text-2xl font-bold">$1,248</h3>
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
                    <span>8% from yesterday</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Avg. Order Value</p>
                      <h3 className="text-2xl font-bold">$29.72</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <ShoppingBag className="h-5 w-5 text-slate-700" />
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
                    <span>3% from yesterday</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Rating</p>
                      <h3 className="text-2xl font-bold">4.8/5</h3>
                    </div>
                    <div className="rounded-full bg-slate-100 p-2">
                      <Star className="h-5 w-5 text-slate-700" />
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
                    <span>0.2 from last week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Orders and Best Sellers */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Current Orders */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Current Orders</CardTitle>
                    <CardDescription>Manage your incoming orders</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-slate-100 p-2">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Order #12345</h4>
                            <p className="text-sm text-slate-500">2 items • $24.50</p>
                          </div>
                        </div>
                        <Badge>Preparing</Badge>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-slate-500">Ordered 10 mins ago</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm">Ready for Pickup</Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-slate-100 p-2">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Order #12346</h4>
                            <p className="text-sm text-slate-500">4 items • $42.75</p>
                          </div>
                        </div>
                        <Badge>Preparing</Badge>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-slate-500">Ordered 15 mins ago</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm">Ready for Pickup</Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-slate-100 p-2">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Order #12347</h4>
                            <p className="text-sm text-slate-500">1 item • $12.99</p>
                          </div>
                        </div>
                        <Badge variant="outline">Ready</Badge>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-slate-500">Ordered 25 mins ago</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Mark as Delivered
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Best Sellers */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Best Selling Items</CardTitle>
                    <CardDescription>Your top performing menu items</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        This Week <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Today</DropdownMenuItem>
                      <DropdownMenuItem>This Week</DropdownMenuItem>
                      <DropdownMenuItem>This Month</DropdownMenuItem>
                      <DropdownMenuItem>This Year</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-slate-100 flex items-center justify-center">
                        <span className="text-2xl">🍔</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Classic Cheeseburger</h4>
                          <span className="font-medium">$8.99</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-sm text-slate-500">124 orders this week</p>
                          <div className="flex items-center text-sm text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"www.w3.org/2000/svg"
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
                            <span>15%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-slate-100 flex items-center justify-center">
                        <span className="text-2xl">🍟</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Large Fries</h4>
                          <span className="font-medium">$3.99</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-sm text-slate-500">98 orders this week</p>
                          <div className="flex items-center text-sm text-green-600">
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
                            <span>8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-slate-100 flex items-center justify-center">
                        <span className="text-2xl">🥤</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Chocolate Shake</h4>
                          <span className="font-medium">$4.50</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-sm text-slate-500">87 orders this week</p>
                          <div className="flex items-center text-sm text-red-600">
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
                            <span>3%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-slate-100 flex items-center justify-center">
                        <span className="text-2xl">🥪</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Chicken Sandwich</h4>
                          <span className="font-medium">$7.99</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-sm text-slate-500">76 orders this week</p>
                          <div className="flex items-center text-sm text-green-600">
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
                            <span>12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Menu Items</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Daily revenue for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <div className="flex h-full items-end gap-2 pb-6">
                    {[65, 45, 80, 70, 90, 100, 75].map((height, i) => (
                      <div key={i} className="relative flex w-full flex-col items-center">
                        <div
                          className="w-full bg-slate-900 rounded-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="absolute -bottom-6 text-xs text-slate-500">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}


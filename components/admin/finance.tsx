"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  PieChart,
  Search,
  Settings,
  ShoppingBag,
  Sliders,
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FinanceDashboard() {
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
              <Button variant="ghost" className="w-full justify-start bg-slate-800 text-white" asChild>
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
                className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
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
                      className="w-full justify-start bg-slate-800 text-white"
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
                      className="w-full justify-start text-white hover:bg-slate-800 hover:text-white"
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
            <h1 className="text-lg font-semibold">Finance Dashboard</h1>
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
              <h2 className="text-2xl font-bold">Financial Overview</h2>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Stats cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                      <h3 className="text-2xl font-bold">$45,231.89</h3>
                    </div>
                    <div className="rounded-full bg-green-100 p-2">
                      <DollarSign className="h-5 w-5 text-green-700" />
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
                      <p className="text-sm font-medium text-slate-500">Total Expenses</p>
                      <h3 className="text-2xl font-bold">$12,458.32</h3>
                    </div>
                    <div className="rounded-full bg-red-100 p-2">
                      <DollarSign className="h-5 w-5 text-red-700" />
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
                    <span>5% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Net Profit</p>
                      <h3 className="text-2xl font-bold">$32,773.57</h3>
                    </div>
                    <div className="rounded-full bg-blue-100 p-2">
                      <DollarSign className="h-5 w-5 text-blue-700" />
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
                    <span>24% from last month</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Pending Payments</p>
                      <h3 className="text-2xl font-bold">$5,489.25</h3>
                    </div>
                    <div className="rounded-full bg-yellow-100 p-2">
                      <CreditCard className="h-5 w-5 text-yellow-700" />
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
                    <span>3% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Revenue & Expenses</CardTitle>
                  <CardDescription>Monthly financial overview for the current year</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Sliders className="mr-2 h-4 w-4" />
                    Customize
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <div className="flex h-full items-end gap-2 pb-6">
                    {[
                      { revenue: 35, expense: 25 },
                      { revenue: 45, expense: 30 },
                      { revenue: 30, expense: 20 },
                      { revenue: 50, expense: 35 },
                      { revenue: 65, expense: 40 },
                      { revenue: 75, expense: 45 },
                      { revenue: 60, expense: 35 },
                      { revenue: 80, expense: 50 },
                      { revenue: 70, expense: 45 },
                      { revenue: 90, expense: 55 },
                      { revenue: 85, expense: 50 },
                      { revenue: 60, expense: 40 },
                    ].map((data, i) => (
                      <div key={i} className="relative flex w-full flex-col items-center">
                        <div
                          className="z-10 w-full bg-green-500 rounded-sm"
                          style={{ height: `${data.revenue}%` }}
                        ></div>
                        <div
                          className="absolute bottom-0 z-0 w-full bg-red-400 rounded-sm"
                          style={{ height: `${data.expense}%` }}
                        ></div>
                        <span className="absolute -bottom-6 text-xs text-slate-500">
                          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-600">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span className="text-sm text-slate-600">Expenses</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transactions and Payment Methods */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Latest financial activities</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <Input placeholder="Search transactions..." className="pl-10 mb-4" />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: "TR-12345",
                          desc: "Restaurant Commission",
                          date: "Apr 23, 2023",
                          amount: "$245.50",
                          status: "completed",
                        },
                        {
                          id: "TR-12346",
                          desc: "Driver Payment",
                          date: "Apr 22, 2023",
                          amount: "-$142.75",
                          status: "completed",
                        },
                        {
                          id: "TR-12347",
                          desc: "Platform Fee",
                          date: "Apr 21, 2023",
                          amount: "$32.99",
                          status: "pending",
                        },
                        {
                          id: "TR-12348",
                          desc: "Tax Payment",
                          date: "Apr 20, 2023",
                          amount: "-$1,245.25",
                          status: "completed",
                        },
                        {
                          id: "TR-12349",
                          desc: "Marketing Expense",
                          date: "Apr 19, 2023",
                          amount: "-$450.00",
                          status: "failed",
                        },
                      ].map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{transaction.desc}</p>
                              <p className="text-xs text-slate-500">{transaction.id}</p>
                            </div>
                          </TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell className={transaction.amount.startsWith("-") ? "text-red-600" : "text-green-600"}>
                            {transaction.amount}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                transaction.status === "completed"
                                  ? "outline"
                                  : transaction.status === "pending"
                                    ? "default"
                                    : "destructive"
                              }
                              className={
                                transaction.status === "completed"
                                  ? "text-green-600 bg-green-50 hover:bg-green-50"
                                  : transaction.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : ""
                              }
                            >
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-sm text-slate-500">Showing 5 of 248 transactions</div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Breakdown</CardTitle>
                    <CardDescription>Revenue sources by category</CardDescription>
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
                          <DollarSign className="h-10 w-10 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <div>
                          <p className="text-sm font-medium">Restaurant Orders</p>
                          <p className="text-xs text-slate-500">45% - $20,354.35</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div>
                          <p className="text-sm font-medium">Delivery Fees</p>
                          <p className="text-xs text-slate-500">30% - $13,569.57</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div>
                          <p className="text-sm font-medium">Subscription Fees</p>
                          <p className="text-xs text-slate-500">25% - $11,307.97</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Expense Categories</CardTitle>
                    <CardDescription>Breakdown of monthly expenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Operational Costs</span>
                          <span className="text-sm font-medium">$5,245.75</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">42% of total expenses</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Marketing & Advertising</span>
                          <span className="text-sm font-medium">$3,124.50</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">25% of total expenses</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Driver Payments</span>
                          <span className="text-sm font-medium">$2,498.25</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">20% of total expenses</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Technology & Development</span>
                          <span className="text-sm font-medium">$1,589.82</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: "13%" }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">13% of total expenses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Financial Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Access and download financial statements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Monthly Income Statement - April 2023", date: "May 1, 2023", size: "1.2 MB" },
                    { name: "Quarterly Financial Report - Q1 2023", date: "Apr 15, 2023", size: "3.5 MB" },
                    { name: "Annual Tax Report - 2022", date: "Mar 30, 2023", size: "5.8 MB" },
                    { name: "Cash Flow Statement - March 2023", date: "Apr 5, 2023", size: "0.9 MB" },
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md bg-slate-100 p-2">
                          <FileText className="h-5 w-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-xs text-slate-500">Generated on {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">{report.size}</span>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Custom Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}


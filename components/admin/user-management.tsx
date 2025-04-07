"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  DollarSign,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Package,
  PieChart,
  Settings,
  ShoppingBag,
  Users,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Skeleton } from "@/components/ui/skeleton"

export default function UserManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  // Simulate loading and fade-in effect
  useEffect(() => {
    // Simulate API loading time
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Fade in content after loading
    const fadeTimer = setTimeout(() => {
      setVisible(true)
    }, 1600)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  const users = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Customer",
      status: "Active",
      joined: "Jan 12, 2023",
      avatar: "JS",
    },
    {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Restaurant Owner",
      status: "Active",
      joined: "Mar 4, 2023",
      avatar: "SJ",
    },
    {
      name: "Michael Brown",
      email: "michael.b@example.com",
      role: "Driver",
      status: "Inactive",
      joined: "Feb 18, 2023",
      avatar: "MB",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Admin",
      status: "Active",
      joined: "Nov 23, 2022",
      avatar: "ED",
    },
    {
      name: "David Wilson",
      email: "david.w@example.com",
      role: "Customer",
      status: "Suspended",
      joined: "Apr 7, 2023",
      avatar: "DW",
    },
  ]

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
          <div className="px-4 mb-6">
            <h2 className="mb-3 px-2 text-xs font-semibold tracking-tight text-slate-400">Dashboard</h2>
            <div className="space-y-1.5">
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/dashboard" className="flex items-center">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Overview</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full h-10 justify-start bg-slate-800 text-white hover:bg-slate-700"
                asChild
              >
                <Link href="/admin/users" className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Users</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/orders" className="flex items-center">
                  <Package className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/finance" className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  <span>Finance</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 mb-6">
            <h2 className="mb-3 px-2 text-xs font-semibold tracking-tight text-slate-400">Management</h2>
            <div className="space-y-1.5">
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/analytics" className="flex items-center">
                  <PieChart className="mr-2 h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/support" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/admin/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
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
                <div className="px-4 mb-6">
                  <h2 className="mb-3 px-2 text-xs font-semibold tracking-tight text-slate-400">Dashboard</h2>
                  <div className="space-y-1.5">
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/dashboard" className="flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Overview</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start bg-slate-800 text-white hover:bg-slate-700"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/users" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Users</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/orders" className="flex items-center">
                        <Package className="mr-2 h-4 w-4" />
                        <span>Orders</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/finance" className="flex items-center">
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>Finance</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="px-4 mb-6">
                  <h2 className="mb-3 px-2 text-xs font-semibold tracking-tight text-slate-400">Management</h2>
                  <div className="space-y-1.5">
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/analytics" className="flex items-center">
                        <PieChart className="mr-2 h-4 w-4" />
                        <span>Analytics</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/support" className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Support</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-10 justify-start text-white hover:bg-slate-800 hover:text-white"
                      asChild
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Link href="/admin/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
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
            <h1 className="text-lg font-semibold">User Management</h1>
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
          <div className={`transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
            {loading ? (
              <>
                {/* Skeleton loading UI */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-10 w-[200px] md:w-[200px] lg:w-[300px]" />
                    <Skeleton className="h-10 w-[100px]" />
                  </div>
                </div>
                <Card>
                  <CardHeader className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-10 w-[180px]" />
                    </div>
                  </CardHeader>
                  <CardContent className="px-6">
                    <div className="space-y-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Skeleton className="h-8 w-8 rounded-full" />
                              <Skeleton className="h-4 w-32" />
                            </div>
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                          </div>
                        ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between px-6 py-4">
                    <Skeleton className="h-4 w-40" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </CardFooter>
                </Card>
              </>
            ) : (
              <>
                {/* Actual content */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight">Users</h1>
                    <p className="text-muted-foreground">Manage user accounts and permissions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search users..."
                        className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
                      />
                    </div>
                    <Button className="flex items-center gap-1">
                      <UserPlus className="mr-1 h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardHeader className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <CardTitle>All Users</CardTitle>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="customer">Customer</SelectItem>
                            <SelectItem value="restaurant">Restaurant Owner</SelectItem>
                            <SelectItem value="driver">Driver</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user, i) => (
                          <TableRow key={i}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>{user.avatar}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{user.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  user.status === "Active"
                                    ? "outline"
                                    : user.status === "Inactive"
                                      ? "secondary"
                                      : "destructive"
                                }
                                className={
                                  user.status === "Active"
                                    ? "text-green-600 bg-green-50 hover:bg-green-50"
                                    : user.status === "Inactive"
                                      ? "bg-slate-100 text-slate-800 hover:bg-slate-100"
                                      : ""
                                }
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Permissions</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between px-6 py-4">
                    <div className="text-sm text-muted-foreground">Showing 5 of 100 users</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}


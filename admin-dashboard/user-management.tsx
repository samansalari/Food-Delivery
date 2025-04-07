"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Filter, MoreHorizontal, Search, Shield, User, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface UserType {
  id: string
  name: string
  email: string
  role: "customer" | "driver" | "restaurant_owner" | "admin"
  status: "active" | "suspended" | "pending"
  joinDate: string
  lastActive: string
  avatar?: string
}

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
  const [userDetailsOpen, setUserDetailsOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const users: UserType[] = [
    {
      id: "USR-12345",
      name: "John Smith",
      email: "john.smith@example.com",
      role: "customer",
      status: "active",
      joinDate: "Jan 15, 2023",
      lastActive: "Today",
      avatar: "/placeholder.svg",
    },
    {
      id: "USR-12346",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "driver",
      status: "active",
      joinDate: "Feb 3, 2023",
      lastActive: "Yesterday",
      avatar: "/placeholder.svg",
    },
    {
      id: "USR-12347",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "restaurant_owner",
      status: "active",
      joinDate: "Dec 10, 2022",
      lastActive: "3 days ago",
      avatar: "/placeholder.svg",
    },
    {
      id: "USR-12348",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "customer",
      status: "suspended",
      joinDate: "Mar 22, 2023",
      lastActive: "2 weeks ago",
      avatar: "/placeholder.svg",
    },
    {
      id: "USR-12349",
      name: "David Wilson",
      email: "david.wilson@example.com",
      role: "driver",
      status: "pending",
      joinDate: "Apr 5, 2023",
      lastActive: "1 hour ago",
      avatar: "/placeholder.svg",
    },
    {
      id: "USR-12350",
      name: "Jennifer Taylor",
      email: "jennifer.taylor@example.com",
      role: "admin",
      status: "active",
      joinDate: "Nov 18, 2022",
      lastActive: "Just now",
      avatar: "/placeholder.svg",
    },
  ]

  const handleViewUser = (user: UserType) => {
    setSelectedUser(user)
    setUserDetailsOpen(true)
  }

  const handleDeleteUser = (user: UserType) => {
    setSelectedUser(user)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = () => {
    // In a real app, this would delete the user from the database
    console.log(`Deleting user: ${selectedUser?.name}`)
    setDeleteDialogOpen(false)
  }

  const handleUpdateStatus = (user: UserType, newStatus: UserType["status"]) => {
    // In a real app, this would update the user status in the database
    console.log(`Updating user ${user.name} status to ${newStatus}`)
  }

  const getRoleBadge = (role: UserType["role"]) => {
    switch (role) {
      case "customer":
        return <Badge variant="outline">Customer</Badge>
      case "driver":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Driver</Badge>
      case "restaurant_owner":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Restaurant Owner</Badge>
      case "admin":
        return <Badge className="bg-slate-900 text-white hover:bg-slate-900">Admin</Badge>
    }
  }

  const getStatusBadge = (status: UserType["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-300 bg-yellow-50">
            Pending
          </Badge>
        )
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/admin/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold">User Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <User className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search users by name, email, or ID..." className="pl-8" />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="customer">Customers</SelectItem>
                <SelectItem value="driver">Drivers</SelectItem>
                <SelectItem value="restaurant_owner">Restaurant Owners</SelectItem>
                <SelectItem value="admin">Admins</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1 sm:flex-none">
              All Users
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex-1 sm:flex-none">
              Customers
            </TabsTrigger>
            <TabsTrigger value="drivers" className="flex-1 sm:flex-none">
              Drivers
            </TabsTrigger>
            <TabsTrigger value="restaurant-owners" className="flex-1 sm:flex-none">
              Restaurant Owners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage all users across the platform</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Join Date</TableHead>
                      <TableHead className="hidden md:table-cell">Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-slate-500">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="hidden md:table-cell">{user.joinDate}</TableCell>
                        <TableCell className="hidden md:table-cell">{user.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewUser(user)}>
                              View
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {user.status === "active" ? (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(user, "suspended")}>
                                    <X className="mr-2 h-4 w-4" />
                                    Suspend User
                                  </DropdownMenuItem>
                                ) : user.status === "suspended" ? (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(user, "active")}>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate User
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(user, "active")}>
                                    <Check className="mr-2 h-4 w-4" />
                                    Approve User
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => handleDeleteUser(user)} className="text-red-600">
                                  <X className="mr-2 h-4 w-4" />
                                  Delete User
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-slate-500">Showing 6 of 248 users</div>
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
          </TabsContent>

          {/* Role-specific tabs */}
          {[
            { value: "customers", role: "customer", title: "Customers" },
            { value: "drivers", role: "driver", title: "Drivers" },
            { value: "restaurant-owners", role: "restaurant_owner", title: "Restaurant Owners" },
          ].map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>{tab.title}</CardTitle>
                  <CardDescription>Manage {tab.title.toLowerCase()} on the platform</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Join Date</TableHead>
                        <TableHead className="hidden md:table-cell">Last Active</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users
                        .filter((user) => user.role === tab.role)
                        .map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={user.avatar} alt={user.name} />
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <p className="text-sm text-slate-500">{user.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(user.status)}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.joinDate}</TableCell>
                            <TableCell className="hidden md:table-cell">{user.lastActive}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm" onClick={() => handleViewUser(user)}>
                                  View
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {user.status === "active" ? (
                                      <DropdownMenuItem onClick={() => handleUpdateStatus(user, "suspended")}>
                                        <X className="mr-2 h-4 w-4" />
                                        Suspend User
                                      </DropdownMenuItem>
                                    ) : user.status === "suspended" ? (
                                      <DropdownMenuItem onClick={() => handleUpdateStatus(user, "active")}>
                                        <Check className="mr-2 h-4 w-4" />
                                        Activate User
                                      </DropdownMenuItem>
                                    ) : (
                                      <DropdownMenuItem onClick={() => handleUpdateStatus(user, "active")}>
                                        <Check className="mr-2 h-4 w-4" />
                                        Approve User
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuItem onClick={() => handleDeleteUser(user)} className="text-red-600">
                                      <X className="mr-2 h-4 w-4" />
                                      Delete User
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* User Details Sheet */}
      <Sheet open={userDetailsOpen} onOpenChange={setUserDetailsOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>User Details</SheetTitle>
            <SheetDescription>
              {selectedUser?.id} •{" "}
              {selectedUser?.role.replace("_", " ").charAt(0).toUpperCase() +
                selectedUser?.role.replace("_", " ").slice(1)}
            </SheetDescription>
          </SheetHeader>
          {selectedUser && (
            <div className="mt-6 space-y-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback className="text-lg">{selectedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{selectedUser.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  {getRoleBadge(selectedUser.role)}
                  {getStatusBadge(selectedUser.status)}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-slate-500 mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Email</span>
                    <span className="text-sm font-medium">{selectedUser.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Phone</span>
                    <span className="text-sm font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-slate-500 mb-2">Account Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">User ID</span>
                    <span className="text-sm font-medium">{selectedUser.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Join Date</span>
                    <span className="text-sm font-medium">{selectedUser.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Last Active</span>
                    <span className="text-sm font-medium">{selectedUser.lastActive}</span>
                  </div>
                </div>
              </div>

              {selectedUser.role === "driver" && (
                <>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Driver Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Vehicle Type</span>
                        <span className="text-sm font-medium">Car</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">License Plate</span>
                        <span className="text-sm font-medium">ABC123</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Deliveries</span>
                        <span className="text-sm font-medium">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Rating</span>
                        <span className="text-sm font-medium">4.8/5</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedUser.role === "restaurant_owner" && (
                <>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 mb-2">Restaurant Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Restaurant Name</span>
                        <span className="text-sm font-medium">Burger Palace</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Location</span>
                        <span className="text-sm font-medium">123 Main St, Anytown</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Orders</span>
                        <span className="text-sm font-medium">1,245</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Rating</span>
                        <span className="text-sm font-medium">4.6/5</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex flex-col gap-2 mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/admin/users/${selectedUser.id}/edit`}>Edit User</Link>
                </Button>
                {selectedUser.status === "active" ? (
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => handleUpdateStatus(selectedUser, "suspended")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Suspend User
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-600 hover:bg-green-50 hover:text-green-700"
                    onClick={() => handleUpdateStatus(selectedUser, "active")}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Activate User
                  </Button>
                )}
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    setUserDetailsOpen(false)
                    handleDeleteUser(selectedUser)
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Delete User
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="flex items-center gap-4 py-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{selectedUser.name}</p>
                <p className="text-sm text-slate-500">{selectedUser.email}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Helper component for Link since we're not importing from next/link in this file
function Link({
  href,
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}


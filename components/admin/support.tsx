"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  ChevronDown,
  Check,
  Clock,
  DollarSign,
  Filter,
  Flag,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  MessageSquare,
  Package,
  PieChart,
  Search,
  Settings,
  ShoppingBag,
  Star,
  Tag,
  User,
  Users,
} from "lucide-react"

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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface Ticket {
  id: string
  subject: string
  customer: {
    name: string
    email: string
    avatar?: string
  }
  status: "open" | "in_progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "urgent"
  category: string
  assignedTo?: {
    name: string
    avatar?: string
  }
  createdAt: string
  lastUpdated: string
  messages: {
    sender: "customer" | "support"
    content: string
    timestamp: string
    senderName: string
    senderAvatar?: string
  }[]
}

export default function SupportDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [ticketDetailsOpen, setTicketDetailsOpen] = useState(false)
  const [replyDialogOpen, setReplyDialogOpen] = useState(false)
  const [replyText, setReplyText] = useState("")

  const tickets: Ticket[] = [
    {
      id: "TKT-12345",
      subject: "Order never arrived",
      customer: {
        name: "John Smith",
        email: "john.smith@example.com",
        avatar: "/placeholder.svg",
      },
      status: "open",
      priority: "high",
      category: "Delivery Issue",
      createdAt: "2023-06-15 14:30",
      lastUpdated: "2023-06-15 14:30",
      messages: [
        {
          sender: "customer",
          content:
            "I placed an order over 2 hours ago (Order #45892) and it still hasn't arrived. The app says it was delivered but I never received it. Can you help me?",
          timestamp: "2023-06-15 14:30",
          senderName: "John Smith",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
    {
      id: "TKT-12346",
      subject: "Wrong items in my order",
      customer: {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        avatar: "/placeholder.svg",
      },
      status: "in_progress",
      priority: "medium",
      category: "Order Issue",
      assignedTo: {
        name: "Mike Wilson",
        avatar: "/placeholder.svg",
      },
      createdAt: "2023-06-15 12:15",
      lastUpdated: "2023-06-15 13:45",
      messages: [
        {
          sender: "customer",
          content:
            "I received my order but several items were wrong. I ordered a veggie burger but got a regular burger instead. Order #45873.",
          timestamp: "2023-06-15 12:15",
          senderName: "Sarah Johnson",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "support",
          content:
            "I'm sorry to hear about this issue with your order. I've checked your order details and I see the discrepancy. We'll process a refund for the incorrect items right away. Would you like us to arrange for the correct items to be delivered to you?",
          timestamp: "2023-06-15 13:45",
          senderName: "Mike Wilson",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
    {
      id: "TKT-12347",
      subject: "Can't update payment method",
      customer: {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        avatar: "/placeholder.svg",
      },
      status: "open",
      priority: "low",
      category: "Account Issue",
      createdAt: "2023-06-15 10:20",
      lastUpdated: "2023-06-15 10:20",
      messages: [
        {
          sender: "customer",
          content:
            "I'm trying to update my credit card information in the app but keep getting an error message. Can you help me fix this?",
          timestamp: "2023-06-15 10:20",
          senderName: "Michael Brown",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
    {
      id: "TKT-12348",
      subject: "Restaurant charged me twice",
      customer: {
        name: "Emily Davis",
        email: "emily.davis@example.com",
        avatar: "/placeholder.svg",
      },
      status: "resolved",
      priority: "high",
      category: "Billing Issue",
      assignedTo: {
        name: "Jennifer Taylor",
        avatar: "/placeholder.svg",
      },
      createdAt: "2023-06-14 16:45",
      lastUpdated: "2023-06-15 09:30",
      messages: [
        {
          sender: "customer",
          content:
            "I was charged twice for my order from Burger Palace yesterday (Order #45762). Can you help me get a refund for the duplicate charge?",
          timestamp: "2023-06-14 16:45",
          senderName: "Emily Davis",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "support",
          content:
            "I apologize for the duplicate charge. I've verified this in our system and have processed a refund for the extra charge. It should appear in your account within 3-5 business days.",
          timestamp: "2023-06-15 09:30",
          senderName: "Jennifer Taylor",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "customer",
          content: "Thank you for the quick resolution! I appreciate your help.",
          timestamp: "2023-06-15 09:45",
          senderName: "Emily Davis",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
    {
      id: "TKT-12349",
      subject: "Driver was rude",
      customer: {
        name: "David Wilson",
        email: "david.wilson@example.com",
        avatar: "/placeholder.svg",
      },
      status: "closed",
      priority: "medium",
      category: "Driver Complaint",
      assignedTo: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg",
      },
      createdAt: "2023-06-14 13:10",
      lastUpdated: "2023-06-14 15:25",
      messages: [
        {
          sender: "customer",
          content:
            "The delivery driver for my order today was extremely rude. He threw my food at the door and walked away without even knocking.",
          timestamp: "2023-06-14 13:10",
          senderName: "David Wilson",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "support",
          content:
            "I'm very sorry to hear about this negative experience. This is not the level of service we expect from our delivery partners. Could you please provide the order number so I can identify the driver and address this issue?",
          timestamp: "2023-06-14 14:05",
          senderName: "Alex Johnson",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "customer",
          content: "The order number was #45721. Thank you for looking into this.",
          timestamp: "2023-06-14 14:30",
          senderName: "David Wilson",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "support",
          content:
            "Thank you for providing that information. I've identified the driver and have reported this incident to our driver operations team. They will take appropriate action. As a goodwill gesture, I've added a $10 credit to your account for your next order.",
          timestamp: "2023-06-14 15:25",
          senderName: "Alex Johnson",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
    {
      id: "TKT-12350",
      subject: "App keeps crashing",
      customer: {
        name: "Lisa Martinez",
        email: "lisa.martinez@example.com",
        avatar: "/placeholder.svg",
      },
      status: "in_progress",
      priority: "urgent",
      category: "Technical Issue",
      assignedTo: {
        name: "Tech Support Team",
        avatar: "/placeholder.svg",
      },
      createdAt: "2023-06-15 11:05",
      lastUpdated: "2023-06-15 11:45",
      messages: [
        {
          sender: "customer",
          content:
            "The app keeps crashing whenever I try to place an order. I've tried reinstalling it but the problem persists. I'm using an iPhone 13 with the latest iOS.",
          timestamp: "2023-06-15 11:05",
          senderName: "Lisa Martinez",
          senderAvatar: "/placeholder.svg",
        },
        {
          sender: "support",
          content:
            "I'm sorry you're experiencing this issue. Let's try to troubleshoot this. Could you please tell me which version of our app you're using? Also, does the crash happen at a specific point in the ordering process?",
          timestamp: "2023-06-15 11:45",
          senderName: "Tech Support Team",
          senderAvatar: "/placeholder.svg",
        },
      ],
    },
  ]

  const handleViewTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket)
    setTicketDetailsOpen(true)
  }

  const handleReply = () => {
    if (!selectedTicket || !replyText.trim()) return

    // In a real app, this would send the reply to the backend
    console.log(`Replying to ticket ${selectedTicket.id}: ${replyText}`)
    setReplyText("")
    setReplyDialogOpen(false)
  }

  const handleUpdateStatus = (ticket: Ticket, newStatus: Ticket["status"]) => {
    // In a real app, this would update the ticket status in the database
    console.log(`Updating ticket ${ticket.id} status to ${newStatus}`)
  }

  const handleUpdatePriority = (ticket: Ticket, newPriority: Ticket["priority"]) => {
    // In a real app, this would update the ticket priority in the database
    console.log(`Updating ticket ${ticket.id} priority to ${newPriority}`)
  }

  const handleAssignTicket = (ticket: Ticket, agent: string) => {
    // In a real app, this would assign the ticket to an agent
    console.log(`Assigning ticket ${ticket.id} to ${agent}`)
  }

  const getStatusBadge = (status: Ticket["status"]) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Open</Badge>
      case "in_progress":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
      case "closed":
        return (
          <Badge variant="outline" className="text-slate-500">
            Closed
          </Badge>
        )
    }
  }

  const getPriorityBadge = (priority: Ticket["priority"]) => {
    switch (priority) {
      case "low":
        return (
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
            Low
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
            Medium
          </Badge>
        )
      case "high":
        return (
          <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">
            High
          </Badge>
        )
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>
    }
  }

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
              <Button variant="ghost" className="w-full justify-start bg-slate-800 text-white" asChild>
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
                      className="w-full justify-start bg-slate-800 text-white"
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
            <h1 className="text-lg font-semibold">Support Management</h1>
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
              <h2 className="text-2xl font-bold">Support Tickets</h2>
              <Badge className="ml-2">
                {tickets.filter((t) => t.status === "open" || t.status === "in_progress").length} Active
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button>
                <MessageCircle className="mr-2 h-4 w-4" />
                New Ticket
              </Button>
            </div>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input type="search" placeholder="Search tickets by ID, subject, or customer..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-priority">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-priority">All Priorities</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4 w-full sm:w-auto">
              <TabsTrigger value="all" className="flex-1 sm:flex-none">
                All Tickets
              </TabsTrigger>
              <TabsTrigger value="open" className="flex-1 sm:flex-none">
                Open
              </TabsTrigger>
              <TabsTrigger value="in_progress" className="flex-1 sm:flex-none">
                In Progress
              </TabsTrigger>
              <TabsTrigger value="resolved" className="flex-1 sm:flex-none">
                Resolved
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Support Tickets</CardTitle>
                  <CardDescription>Manage all customer support tickets</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead className="hidden md:table-cell">Category</TableHead>
                        <TableHead className="hidden md:table-cell">Created</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{ticket.subject}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.customer.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                          <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                          <TableCell className="hidden md:table-cell">{ticket.category}</TableCell>
                          <TableCell className="hidden md:table-cell">{ticket.createdAt}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleViewTicket(ticket)}>
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-sm text-slate-500">Showing 6 of 24 tickets</div>
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
            </TabsContent>

            {/* Status-specific tabs */}
            {["open", "in_progress", "resolved"].map((status) => (
              <TabsContent key={status} value={status} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {status === "open"
                        ? "Open Tickets"
                        : status === "in_progress"
                          ? "In Progress Tickets"
                          : "Resolved Tickets"}
                    </CardTitle>
                    <CardDescription>
                      {status === "open"
                        ? "New tickets awaiting response"
                        : status === "in_progress"
                          ? "Tickets currently being handled"
                          : "Tickets that have been resolved"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ticket ID</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead className="hidden md:table-cell">Category</TableHead>
                          <TableHead className="hidden md:table-cell">Created</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tickets
                          .filter((ticket) => ticket.status === status)
                          .map((ticket) => (
                            <TableRow key={ticket.id}>
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell className="max-w-[200px] truncate">{ticket.subject}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                    <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{ticket.customer.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                              <TableCell className="hidden md:table-cell">{ticket.category}</TableCell>
                              <TableCell className="hidden md:table-cell">{ticket.createdAt}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" onClick={() => handleViewTicket(ticket)}>
                                  View
                                </Button>
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

          {/* Support Stats */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Open Tickets</p>
                    <h3 className="text-2xl font-bold">{tickets.filter((t) => t.status === "open").length}</h3>
                  </div>
                  <div className="rounded-full bg-blue-100 p-2">
                    <MessageCircle className="h-5 w-5 text-blue-700" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <Clock className="mr-1 h-4 w-4 text-slate-500" />
                  <span className="text-slate-500">Avg. response time: 45 min</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">In Progress</p>
                    <h3 className="text-2xl font-bold">{tickets.filter((t) => t.status === "in_progress").length}</h3>
                  </div>
                  <div className="rounded-full bg-yellow-100 p-2">
                    <Clock className="h-5 w-5 text-yellow-700" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <User className="mr-1 h-4 w-4 text-slate-500" />
                  <span className="text-slate-500">3 support agents active</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Resolved Today</p>
                    <h3 className="text-2xl font-bold">12</h3>
                  </div>
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-5 w-5 text-green-700" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <Calendar className="mr-1 h-4 w-4 text-slate-500" />
                  <span className="text-slate-500">Avg. resolution time: 3.2 hours</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Satisfaction Rate</p>
                    <h3 className="text-2xl font-bold">94%</h3>
                  </div>
                  <div className="rounded-full bg-purple-100 p-2">
                    <Star className="h-5 w-5 text-purple-700" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <Tag className="mr-1 h-4 w-4 text-slate-500" />
                  <span className="text-slate-500">Based on 156 ratings</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Distribution */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Ticket Categories</CardTitle>
              <CardDescription>Distribution of tickets by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Delivery Issues</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Order Issues</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Billing Issues</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Technical Issues</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Account Issues</span>
                    <span className="text-sm font-medium">6%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "6%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Other</span>
                    <span className="text-sm font-medium">4%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "4%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Ticket Details Sheet */}
      <Sheet open={ticketDetailsOpen} onOpenChange={setTicketDetailsOpen}>
        <SheetContent className="sm:max-w-xl">
          {selectedTicket && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{selectedTicket.subject}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-slate-500">{selectedTicket.id}</span>
                    {getStatusBadge(selectedTicket.status)}
                    {getPriorityBadge(selectedTicket.priority)}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={selectedTicket.customer.avatar} alt={selectedTicket.customer.name} />
                      <AvatarFallback>{selectedTicket.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedTicket.customer.name}</p>
                      <p className="text-xs text-slate-500">{selectedTicket.customer.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Created</p>
                    <p className="text-sm">{selectedTicket.createdAt}</p>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{selectedTicket.category}</Badge>
                    </div>
                    {selectedTicket.assignedTo ? (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-slate-500">Assigned to:</span>
                        <span className="text-xs font-medium">{selectedTicket.assignedTo.name}</span>
                      </div>
                    ) : (
                      <Button variant="outline" size="sm" className="text-xs">
                        Assign Ticket
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-slate-500">Conversation</h3>
                  {selectedTicket.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${message.sender === "customer" ? "" : "flex-row-reverse"}`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.senderAvatar} alt={message.senderName} />
                        <AvatarFallback>{message.senderName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 max-w-[80%] ${
                          message.sender === "customer"
                            ? "bg-slate-100 text-slate-900"
                            : "bg-blue-100 text-blue-900 ml-auto"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs text-slate-500 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button className="flex-1" onClick={() => setReplyDialogOpen(true)}>
                    Reply
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Status:{" "}
                        {selectedTicket.status.replace("_", " ").charAt(0).toUpperCase() +
                          selectedTicket.status.replace("_", " ").slice(1)}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleUpdateStatus(selectedTicket, "open")}>
                        Open
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(selectedTicket, "in_progress")}>
                        In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(selectedTicket, "resolved")}>
                        Resolved
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(selectedTicket, "closed")}>
                        Closed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleUpdatePriority(selectedTicket, "low")}>
                        Low
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdatePriority(selectedTicket, "medium")}>
                        Medium
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdatePriority(selectedTicket, "high")}>
                        High
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdatePriority(selectedTicket, "urgent")}>
                        Urgent
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reply to Ticket</DialogTitle>
            <DialogDescription>
              {selectedTicket?.id} - {selectedTicket?.subject}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reply">Your Response</Label>
              <Textarea
                id="reply"
                placeholder="Type your response here..."
                rows={6}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="template" className="text-sm">
                Use Template:
              </Label>
              <Select>
                <SelectTrigger id="template" className="w-[180px]">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="greeting">Greeting</SelectItem>
                  <SelectItem value="refund">Refund Process</SelectItem>
                  <SelectItem value="apology">Apology</SelectItem>
                  <SelectItem value="followup">Follow-up</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplyDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleReply}>Send Reply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


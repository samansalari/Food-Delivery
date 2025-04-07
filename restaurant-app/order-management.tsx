"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, Clock, Filter, MoreHorizontal, Search, X } from "lucide-react"

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
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Order {
  id: string
  customer: string
  items: { name: string; quantity: number; price: number }[]
  total: number
  status: "new" | "preparing" | "ready" | "completed" | "cancelled"
  time: string
  address?: string
  phone?: string
  paymentMethod: string
}

export default function OrderManagement() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false)

  const orders: Order[] = [
    {
      id: "ORD-12345",
      customer: "John Smith",
      items: [
        { name: "Classic Cheeseburger", quantity: 2, price: 8.99 },
        { name: "Large Fries", quantity: 1, price: 3.99 },
        { name: "Chocolate Shake", quantity: 1, price: 4.5 },
      ],
      total: 26.47,
      status: "new",
      time: "5 mins ago",
      address: "123 Main St, Apt 4B, Anytown",
      phone: "(555) 123-4567",
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD-12346",
      customer: "Sarah Johnson",
      items: [
        { name: "Chicken Sandwich", quantity: 1, price: 7.99 },
        { name: "Onion Rings", quantity: 1, price: 3.49 },
        { name: "Soda", quantity: 2, price: 1.99 },
      ],
      total: 15.46,
      status: "preparing",
      time: "12 mins ago",
      address: "456 Oak Ave, Anytown",
      phone: "(555) 234-5678",
      paymentMethod: "Cash",
    },
    {
      id: "ORD-12347",
      customer: "Michael Brown",
      items: [
        { name: "Double Bacon Burger", quantity: 1, price: 10.99 },
        { name: "Sweet Potato Fries", quantity: 1, price: 4.49 },
        { name: "Milkshake", quantity: 1, price: 4.99 },
      ],
      total: 20.47,
      status: "ready",
      time: "25 mins ago",
      address: "789 Pine Rd, Anytown",
      phone: "(555) 345-6789",
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD-12348",
      customer: "Emily Davis",
      items: [
        { name: "Veggie Burger", quantity: 1, price: 8.49 },
        { name: "Side Salad", quantity: 1, price: 3.99 },
        { name: "Iced Tea", quantity: 1, price: 2.49 },
      ],
      total: 14.97,
      status: "completed",
      time: "45 mins ago",
      address: "101 Elm St, Anytown",
      phone: "(555) 456-7890",
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD-12349",
      customer: "David Wilson",
      items: [{ name: "Family Meal Deal", quantity: 1, price: 24.99 }],
      total: 24.99,
      status: "cancelled",
      time: "1 hour ago",
      address: "202 Maple Dr, Anytown",
      phone: "(555) 567-8901",
      paymentMethod: "Credit Card",
    },
  ]

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New</Badge>
      case "preparing":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Preparing</Badge>
      case "ready":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ready</Badge>
      case "completed":
        return (
          <Badge variant="outline" className="text-slate-500">
            Completed
          </Badge>
        )
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
    }
  }

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order)
    setOrderDetailsOpen(true)
  }

  const handleUpdateStatus = (order: Order, newStatus: Order["status"]) => {
    // In a real app, this would update the order status in the database
    console.log(`Updating order ${order.id} status to ${newStatus}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Order Management</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Live Orders
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search orders by ID or customer name..." className="pl-8" />
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto">
            <TabsTrigger value="all" className="flex-1 sm:flex-none">
              All Orders
            </TabsTrigger>
            <TabsTrigger value="new" className="flex-1 sm:flex-none">
              New
            </TabsTrigger>
            <TabsTrigger value="preparing" className="flex-1 sm:flex-none">
              Preparing
            </TabsTrigger>
            <TabsTrigger value="ready" className="flex-1 sm:flex-none">
              Ready
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex-1 sm:flex-none">
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>All Orders</CardTitle>
                <CardDescription>Manage all your restaurant orders</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden md:table-cell">Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="hidden md:table-cell">{order.items.length} items</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="hidden md:table-cell">{order.time}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order)}>
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
                                {order.status === "new" && (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(order, "preparing")}>
                                    Mark as Preparing
                                  </DropdownMenuItem>
                                )}
                                {order.status === "preparing" && (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(order, "ready")}>
                                    Mark as Ready
                                  </DropdownMenuItem>
                                )}
                                {order.status === "ready" && (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(order, "completed")}>
                                    Mark as Completed
                                  </DropdownMenuItem>
                                )}
                                {(order.status === "new" || order.status === "preparing") && (
                                  <DropdownMenuItem onClick={() => handleUpdateStatus(order, "cancelled")}>
                                    Cancel Order
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem>Print Receipt</DropdownMenuItem>
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
                <div className="text-sm text-slate-500">Showing 5 of 24 orders</div>
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

          <TabsContent value="new" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>New Orders</CardTitle>
                <CardDescription>Orders that need to be accepted</CardDescription>
              </CardHeader>
              <CardContent>
                {orders.filter((order) => order.status === "new").length > 0 ? (
                  <div className="space-y-4">
                    {orders
                      .filter((order) => order.status === "new")
                      .map((order) => (
                        <div key={order.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{order.id}</h3>
                                {getStatusBadge(order.status)}
                              </div>
                              <p className="text-sm text-slate-500">
                                {order.customer} • {order.time}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${order.total.toFixed(2)}</p>
                              <p className="text-sm text-slate-500">{order.items.length} items</p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" onClick={() => handleViewOrder(order)}>
                              View Details
                            </Button>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleUpdateStatus(order, "cancelled")}
                              >
                                <X className="mr-2 h-4 w-4" />
                                Reject
                              </Button>
                              <Button size="sm" onClick={() => handleUpdateStatus(order, "preparing")}>
                                <Check className="mr-2 h-4 w-4" />
                                Accept
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed text-center">
                    <div className="rounded-full bg-slate-100 p-3">
                      <Check className="h-6 w-6 text-slate-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium">No new orders</h3>
                    <p className="mt-1 text-sm text-slate-500">New orders will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Similar content for other tabs */}
          {["preparing", "ready", "completed"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>{tab.charAt(0).toUpperCase() + tab.slice(1)} Orders</CardTitle>
                  <CardDescription>
                    {tab === "preparing" && "Orders currently being prepared"}
                    {tab === "ready" && "Orders ready for pickup or delivery"}
                    {tab === "completed" && "Orders that have been delivered or picked up"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.filter((order) => order.status === tab).length > 0 ? (
                    <div className="space-y-4">
                      {orders
                        .filter((order) => order.status === tab)
                        .map((order) => (
                          <div key={order.id} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{order.id}</h3>
                                  {getStatusBadge(order.status)}
                                </div>
                                <p className="text-sm text-slate-500">
                                  {order.customer} • {order.time}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">${order.total.toFixed(2)}</p>
                                <p className="text-sm text-slate-500">{order.items.length} items</p>
                              </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex items-center justify-between">
                              <Button variant="outline" size="sm" onClick={() => handleViewOrder(order)}>
                                View Details
                              </Button>
                              {tab === "preparing" && (
                                <Button size="sm" onClick={() => handleUpdateStatus(order, "ready")}>
                                  Mark as Ready
                                </Button>
                              )}
                              {tab === "ready" && (
                                <Button size="sm" onClick={() => handleUpdateStatus(order, "completed")}>
                                  Mark as Completed
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed text-center">
                      <div className="rounded-full bg-slate-100 p-3">
                        <Clock className="h-6 w-6 text-slate-400" />
                      </div>
                      <h3 className="mt-4 text-lg font-medium">No {tab} orders</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {tab === "preparing" && "Orders being prepared will appear here"}
                        {tab === "ready" && "Orders ready for pickup will appear here"}
                        {tab === "completed" && "Completed orders will appear here"}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Order Details Sheet */}
      <Sheet open={orderDetailsOpen} onOpenChange={setOrderDetailsOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Order Details</SheetTitle>
            <SheetDescription>
              {selectedOrder?.id} • {selectedOrder?.time}
            </SheetDescription>
          </SheetHeader>
          {selectedOrder && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Status</h3>
                <div className="mt-1">{getStatusBadge(selectedOrder.status)}</div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Customer</h3>
                <div className="mt-1">
                  <p className="font-medium">{selectedOrder.customer}</p>
                  <p className="text-sm">{selectedOrder.phone}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Delivery Address</h3>
                <p className="mt-1">{selectedOrder.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Order Items</h3>
                <div className="mt-2 space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          {item.quantity}x {item.name}
                        </p>
                      </div>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="font-medium">Total</p>
                <p className="font-bold">${selectedOrder.total.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Payment Method</h3>
                <p className="mt-1">{selectedOrder.paymentMethod}</p>
              </div>
              <div className="flex flex-col gap-2">
                {selectedOrder.status === "new" && (
                  <>
                    <Button onClick={() => handleUpdateStatus(selectedOrder, "preparing")}>Accept Order</Button>
                    <Button variant="outline" onClick={() => handleUpdateStatus(selectedOrder, "cancelled")}>
                      Reject Order
                    </Button>
                  </>
                )}
                {selectedOrder.status === "preparing" && (
                  <Button onClick={() => handleUpdateStatus(selectedOrder, "ready")}>Mark as Ready</Button>
                )}
                {selectedOrder.status === "ready" && (
                  <Button onClick={() => handleUpdateStatus(selectedOrder, "completed")}>Mark as Completed</Button>
                )}
                <Button variant="outline">Print Receipt</Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}


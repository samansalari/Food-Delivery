"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronRight, Clock, DollarSign, MapPin, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface DeliveryRequest {
  id: string
  restaurant: string
  distance: string
  earnings: string
  timeEstimate: string
  address: string
}

export default function DriverHomeScreen() {
  const [isOnline, setIsOnline] = useState(true)
  const [deliveryRequests, setDeliveryRequests] = useState<DeliveryRequest[]>([
    {
      id: "order-123",
      restaurant: "Burger Palace",
      distance: "2.3 miles",
      earnings: "$8.50",
      timeEstimate: "15-20 min",
      address: "123 Main St, Anytown",
    },
    {
      id: "order-124",
      restaurant: "Pizza Heaven",
      distance: "1.5 miles",
      earnings: "$7.25",
      timeEstimate: "10-15 min",
      address: "456 Oak Ave, Anytown",
    },
    {
      id: "order-125",
      restaurant: "Sushi Express",
      distance: "3.2 miles",
      earnings: "$12.75",
      timeEstimate: "20-25 min",
      address: "789 Pine Rd, Anytown",
    },
  ])

  const handleAccept = (id: string) => {
    setDeliveryRequests(deliveryRequests.filter((request) => request.id !== id))
    // Navigate to active delivery screen in a real app
  }

  const handleDecline = (id: string) => {
    setDeliveryRequests(deliveryRequests.filter((request) => request.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-medium">Hello, Alex</h2>
              <p className="text-xs text-slate-500">Driver ID: #12345</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Offline</span>
              <Switch checked={isOnline} onCheckedChange={setIsOnline} />
              <span className="text-sm font-medium">Online</span>
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {isOnline ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-xl font-bold">Incoming Orders</h1>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Online
              </Badge>
            </div>

            {deliveryRequests.length > 0 ? (
              <div className="space-y-4">
                {deliveryRequests.map((request) => (
                  <Card key={request.id} className="overflow-hidden">
                    <CardHeader className="bg-slate-50 pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{request.restaurant}</CardTitle>
                        <Badge variant="secondary">{request.earnings}</Badge>
                      </div>
                      <CardDescription className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" /> {request.address}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-slate-500" />
                          <span>{request.distance}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-slate-500" />
                          <span>{request.timeEstimate}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between gap-2 pt-0">
                      <Button variant="outline" className="w-1/2" onClick={() => handleDecline(request.id)}>
                        Decline
                      </Button>
                      <Button
                        className="w-1/2 bg-brand-500 hover:bg-brand-600 text-white"
                        onClick={() => handleAccept(request.id)}
                      >
                        Accept
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center">
                <div className="rounded-full bg-slate-100 p-3">
                  <Clock className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No orders right now</h3>
                <p className="mt-1 text-sm text-slate-500">New delivery requests will appear here</p>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-center">
            <div className="rounded-full bg-slate-100 p-3">
              <User className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium">You're offline</h3>
            <p className="mt-1 text-sm text-slate-500">Go online to start receiving delivery requests</p>
            <Button className="mt-4 bg-brand-500 hover:bg-brand-600 text-white" onClick={() => setIsOnline(true)}>
              Go Online
            </Button>
          </div>
        )}

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/driver/earnings">
              <Card className="hover:bg-slate-50">
                <CardContent className="flex items-center p-4">
                  <DollarSign className="mr-3 h-5 w-5 text-slate-600" />
                  <div className="flex-1">
                    <h3 className="font-medium">Earnings</h3>
                    <p className="text-sm text-slate-500">View your stats</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/driver/profile">
              <Card className="hover:bg-slate-50">
                <CardContent className="flex items-center p-4">
                  <User className="mr-3 h-5 w-5 text-slate-600" />
                  <div className="flex-1">
                    <h3 className="font-medium">Profile</h3>
                    <p className="text-sm text-slate-500">Update settings</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200">
        <div className="grid grid-cols-3 gap-1 p-2">
          <Button variant="ghost" className="flex flex-col items-center justify-center h-16 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center h-16 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <span className="text-xs">Active</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center h-16 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


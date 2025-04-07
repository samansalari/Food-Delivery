"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle, ChevronDown, ChevronUp, MapPin, Phone, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ActiveDelivery() {
  const [deliveryStatus, setDeliveryStatus] = useState<"accepted" | "arrived" | "picked_up" | "delivered">("accepted")
  const [detailsExpanded, setDetailsExpanded] = useState(true)

  const getStatusBadge = () => {
    switch (deliveryStatus) {
      case "accepted":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Heading to restaurant</Badge>
      case "arrived":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">At restaurant</Badge>
      case "picked_up":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Delivering order</Badge>
      case "delivered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
    }
  }

  const getNextActionButton = () => {
    switch (deliveryStatus) {
      case "accepted":
        return (
          <Button className="w-full" onClick={() => setDeliveryStatus("arrived")}>
            Arrived at Restaurant
          </Button>
        )
      case "arrived":
        return (
          <Button className="w-full" onClick={() => setDeliveryStatus("picked_up")}>
            Order Picked Up
          </Button>
        )
      case "picked_up":
        return (
          <Button className="w-full" onClick={() => setDeliveryStatus("delivered")}>
            Order Delivered
          </Button>
        )
      case "delivered":
        return (
          <Button className="w-full" variant="outline">
            Complete
          </Button>
        )
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">Active Delivery</h1>
            <div className="flex items-center">
              <span className="text-sm text-slate-500 mr-2">Order #12345</span>
              {getStatusBadge()}
            </div>
          </div>
        </div>
      </header>

      {/* Map View */}
      <div className="relative h-64 bg-slate-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-slate-500">Map View</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex-1 p-4">
        <Card className="mb-4">
          <CardHeader className="pb-2 pt-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Burger Palace</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setDetailsExpanded(!detailsExpanded)}>
                {detailsExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </div>
          </CardHeader>
          {detailsExpanded && (
            <CardContent>
              <Tabs defaultValue="pickup">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pickup">Pickup</TabsTrigger>
                  <TabsTrigger value="dropoff">Drop-off</TabsTrigger>
                </TabsList>
                <TabsContent value="pickup" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Burger Palace</h3>
                        <p className="text-sm text-slate-500">123 Main St, Anytown</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Restaurant
                      </Button>
                      <Button variant="outline" size="sm">
                        View in Maps
                      </Button>
                    </div>
                    <div className="rounded-md bg-slate-50 p-3">
                      <h4 className="font-medium mb-2">Order Details</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>2x Cheeseburger</span>
                        </li>
                        <li className="flex justify-between">
                          <span>1x Large Fries</span>
                        </li>
                        <li className="flex justify-between">
                          <span>1x Chocolate Shake</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="dropoff" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 text-slate-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">John Smith</h3>
                        <p className="text-sm text-slate-500">456 Oak Ave, Anytown</p>
                        <p className="text-sm text-slate-500">Apt 3B, Buzz #303</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Customer
                      </Button>
                      <Button variant="outline" size="sm">
                        View in Maps
                      </Button>
                    </div>
                    <div className="rounded-md bg-slate-50 p-3">
                      <h4 className="font-medium mb-2">Delivery Notes</h4>
                      <p className="text-sm">Please leave at door. Thank you!</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          )}
        </Card>

        {/* Delivery Progress */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4">Delivery Progress</h2>
          <div className="relative">
            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
              <div className="flex">
                <div
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full ${deliveryStatus === "accepted" ? "bg-blue-600 text-white" : "bg-green-600 text-white"}`}
                >
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Order Accepted</h3>
                  <p className="text-sm text-slate-500">2:30 PM</p>
                </div>
              </div>
              <div className="flex">
                <div
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full ${deliveryStatus === "arrived" ? "bg-blue-600 text-white" : deliveryStatus === "accepted" ? "bg-slate-200 text-slate-500" : "bg-green-600 text-white"}`}
                >
                  {deliveryStatus === "accepted" ? (
                    <span className="text-sm">2</span>
                  ) : (
                    <CheckCircle className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Arrived at Restaurant</h3>
                  {deliveryStatus !== "accepted" && <p className="text-sm text-slate-500">2:45 PM</p>}
                </div>
              </div>
              <div className="flex">
                <div
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full ${deliveryStatus === "picked_up" ? "bg-blue-600 text-white" : deliveryStatus === "accepted" || deliveryStatus === "arrived" ? "bg-slate-200 text-slate-500" : "bg-green-600 text-white"}`}
                >
                  {deliveryStatus === "accepted" || deliveryStatus === "arrived" ? (
                    <span className="text-sm">3</span>
                  ) : (
                    <CheckCircle className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Order Picked Up</h3>
                  {deliveryStatus === "picked_up" || deliveryStatus === "delivered" ? (
                    <p className="text-sm text-slate-500">2:55 PM</p>
                  ) : null}
                </div>
              </div>
              <div className="flex">
                <div
                  className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full ${deliveryStatus === "delivered" ? "bg-green-600 text-white" : "bg-slate-200 text-slate-500"}`}
                >
                  {deliveryStatus !== "delivered" ? (
                    <span className="text-sm">4</span>
                  ) : (
                    <CheckCircle className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Order Delivered</h3>
                  {deliveryStatus === "delivered" && <p className="text-sm text-slate-500">3:15 PM</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Timer className="mr-2 h-5 w-5 text-slate-500" />
            <span className="text-sm font-medium">Estimated completion: 3:15 PM</span>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            $8.50
          </Badge>
        </div>
        {getNextActionButton()}
      </div>
    </div>
  )
}


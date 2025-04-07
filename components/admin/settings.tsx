"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  Cloud,
  CreditCard,
  DollarSign,
  Globe,
  Key,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Moon,
  Package,
  PaintBucket,
  PieChart,
  Save,
  Settings,
  ShieldAlert,
  ShoppingBag,
  Sun,
  User,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [language, setLanguage] = useState("english")
  const [timezone, setTimezone] = useState("utc")
  const [currency, setCurrency] = useState("usd")
  const [primaryColor, setPrimaryColor] = useState("blue")

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
              <Button variant="ghost" className="w-full justify-start bg-slate-800 text-white" asChild>
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
                      className="w-full justify-start bg-slate-800 text-white"
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
            <h1 className="text-lg font-semibold">Settings</h1>
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
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Platform Settings</h2>
            <p className="text-slate-500">Manage your account settings and preferences</p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-64">
                <TabsList className="flex flex-col h-auto bg-transparent p-0 mb-6">
                  <TabsTrigger
                    value="general"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    General
                  </TabsTrigger>
                  <TabsTrigger
                    value="account"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="appearance"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <PaintBucket className="mr-2 h-4 w-4" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger
                    value="billing"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </TabsTrigger>
                  <TabsTrigger
                    value="api"
                    className="justify-start px-4 py-2 h-10 data-[state=active]:bg-slate-100 data-[state=active]:shadow-none"
                  >
                    <Key className="mr-2 h-4 w-4" />
                    API Keys
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1">
                <TabsContent value="general" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                      <CardDescription>Manage your general platform settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="platform-name">Platform Name</Label>
                        <Input id="platform-name" defaultValue="Food Delivery Admin" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Contact Email</Label>
                        <Input id="contact-email" type="email" defaultValue="support@fooddelivery.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="support-phone">Support Phone</Label>
                        <Input id="support-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={language} onValueChange={setLanguage}>
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="chinese">Chinese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select value={timezone} onValueChange={setTimezone}>
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                            <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                            <SelectItem value="cst">Central Time (GMT-6)</SelectItem>
                            <SelectItem value="mst">Mountain Time (GMT-7)</SelectItem>
                            <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="cad">CAD ($)</SelectItem>
                            <SelectItem value="aud">AUD ($)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="autosave">Auto-save Changes</Label>
                          <p className="text-sm text-slate-500">Automatically save changes as you make them</p>
                        </div>
                        <Switch id="autosave" checked={autoSave} onCheckedChange={setAutoSave} />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="account" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="/placeholder.svg" alt="Admin" />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline">Change Avatar</Button>
                          <Button variant="outline" className="text-red-500 hover:text-red-600">
                            Remove
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="Admin" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="User" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="admin@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="admin_user" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select defaultValue="admin">
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Administrator</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="support">Support Agent</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Tell us about yourself" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Settings</CardTitle>
                      <CardDescription>Manage how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>New Orders</Label>
                            <p className="text-sm text-slate-500">Receive notifications for new orders</p>
                          </div>
                          <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Support Tickets</Label>
                            <p className="text-sm text-slate-500">Receive notifications for new support tickets</p>
                          </div>
                          <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>System Alerts</Label>
                            <p className="text-sm text-slate-500">Receive important system alerts</p>
                          </div>
                          <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Push Notifications</h3>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Enable Push Notifications</Label>
                            <p className="text-sm text-slate-500">Receive notifications in your browser</p>
                          </div>
                          <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">SMS Notifications</h3>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Enable SMS Notifications</Label>
                            <p className="text-sm text-slate-500">Receive notifications via SMS</p>
                          </div>
                          <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                        </div>
                        {smsNotifications && (
                          <div className="space-y-2">
                            <Label htmlFor="phone-number">Phone Number</Label>
                            <Input id="phone-number" type="tel" placeholder="+1 (555) 123-4567" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Notification Frequency</h3>
                        <RadioGroup defaultValue="realtime">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="realtime" id="realtime" />
                            <Label htmlFor="realtime">Real-time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hourly" id="hourly" />
                            <Label htmlFor="hourly">Hourly digest</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="daily" id="daily" />
                            <Label htmlFor="daily">Daily digest</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>Manage your account security</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Change Password</h3>
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button>Update Password</Button>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Two-Factor Authentication</Label>
                            <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                          </div>
                          <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                        </div>
                        {twoFactorAuth && (
                          <div className="rounded-md bg-slate-50 p-4">
                            <div className="flex items-center gap-3">
                              <div className="rounded-full bg-slate-200 p-2">
                                <ShieldAlert className="h-5 w-5 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Two-factor authentication is enabled</h4>
                                <p className="text-sm text-slate-500">
                                  Your account is secured with two-factor authentication
                                </p>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Button variant="outline" size="sm">
                                Configure 2FA
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Login Sessions</h3>
                        <div className="space-y-4">
                          <div className="rounded-md border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Current Session</h4>
                                <p className="text-sm text-slate-500">Chrome on Windows • New York, USA</p>
                                <p className="text-xs text-slate-400">Started 2 hours ago</p>
                              </div>
                              <Badge>Current</Badge>
                            </div>
                          </div>
                          <div className="rounded-md border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Previous Session</h4>
                                <p className="text-sm text-slate-500">Safari on macOS • San Francisco, USA</p>
                                <p className="text-xs text-slate-400">2 days ago</p>
                              </div>
                              <Button variant="outline" size="sm">
                                Revoke
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="appearance" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance Settings</CardTitle>
                      <CardDescription>Customize the look and feel of the platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Theme</h3>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroup defaultValue="light" className="flex gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="light" id="light" />
                                <Label htmlFor="light" className="flex items-center gap-1.5">
                                  <Sun className="h-4 w-4" />
                                  Light
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="dark" id="dark" />
                                <Label htmlFor="dark" className="flex items-center gap-1.5">
                                  <Moon className="h-4 w-4" />
                                  Dark
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="system" id="system" />
                                <Label htmlFor="system">System</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Primary Color</h3>
                        <RadioGroup
                          value={primaryColor}
                          onValueChange={setPrimaryColor}
                          className="flex flex-wrap gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="blue" id="blue" className="border-blue-500" />
                            <Label htmlFor="blue" className="flex items-center gap-1.5">
                              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                              Blue
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="green" id="green" className="border-green-500" />
                            <Label htmlFor="green" className="flex items-center gap-1.5">
                              <div className="h-4 w-4 rounded-full bg-green-500"></div>
                              Green
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="purple" id="purple" className="border-purple-500" />
                            <Label htmlFor="purple" className="flex items-center gap-1.5">
                              <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                              Purple
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="orange" id="orange" className="border-orange-500" />
                            <Label htmlFor="orange" className="flex items-center gap-1.5">
                              <div className="h-4 w-4 rounded-full bg-orange-500"></div>
                              Orange
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Font Size</h3>
                        <RadioGroup defaultValue="medium" className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="small" id="small" />
                            <Label htmlFor="small">Small</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medium" id="medium" />
                            <Label htmlFor="medium">Medium</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="large" id="large" />
                            <Label htmlFor="large">Large</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Layout Density</h3>
                        <RadioGroup defaultValue="comfortable" className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="compact" />
                            <Label htmlFor="compact">Compact</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="comfortable" />
                            <Label htmlFor="comfortable">Comfortable</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="billing" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing Settings</CardTitle>
                      <CardDescription>Manage your billing information and subscription</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Current Plan</h3>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Enterprise Plan</h4>
                              <p className="text-sm text-slate-500">$499/month • Renews on July 1, 2023</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              Change Plan
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                              Cancel Subscription
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Payment Method</h3>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-slate-100 p-2">
                                <CreditCard className="h-5 w-5 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Visa ending in 4242</h4>
                                <p className="text-sm text-slate-500">Expires 12/2024</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Billing Information</h3>
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" defaultValue="Food Delivery Inc." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-email">Billing Email</Label>
                          <Input id="billing-email" type="email" defaultValue="billing@fooddelivery.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" defaultValue="123 Main St" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" defaultValue="San Francisco" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State/Province</Label>
                            <Input id="state" defaultValue="CA" />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP/Postal Code</Label>
                            <Input id="zip" defaultValue="94105" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select defaultValue="us">
                              <SelectTrigger id="country">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="api" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Keys</CardTitle>
                      <CardDescription>Manage your API keys for external integrations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium">Your API Keys</h3>
                          <Button size="sm">
                            <Key className="mr-2 h-4 w-4" />
                            Generate New Key
                          </Button>
                        </div>

                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Production API Key</h4>
                              <p className="text-sm text-slate-500">Created on May 15, 2023</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                                Revoke
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <Input value="sk_live_xxxxxxxxxxxxxxxxxxxxx" readOnly />
                          </div>
                        </div>

                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Test API Key</h4>
                              <p className="text-sm text-slate-500">Created on May 15, 2023</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                                Revoke
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2">
                            <Input value="sk_test_xxxxxxxxxxxxxxxxxxxxx" readOnly />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Webhooks</h3>
                        <div className="space-y-2">
                          <Label htmlFor="webhook-url">Webhook URL</Label>
                          <Input id="webhook-url" placeholder="https://your-app.com/webhook" />
                        </div>
                        <div className="space-y-2">
                          <Label>Webhook Events</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="order-created" />
                              <Label htmlFor="order-created">Order Created</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="order-updated" />
                              <Label htmlFor="order-updated">Order Updated</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="order-delivered" />
                              <Label htmlFor="order-delivered">Order Delivered</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="payment-received" />
                              <Label htmlFor="payment-received">Payment Received</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">External Integrations</h3>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-slate-100 p-2">
                                <Cloud className="h-5 w-5 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Stripe</h4>
                                <p className="text-sm text-slate-500">Payment processing</p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Connected</Badge>
                          </div>
                        </div>

                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-slate-100 p-2">
                                <Globe className="h-5 w-5 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Google Maps</h4>
                                <p className="text-sm text-slate-500">Location services</p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Connected</Badge>
                          </div>
                        </div>

                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-slate-100 p-2">
                                <Mail className="h-5 w-5 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Mailchimp</h4>
                                <p className="text-sm text-slate-500">Email marketing</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}


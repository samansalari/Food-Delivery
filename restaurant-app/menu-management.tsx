"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  MenuIcon,
  Plus,
  Search,
  Settings,
  Trash2,
  Edit,
  Coffee,
  Pizza,
  Utensils,
  Salad,
  IceCream,
  Wine,
  Sandwich,
  Soup,
  Beef,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// Menu item type definition
interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  available: boolean
}

// Menu categories with icons
const categories = [
  { id: "appetizers", name: "Appetizers", icon: <Soup className="h-4 w-4 mr-2" /> },
  { id: "main-courses", name: "Main Courses", icon: <Utensils className="h-4 w-4 mr-2" /> },
  { id: "pizzas", name: "Pizzas", icon: <Pizza className="h-4 w-4 mr-2" /> },
  { id: "burgers", name: "Burgers", icon: <Sandwich className="h-4 w-4 mr-2" /> },
  { id: "salads", name: "Salads", icon: <Salad className="h-4 w-4 mr-2" /> },
  { id: "steaks", name: "Steaks", icon: <Beef className="h-4 w-4 mr-2" /> },
  { id: "desserts", name: "Desserts", icon: <IceCream className="h-4 w-4 mr-2" /> },
  { id: "beverages", name: "Beverages", icon: <Coffee className="h-4 w-4 mr-2" /> },
  { id: "alcoholic", name: "Alcoholic Drinks", icon: <Wine className="h-4 w-4 mr-2" /> },
]

// Sample menu items
const sampleMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    category: "pizzas",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "2",
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 8.99,
    category: "salads",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "3",
    name: "Cheeseburger",
    description: "Beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 10.99,
    category: "burgers",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "4",
    name: "Tiramisu",
    description: "Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: 7.99,
    category: "desserts",
    image: "/placeholder.svg?height=100&width=100",
    available: false,
  },
  {
    id: "5",
    name: "Espresso",
    description: "Strong Italian coffee",
    price: 3.99,
    category: "beverages",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "6",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs",
    price: 4.99,
    category: "appetizers",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "7",
    name: "Ribeye Steak",
    description: "12oz ribeye steak with mashed potatoes and vegetables",
    price: 24.99,
    category: "steaks",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
  {
    id: "8",
    name: "Red Wine",
    description: "House red wine, glass",
    price: 6.99,
    category: "alcoholic",
    image: "/placeholder.svg?height=100&width=100",
    available: true,
  },
]

export default function MenuManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>(sampleMenuItems)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // Filter menu items based on search query and selected category
  const filteredMenuItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Handle adding a new menu item
  const handleAddMenuItem = (newItem: Omit<MenuItem, "id">) => {
    const id = `${menuItems.length + 1}`
    setMenuItems([...menuItems, { ...newItem, id }])
    setIsAddDialogOpen(false)
  }

  // Handle updating a menu item
  const handleUpdateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems(menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
    setEditingItem(null)
  }

  // Handle deleting a menu item
  const handleDeleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
  }

  // Handle toggling item availability
  const handleToggleAvailability = (id: string) => {
    setMenuItems(menuItems.map((item) => (item.id === id ? { ...item, available: !item.available } : item)))
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-white border-r border-slate-200 md:flex">
        <div className="flex h-14 items-center border-b border-slate-200 px-4">
          <Link href="/restaurant/dashboard" className="flex items-center gap-2 font-semibold">
            <Utensils className="h-5 w-5" />
            <span>Restaurant Dashboard</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-6">
          <div className="px-4 mb-8">
            <h2 className="mb-4 px-2 text-sm font-semibold tracking-tight text-slate-500">Menu Management</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
              <Button
                variant={selectedCategory === "all" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedCategory("all")}
              >
                <MenuIcon className="h-4 w-4 mr-2" />
                <span>All Items</span>
              </Button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex h-14 items-center border-b border-slate-200 px-4">
                <Link href="/restaurant/dashboard" className="flex items-center gap-2 font-semibold">
                  <Utensils className="h-5 w-5" />
                  <span>Restaurant Dashboard</span>
                </Link>
              </div>
              <nav className="flex-1 overflow-auto py-6">
                <div className="px-4 mb-8">
                  <h2 className="mb-4 px-2 text-sm font-semibold tracking-tight text-slate-500">Menu Management</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedCategory(category.id)
                          setSidebarOpen(false)
                        }}
                      >
                        {category.icon}
                        <span>{category.name}</span>
                      </Button>
                    ))}
                    <Button
                      variant={selectedCategory === "all" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        setSelectedCategory("all")
                        setSidebarOpen(false)
                      }}
                    >
                      <MenuIcon className="h-4 w-4 mr-2" />
                      <span>All Items</span>
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Menu Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                type="search"
                placeholder="Search menu items..."
                className="w-full bg-white pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="Restaurant" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                {selectedCategory === "all"
                  ? "All Menu Items"
                  : categories.find((c) => c.id === selectedCategory)?.name || "Menu Items"}
              </h2>
              <p className="text-slate-500">
                {filteredMenuItems.length} {filteredMenuItems.length === 1 ? "item" : "items"} found
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Add New Item</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add New Menu Item</DialogTitle>
                  <DialogDescription>
                    Fill in the details for the new menu item. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    handleAddMenuItem({
                      name: formData.get("name") as string,
                      description: formData.get("description") as string,
                      price: Number.parseFloat(formData.get("price") as string),
                      category: formData.get("category") as string,
                      image: "/placeholder.svg?height=100&width=100",
                      available: true,
                    })
                  }}
                  className="space-y-4 py-4"
                >
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" name="name" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input id="description" name="description" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">
                      Price
                    </Label>
                    <Input id="price" name="price" type="number" step="0.01" min="0" className="col-span-3" required />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <select
                      id="category"
                      name="category"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Item</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48 bg-slate-100">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                  <Badge variant={item.available ? "default" : "destructive"} className="absolute right-2 top-2">
                    {item.available ? "Available" : "Unavailable"}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{item.description}</CardDescription>
                    </div>
                    <div className="text-lg font-bold">${item.price.toFixed(2)}</div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                      {categories.find((c) => c.id === item.category)?.icon || <Utensils className="h-3 w-3" />}
                    </div>
                    <span className="text-sm text-slate-500">
                      {categories.find((c) => c.id === item.category)?.name || "Other"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Switch checked={item.available} onCheckedChange={() => handleToggleAvailability(item.id)} />
                    <span className="text-sm">{item.available ? "Available" : "Unavailable"}</span>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => setEditingItem(item)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Edit Menu Item</DialogTitle>
                          <DialogDescription>
                            Update the details for this menu item. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        {editingItem && (
                          <form
                            onSubmit={(e) => {
                              e.preventDefault()
                              const formData = new FormData(e.currentTarget)
                              handleUpdateMenuItem({
                                id: editingItem.id,
                                name: formData.get("name") as string,
                                description: formData.get("description") as string,
                                price: Number.parseFloat(formData.get("price") as string),
                                category: formData.get("category") as string,
                                image: editingItem.image,
                                available: editingItem.available,
                              })
                            }}
                            className="space-y-4 py-4"
                          >
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="edit-name"
                                name="name"
                                defaultValue={editingItem.name}
                                className="col-span-3"
                                required
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-description" className="text-right">
                                Description
                              </Label>
                              <Input
                                id="edit-description"
                                name="description"
                                defaultValue={editingItem.description}
                                className="col-span-3"
                                required
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-price" className="text-right">
                                Price
                              </Label>
                              <Input
                                id="edit-price"
                                name="price"
                                type="number"
                                step="0.01"
                                min="0"
                                defaultValue={editingItem.price}
                                className="col-span-3"
                                required
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-category" className="text-right">
                                Category
                              </Label>
                              <select
                                id="edit-category"
                                name="category"
                                defaultValue={editingItem.category}
                                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                              >
                                {categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save Changes</Button>
                            </DialogFooter>
                          </form>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:bg-red-50 hover:text-red-600"
                      onClick={() => handleDeleteMenuItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredMenuItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-slate-100 p-3">
                <MenuIcon className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No menu items found</h3>
              <p className="mt-1 text-center text-slate-500">
                {searchQuery ? "Try adjusting your search or filters" : "Add your first menu item to get started"}
              </p>
              <Button className="mt-6" onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New Item
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}


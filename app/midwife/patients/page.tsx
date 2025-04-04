"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  Filter,
  Home,
  MessageCircle,
  Search,
  Settings,
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MidwifePatients() {
  const [searchQuery, setSearchQuery] = useState("")
  const [trimesterFilter, setTrimesterFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 32,
      week: 28,
      trimester: "2nd",
      dueDate: "Jun 15, 2025",
      lastVisit: "Mar 15, 2025",
      nextVisit: "Mar 29, 2025",
      status: "normal",
      riskLevel: "low",
    },
    {
      id: 2,
      name: "Emily Parker",
      age: 29,
      week: 35,
      trimester: "3rd",
      dueDate: "Apr 20, 2025",
      lastVisit: "Mar 10, 2025",
      nextVisit: "Mar 17, 2025",
      status: "attention",
      riskLevel: "medium",
    },
    {
      id: 3,
      name: "Michelle Wong",
      age: 27,
      week: 16,
      trimester: "2nd",
      dueDate: "Sep 5, 2025",
      lastVisit: "Mar 12, 2025",
      nextVisit: "Apr 2, 2025",
      status: "normal",
      riskLevel: "low",
    },
    {
      id: 4,
      name: "Jessica Miller",
      age: 34,
      week: 24,
      trimester: "2nd",
      dueDate: "Jul 10, 2025",
      lastVisit: "Mar 5, 2025",
      nextVisit: "Mar 26, 2025",
      status: "normal",
      riskLevel: "low",
    },
    {
      id: 5,
      name: "Olivia Wilson",
      age: 31,
      week: 32,
      trimester: "3rd",
      dueDate: "May 8, 2025",
      lastVisit: "Feb 20, 2025",
      nextVisit: "Mar 20, 2025",
      status: "attention",
      riskLevel: "medium",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      age: 36,
      week: 38,
      trimester: "3rd",
      dueDate: "Apr 5, 2025",
      lastVisit: "Mar 14, 2025",
      nextVisit: "Mar 21, 2025",
      status: "urgent",
      riskLevel: "high",
    },
    {
      id: 7,
      name: "Ava Thompson",
      age: 25,
      week: 10,
      trimester: "1st",
      dueDate: "Oct 20, 2025",
      lastVisit: "Mar 8, 2025",
      nextVisit: "Apr 8, 2025",
      status: "normal",
      riskLevel: "low",
    },
    {
      id: 8,
      name: "Emma Rodriguez",
      age: 30,
      week: 6,
      trimester: "1st",
      dueDate: "Nov 15, 2025",
      lastVisit: "Mar 10, 2025",
      nextVisit: "Apr 10, 2025",
      status: "normal",
      riskLevel: "low",
    },
  ]

  const filteredPatients = patients.filter((patient) => {
    // Apply search filter
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase())

    // Apply trimester filter
    const matchesTrimester = trimesterFilter === "all" || patient.trimester === trimesterFilter

    // Apply status filter
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter

    return matchesSearch && matchesTrimester && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen sticky top-0">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-primary">MaternalConnect</h2>
            <p className="text-xs text-muted-foreground">Midwife Portal</p>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <Link href="/midwife/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/midwife/patients">
              <Button variant="secondary" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                My Patients
              </Button>
            </Link>
            <Link href="/appointments">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Appointments
              </Button>
            </Link>
            <Link href="/messages">
              <Button variant="ghost" className="w-full justify-start">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
            </Link>
            <Link href="/midwife/availability">
              <Button variant="ghost" className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                My Availability
              </Button>
            </Link>
            <Link href="/midwife/records">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Patient Records
              </Button>
            </Link>
          </nav>

          <div className="p-4 border-t">
            <Link href="/profile">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
                  <AvatarFallback>RT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Rebecca Taylor</p>
                  <p className="text-xs text-muted-foreground">Certified Midwife</p>
                </div>
              </div>
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <header className="bg-white border-b sticky top-0 z-10">
            <div className="container flex items-center justify-between h-16 px-4">
              <div className="md:hidden font-bold text-xl text-primary">MaternalConnect</div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search patients..." />
                  <Input
                    type="search"
                    placeholder="Search patients..."
                    className="w-[200px] md:w-[300px] pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px]">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[300px] overflow-auto">
                      {[1, 2, 3].map((i) => (
                        <DropdownMenuItem key={i} className="cursor-pointer p-3">
                          <div className="flex gap-3 items-start">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Patient" />
                              <AvatarFallback>P{i}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">
                                {i === 1
                                  ? "Sarah Johnson requested an appointment"
                                  : i === 2
                                    ? "New message from Emily Parker"
                                    : "Michelle Wong updated her health data"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {i === 1 ? "10 minutes ago" : i === 2 ? "1 hour ago" : "Yesterday"}
                              </p>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer justify-center">
                      <Button variant="ghost" className="w-full text-primary">
                        View All Notifications
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/settings">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/profile" className="hidden md:block">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
                    <AvatarFallback>RT</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </header>

          <div className="container py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">My Patients</h1>
                <p className="text-muted-foreground">Manage and monitor your patients</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button>
                  <Users className="h-4 w-4 mr-2" />
                  Add New Patient
                </Button>
              </div>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="grid gap-2 flex-1">
                    <label className="text-sm font-medium">Search</label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search by name, ID, or condition..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2 w-full md:w-[180px]">
                    <label className="text-sm font-medium">Trimester</label>
                    <Select value={trimesterFilter} onValueChange={setTrimesterFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Trimesters" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Trimesters</SelectItem>
                        <SelectItem value="1st">1st Trimester</SelectItem>
                        <SelectItem value="2nd">2nd Trimester</SelectItem>
                        <SelectItem value="3rd">3rd Trimester</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2 w-full md:w-[180px]">
                    <label className="text-sm font-medium">Status</label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="attention">Needs Attention</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="h-10">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Patient List</CardTitle>
                <CardDescription>
                  {filteredPatients.length} {filteredPatients.length === 1 ? "patient" : "patients"} found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">Patient</TableHead>
                        <TableHead>Week</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>Next Visit</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPatients.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={patient.name} />
                                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{patient.name}</div>
                                <div className="text-xs text-muted-foreground">{patient.age} years old</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{patient.week} weeks</Badge>
                            <span className="text-xs text-muted-foreground block mt-1">
                              {patient.trimester} Trimester
                            </span>
                          </TableCell>
                          <TableCell>{patient.dueDate}</TableCell>
                          <TableCell>{patient.lastVisit}</TableCell>
                          <TableCell>{patient.nextVisit}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                patient.riskLevel === "high"
                                  ? "border-red-200 bg-red-50 text-red-700"
                                  : patient.riskLevel === "medium"
                                    ? "border-amber-200 bg-amber-50 text-amber-700"
                                    : "border-green-200 bg-green-50 text-green-700"
                              }
                            >
                              {patient.riskLevel.charAt(0).toUpperCase() + patient.riskLevel.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  patient.status === "urgent"
                                    ? "bg-red-500"
                                    : patient.status === "attention"
                                      ? "bg-amber-500"
                                      : "bg-green-500"
                                }`}
                              />
                              <span
                                className={
                                  patient.status === "urgent"
                                    ? "text-red-700"
                                    : patient.status === "attention"
                                      ? "text-amber-700"
                                      : "text-green-700"
                                }
                              >
                                {patient.status === "normal"
                                  ? "Normal"
                                  : patient.status === "attention"
                                    ? "Needs Attention"
                                    : "Urgent"}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Link href={`/midwife/patient/${patient.id}`} className="w-full">
                                    View Profile
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                                <DropdownMenuItem>Send Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>View Medical Records</DropdownMenuItem>
                                <DropdownMenuItem>View Birth Plan</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}


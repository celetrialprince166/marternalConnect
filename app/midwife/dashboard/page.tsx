"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bell, Calendar, Clock, Filter, Home, MessageCircle, Search, Settings, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PregnantWomanIcon, MidwifeIcon, HeartbeatIcon } from "@/components/pregnancy-icons"
import { AnimatedWave } from "@/components/animated-wave"

export default function MidwifeDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/20 to-secondary/20">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen sticky top-0 shadow-md">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-primary flex items-center">
              <MidwifeIcon className="mr-2" />
              MaternalConnect
            </h2>
            <p className="text-xs text-muted-foreground">Midwife Portal</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <Link href="/midwife/dashboard">
              <Button variant="secondary" className="w-full justify-start rounded-full">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/midwife/patients">
              <Button variant="ghost" className="w-full justify-start rounded-full">
                <Users className="h-4 w-4 mr-2" />
                My Patients
              </Button>
            </Link>
            <Link href="/appointments">
              <Button variant="ghost" className="w-full justify-start rounded-full">
                <Calendar className="h-4 w-4 mr-2" />
                Appointments
              </Button>
            </Link>
            <Link href="/messages">
              <Button variant="ghost" className="w-full justify-start rounded-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
            </Link>
            <Link href="/midwife/availability">
              <Button variant="ghost" className="w-full justify-start rounded-full">
                <Clock className="h-4 w-4 mr-2" />
                My Availability
              </Button>
            </Link>
          </nav>

          <div className="p-4 border-t">
            <Link href="/profile">
              <div className="flex items-center gap-3 p-2 rounded-full hover:bg-secondary/10 transition-all duration-300">
                <Avatar className="ring-2 ring-secondary/20">
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
          <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
            <div className="container flex items-center justify-between h-16 px-4">
              <div className="md:hidden font-bold text-xl text-primary flex items-center">
                <MidwifeIcon className="mr-2" />
                MaternalConnect
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search patients..."
                    className="w-[200px] md:w-[300px] pl-8 rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px] rounded-xl">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[300px] overflow-auto">
                      {[1, 2, 3].map((i) => (
                        <DropdownMenuItem
                          key={i}
                          className="cursor-pointer p-3 hover:bg-secondary/10 rounded-lg focus:bg-secondary/10"
                        >
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
                  <Avatar className="ring-2 ring-secondary/20 transition-all hover:ring-primary/50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text flex items-center">
                  <MidwifeIcon className="mr-2 text-primary" />
                  Welcome back, Rebecca
                </h1>
                <p className="text-muted-foreground">Here's what's happening with your patients today</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="maternal" className="rounded-full hover-lift">
                  <Calendar className="h-4 w-4 mr-2" />
                  New Appointment
                </Button>
                <Button variant="outline" className="rounded-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card gradient="primary" className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">24</p>
                      <p className="text-sm text-primary/80">Active Patients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card gradient="secondary" className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-secondary/30 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-secondary-foreground">8</p>
                      <p className="text-sm text-secondary-foreground/80">Today's Appointments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card gradient="accent" className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="bg-accent/30 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-accent-foreground">12</p>
                      <p className="text-sm text-accent-foreground/80">Unread Messages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="today">
              <TabsList className="mb-6 bg-white p-1 rounded-full">
                <TabsTrigger
                  value="today"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Today's Schedule
                </TabsTrigger>
                <TabsTrigger
                  value="patients"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Recent Patients
                </TabsTrigger>
                <TabsTrigger
                  value="alerts"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Patient Alerts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="today">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 text-primary" />
                      Today's Appointments
                    </CardTitle>
                    <CardDescription>You have 8 appointments scheduled for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          time: "09:00 AM",
                          name: "Sarah Johnson",
                          type: "Prenatal Checkup",
                          week: "28",
                          status: "Confirmed",
                        },
                        {
                          time: "10:30 AM",
                          name: "Emily Parker",
                          type: "Ultrasound Scan",
                          week: "35",
                          status: "Confirmed",
                        },
                        {
                          time: "11:45 AM",
                          name: "Michelle Wong",
                          type: "Initial Consultation",
                          week: "16",
                          status: "Confirmed",
                        },
                        {
                          time: "01:30 PM",
                          name: "Jessica Miller",
                          type: "Prenatal Checkup",
                          week: "24",
                          status: "Rescheduled",
                        },
                      ].map((appointment, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl border hover:bg-secondary/10 transition-colors duration-300 hover-lift"
                        >
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{appointment.time}</h3>
                                <Badge
                                  variant={appointment.status === "Confirmed" ? "secondary" : "outline"}
                                  className="rounded-full"
                                >
                                  {appointment.status}
                                </Badge>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="rounded-full">
                                  View Details
                                </Button>
                                <Button size="sm" variant="maternal" className="rounded-full">
                                  Start Session
                                </Button>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={appointment.name} />
                                  <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{appointment.name}</span>
                                <Badge variant="secondary" className="ml-2 rounded-full">
                                  {appointment.week} weeks
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{appointment.type}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="patients">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PregnantWomanIcon className="mr-2 text-primary" />
                      Recent Patient Activity
                    </CardTitle>
                    <CardDescription>Updates from your patients in the last 48 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Sarah Johnson",
                          week: "28",
                          activity: "Updated health tracker with new blood pressure readings",
                          time: "2 hours ago",
                          concern: false,
                        },
                        {
                          name: "Emily Parker",
                          week: "35",
                          activity: "Reported increased swelling in ankles and mild headache",
                          time: "Yesterday",
                          concern: true,
                        },
                        {
                          name: "Michelle Wong",
                          week: "16",
                          activity: "Completed first trimester questionnaire",
                          time: "Yesterday",
                          concern: false,
                        },
                        {
                          name: "Jessica Miller",
                          week: "24",
                          activity: "Rescheduled appointment from Tuesday to Thursday",
                          time: "2 days ago",
                          concern: false,
                        },
                      ].map((patient, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl border hover:bg-secondary/10 transition-colors duration-300 hover-lift"
                        >
                          <Avatar className="h-10 w-10 ring-2 ring-secondary/20">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={patient.name} />
                            <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{patient.name}</h3>
                                <Badge variant="secondary" className="rounded-full">
                                  {patient.week} weeks
                                </Badge>
                                {patient.concern && (
                                  <Badge variant="destructive" className="rounded-full animate-pulse">
                                    Needs Attention
                                  </Badge>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="rounded-full">
                                  View Profile
                                </Button>
                                <Button size="sm" variant="maternal" className="rounded-full">
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  Message
                                </Button>
                              </div>
                            </div>
                            <p className="text-sm mt-1">{patient.activity}</p>
                            <p className="text-xs text-muted-foreground mt-1">{patient.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HeartbeatIcon className="mr-2 text-primary" />
                      Patient Alerts
                    </CardTitle>
                    <CardDescription>Patients who may need your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Emily Parker",
                          week: "35",
                          alert: "Reported high blood pressure (140/90) and headache",
                          severity: "high",
                        },
                        {
                          name: "Olivia Wilson",
                          week: "32",
                          alert: "Missed last two appointments",
                          severity: "medium",
                        },
                        {
                          name: "Sophia Martinez",
                          week: "38",
                          alert: "Experiencing irregular contractions",
                          severity: "high",
                        },
                      ].map((alert, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-4 p-4 rounded-xl border hover-lift ${
                            alert.severity === "high"
                              ? "bg-red-50/50 border-red-200 hover:bg-red-50/80"
                              : "bg-amber-50/50 border-amber-200 hover:bg-amber-50/80"
                          } transition-colors duration-300`}
                        >
                          <div
                            className={`p-3 rounded-full ${alert.severity === "high" ? "bg-red-100" : "bg-amber-100"}`}
                          >
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
                              className={`${alert.severity === "high" ? "text-red-600" : "text-amber-600"} ${alert.severity === "high" ? "animate-pulse" : ""}`}
                            >
                              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                              <line x1="12" y1="9" x2="12" y2="13"></line>
                              <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{alert.name}</h3>
                                <Badge variant="secondary" className="rounded-full">
                                  {alert.week} weeks
                                </Badge>
                                <Badge
                                  variant={alert.severity === "high" ? "destructive" : "outline"}
                                  className={`rounded-full ${alert.severity === "high" ? "" : "text-amber-600 border-amber-300 bg-amber-50"} ${alert.severity === "high" ? "animate-pulse" : ""}`}
                                >
                                  {alert.severity === "high" ? "Urgent" : "Attention Needed"}
                                </Badge>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="rounded-full">
                                  View Records
                                </Button>
                                <Button
                                  size="sm"
                                  className={`rounded-full ${alert.severity === "high" ? "bg-red-600 hover:bg-red-700" : ""}`}
                                >
                                  Take Action
                                </Button>
                              </div>
                            </div>
                            <p
                              className={`text-sm mt-1 ${
                                alert.severity === "high" ? "text-red-600" : "text-amber-600"
                              }`}
                            >
                              {alert.alert}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      <AnimatedWave className="mt-12" color="#f3e8ff" height={100} />
    </div>
  )
}


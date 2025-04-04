"use client"

import { Textarea } from "@/components/ui/textarea"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Bell,
  CalendarIcon,
  Clock,
  FileText,
  Home,
  MessageCircle,
  Plus,
  Save,
  Settings,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MidwifeAvailability() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [workingDays, setWorkingDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  })

  const toggleWorkingDay = (day: keyof typeof workingDays) => {
    setWorkingDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

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
              <Button variant="ghost" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                My Patients
              </Button>
            </Link>
            <Link href="/appointments">
              <Button variant="ghost" className="w-full justify-start">
                <CalendarIcon className="h-4 w-4 mr-2" />
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
              <Button variant="secondary" className="w-full justify-start">
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
              <div className="flex items-center gap-4">
                <Link href="/midwife/dashboard" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <h1 className="font-bold text-xl">My Availability</h1>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                </Button>

                <Link href="/settings">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/profile">
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
                <h1 className="text-2xl font-bold">Manage Your Availability</h1>
                <p className="text-muted-foreground">Set your working hours and appointment slots</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>

            <Tabs defaultValue="schedule">
              <TabsList className="mb-6">
                <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                <TabsTrigger value="time-off">Time Off</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Working Days</CardTitle>
                    <CardDescription>Set your regular working days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                      {[
                        { day: "monday", label: "Monday" },
                        { day: "tuesday", label: "Tuesday" },
                        { day: "wednesday", label: "Wednesday" },
                        { day: "thursday", label: "Thursday" },
                        { day: "friday", label: "Friday" },
                        { day: "saturday", label: "Saturday" },
                        { day: "sunday", label: "Sunday" },
                      ].map((item) => (
                        <div
                          key={item.day}
                          className={`p-4 rounded-lg border text-center ${
                            workingDays[item.day as keyof typeof workingDays]
                              ? "bg-primary/10 border-primary/20"
                              : "bg-muted/30"
                          }`}
                        >
                          <p className="font-medium mb-2">{item.label}</p>
                          <div className="flex items-center justify-center">
                            <Switch
                              checked={workingDays[item.day as keyof typeof workingDays]}
                              onCheckedChange={() => toggleWorkingDay(item.day as keyof typeof workingDays)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Working Hours</CardTitle>
                    <CardDescription>Set your regular working hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Weekdays (Mon-Fri)</h3>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="weekday-start">Start Time</Label>
                                <Input id="weekday-start" type="time" defaultValue="09:00" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="weekday-end">End Time</Label>
                                <Input id="weekday-end" type="time" defaultValue="17:00" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="weekday-break">Break Time</Label>
                              <div className="grid grid-cols-2 gap-4">
                                <Input id="weekday-break-start" type="time" defaultValue="12:00" />
                                <Input id="weekday-break-end" type="time" defaultValue="13:00" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Weekends (Sat-Sun)</h3>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="weekend-start">Start Time</Label>
                                <Input id="weekend-start" type="time" defaultValue="10:00" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="weekend-end">End Time</Label>
                                <Input id="weekend-end" type="time" defaultValue="14:00" />
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 pt-2">
                              <Switch id="weekend-available" />
                              <Label htmlFor="weekend-available">I'm not regularly available on weekends</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Appointment Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="appointment-duration">Default Appointment Duration</Label>
                            <select
                              id="appointment-duration"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              <option value="15">15 minutes</option>
                              <option value="30" selected>
                                30 minutes
                              </option>
                              <option value="45">45 minutes</option>
                              <option value="60">60 minutes</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="buffer-time">Buffer Time Between Appointments</Label>
                            <select
                              id="buffer-time"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              <option value="0">No buffer</option>
                              <option value="5">5 minutes</option>
                              <option value="10" selected>
                                10 minutes
                              </option>
                              <option value="15">15 minutes</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="max-appointments">Maximum Appointments Per Day</Label>
                            <Input id="max-appointments" type="number" defaultValue="8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Appointment Types</CardTitle>
                    <CardDescription>Configure the types of appointments you offer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: "Initial Consultation", duration: 60, virtual: true, inPerson: true },
                        { type: "Regular Checkup", duration: 30, virtual: true, inPerson: true },
                        { type: "Ultrasound", duration: 45, virtual: false, inPerson: true },
                        { type: "Emergency Consultation", duration: 30, virtual: true, inPerson: true },
                      ].map((appointmentType, i) => (
                        <div key={i} className="p-4 rounded-lg border">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <h3 className="font-medium">{appointmentType.type}</h3>
                              <p className="text-sm text-muted-foreground">
                                Duration: {appointmentType.duration} minutes
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2">
                                <Switch id={`virtual-${i}`} defaultChecked={appointmentType.virtual} />
                                <Label htmlFor={`virtual-${i}`}>Virtual</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch id={`in-person-${i}`} defaultChecked={appointmentType.inPerson} />
                                <Label htmlFor={`in-person-${i}`}>In-Person</Label>
                              </div>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Appointment Type
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="calendar">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar View</CardTitle>
                    <CardDescription>View and manage your schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-md p-3" />
                      </div>

                      <div className="border rounded-md p-4">
                        <h3 className="font-medium mb-4">
                          {date?.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </h3>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                            <div className="text-sm font-medium w-16">09:00 AM</div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Sarah Johnson</div>
                              <div className="text-xs text-muted-foreground">Regular Checkup</div>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                            <div className="text-sm font-medium w-16">10:30 AM</div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Emily Parker</div>
                              <div className="text-xs text-muted-foreground">Ultrasound</div>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                            <div className="text-sm font-medium w-16">01:00 PM</div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Michelle Wong</div>
                              <div className="text-xs text-muted-foreground">Initial Consultation</div>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-primary/10 border-primary/20 border rounded-md">
                            <div className="text-sm font-medium w-16">02:30 PM</div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Available Slot</div>
                              <div className="text-xs text-muted-foreground">30 minutes</div>
                            </div>
                            <Button size="sm">Book</Button>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-primary/10 border-primary/20 border rounded-md">
                            <div className="text-sm font-medium w-16">03:30 PM</div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Available Slot</div>
                              <div className="text-xs text-muted-foreground">30 minutes</div>
                            </div>
                            <Button size="sm">Book</Button>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">Block Time</h4>
                            <Button variant="outline" size="sm">
                              <Plus className="h-4 w-4 mr-2" />
                              Block
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="time-off">
                <Card>
                  <CardHeader>
                    <CardTitle>Time Off & Vacation</CardTitle>
                    <CardDescription>Manage your time off and vacation days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Upcoming Time Off</h3>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Request Time Off
                        </Button>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            title: "Annual Leave",
                            startDate: "Apr 10, 2025",
                            endDate: "Apr 17, 2025",
                            status: "Approved",
                            notes: "Family vacation",
                          },
                          {
                            title: "Conference",
                            startDate: "May 5, 2025",
                            endDate: "May 7, 2025",
                            status: "Pending",
                            notes: "Maternal Health Conference",
                          },
                        ].map((timeOff, i) => (
                          <div key={i} className="p-4 rounded-lg border">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{timeOff.title}</h3>
                                  <Badge
                                    variant="outline"
                                    className={
                                      timeOff.status === "Approved"
                                        ? "border-green-200 bg-green-50 text-green-700"
                                        : "border-amber-200 bg-amber-50 text-amber-700"
                                    }
                                  >
                                    {timeOff.status}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {timeOff.startDate} - {timeOff.endDate}
                                </p>
                                <p className="text-sm mt-1">{timeOff.notes}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-medium mb-4">Request New Time Off</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="time-off-type">Type of Time Off</Label>
                            <select
                              id="time-off-type"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              <option value="vacation">Vacation</option>
                              <option value="sick">Sick Leave</option>
                              <option value="personal">Personal Day</option>
                              <option value="conference">Conference/Training</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time-off-title">Title</Label>
                            <Input id="time-off-title" placeholder="Brief description" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Input id="start-date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Input id="end-date" type="date" />
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <Label htmlFor="time-off-notes">Notes</Label>
                          <Textarea id="time-off-notes" placeholder="Additional details about your time off" />
                        </div>

                        <Button>Submit Request</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}


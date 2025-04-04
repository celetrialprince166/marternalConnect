"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CalendarIcon, Clock, MapPin, MessageCircle, Phone, Plus, Video } from "lucide-react"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [userRole] = useState("patient") // In a real app, this would come from auth state

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Link href="/dashboard" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-bold text-xl">Appointments</h1>
          <div className="ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                  <DialogDescription>
                    Fill in the details to schedule a new appointment with your midwife.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {userRole === "patient" && (
                    <div className="grid gap-2">
                      <label htmlFor="midwife" className="text-sm font-medium">
                        Select Midwife
                      </label>
                      <Select>
                        <SelectTrigger id="midwife">
                          <SelectValue placeholder="Choose a midwife" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rebecca">Rebecca Taylor</SelectItem>
                          <SelectItem value="maria">Maria Rodriguez</SelectItem>
                          <SelectItem value="jennifer">Jennifer Lee</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid gap-2">
                    <label htmlFor="type" className="text-sm font-medium">
                      Appointment Type
                    </label>
                    <Select defaultValue="checkup">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checkup">Regular Checkup</SelectItem>
                        <SelectItem value="ultrasound">Ultrasound</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="mode" className="text-sm font-medium">
                      Appointment Mode
                    </label>
                    <Select defaultValue="in-person">
                      <SelectTrigger id="mode">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Date</label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="border rounded-md p-3"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="time" className="text-sm font-medium">
                      Time
                    </label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Notes
                    </label>
                    <Textarea id="notes" placeholder="Any specific concerns or questions for this appointment?" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Schedule Appointment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="container py-6 px-4">
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Prenatal Checkup</h3>
                        <Badge variant="outline">In-person</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Tomorrow, 10:00 AM
                        </div>
                        {userRole === "patient" ? (
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            Central Hospital, Room 302
                          </div>
                        ) : (
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            Your Office, Room 302
                          </div>
                        )}
                        {userRole === "patient" ? (
                          <div className="mt-1">With Dr. Emily Wilson</div>
                        ) : (
                          <div className="mt-1">With Sarah Johnson</div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                        {userRole === "patient" && (
                          <Button size="sm" variant="outline">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Virtual Consultation</h3>
                        <Badge variant="outline">Virtual</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Friday, 2:30 PM
                        </div>
                        {userRole === "patient" ? (
                          <div className="mt-1">With Midwife Rebecca Taylor</div>
                        ) : (
                          <div className="mt-1">With Maria Garcia</div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                        <Button size="sm">Join Call</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Past Appointments</CardTitle>
                <CardDescription>Your appointment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg border bg-muted/30">
                      <div className="bg-muted p-2 rounded-full">
                        {i % 2 === 0 ? <Video className="h-5 w-5" /> : <CalendarIcon className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">
                            {i === 1 ? "Regular Checkup" : i === 2 ? "Ultrasound Scan" : "Nutrition Consultation"}
                          </h3>
                          <Badge variant="outline">{i % 2 === 0 ? "Virtual" : "In-person"}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {i === 1 ? "March 15, 2025" : i === 2 ? "March 1, 2025" : "February 20, 2025"}
                          </div>
                          {userRole === "patient" ? (
                            <div className="mt-1">
                              With{" "}
                              {i === 1
                                ? "Dr. Emily Wilson"
                                : i === 2
                                  ? "Midwife Rebecca Taylor"
                                  : "Nutritionist Sarah Lee"}
                            </div>
                          ) : (
                            <div className="mt-1">
                              With {i === 1 ? "Sarah Johnson" : i === 2 ? "Emily Parker" : "Michelle Wong"}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">
                            View Notes
                          </Button>
                          <Button size="sm">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Appointment Calendar</CardTitle>
                <CardDescription>View and manage your schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-md p-3" />

                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">
                      {date?.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h3>

                    {date?.getDate() === new Date().getDate() + 1 ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                          <div className="text-sm font-medium w-16">10:00 AM</div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">Prenatal Checkup</div>
                            <div className="text-xs text-muted-foreground">
                              {userRole === "patient" ? "With Dr. Emily Wilson" : "With Sarah Johnson"}
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-auto">
                            In-person
                          </Badge>
                        </div>
                      </div>
                    ) : date?.getDay() === 5 ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-md">
                          <div className="text-sm font-medium w-16">2:30 PM</div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">Virtual Consultation</div>
                            <div className="text-xs text-muted-foreground">
                              {userRole === "patient" ? "With Midwife Rebecca Taylor" : "With Maria Garcia"}
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-auto">
                            Virtual
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No appointments scheduled for this day
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


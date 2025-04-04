"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  FileText,
  Heart,
  MessageCircle,
  Phone,
  Plus,
  Printer,
  Share2,
  Video,
} from "lucide-react"

export default function PatientDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [notes, setNotes] = useState("")

  // In a real app, this would fetch the patient data based on the ID
  const patient = {
    id: Number.parseInt(params.id),
    name: "Sarah Johnson",
    age: 32,
    week: 28,
    trimester: "2nd",
    dueDate: "June 15, 2025",
    lastVisit: "March 15, 2025",
    nextVisit: "March 29, 2025",
    status: "normal",
    riskLevel: "low",
    bloodType: "O+",
    height: "5'6\"",
    weight: "145 lbs",
    bmi: 23.4,
    address: "123 Main Street, Springfield, 12345",
    phone: "+1 (555) 000-0000",
    email: "sarah@example.com",
    emergencyContact: "John Johnson (Husband) - +1 (555) 000-0001",
    medicalHistory: "No significant medical history. Previous pregnancy resulted in healthy delivery 3 years ago.",
    allergies: "Penicillin",
    medications: "Prenatal vitamins, Iron supplement",
    healthMetrics: [
      { date: "Mar 15, 2025", weight: "145 lbs", bp: "118/75", notes: "Feeling good, slight fatigue in the afternoon" },
      { date: "Mar 1, 2025", weight: "144 lbs", bp: "120/78", notes: "Mild back pain" },
      { date: "Feb 15, 2025", weight: "143 lbs", bp: "115/76", notes: "Slept well, no issues" },
      { date: "Feb 1, 2025", weight: "142 lbs", bp: "122/80", notes: "Some swelling in ankles" },
    ],
    appointments: [
      { date: "Mar 29, 2025", time: "10:00 AM", type: "Regular Checkup", status: "Scheduled" },
      { date: "Mar 15, 2025", time: "10:30 AM", type: "Regular Checkup", status: "Completed" },
      { date: "Mar 1, 2025", time: "11:00 AM", type: "Ultrasound", status: "Completed" },
      { date: "Feb 15, 2025", time: "10:00 AM", type: "Regular Checkup", status: "Completed" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Link href="/midwife/patients" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" alt={patient.name} />
              <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-bold text-xl">{patient.name}</h1>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{patient.week} weeks</Badge>
                <span className="text-xs text-muted-foreground">{patient.trimester} Trimester</span>
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-2">
                      <AvatarImage src="/placeholder-user.jpg" alt={patient.name} />
                      <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">{patient.name}</h2>
                    <p className="text-muted-foreground">{patient.age} years old</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{patient.week} weeks</Badge>
                      <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                        Low Risk
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Due Date</span>
                      <span className="text-sm font-medium">{patient.dueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Blood Type</span>
                      <span className="text-sm font-medium">{patient.bloodType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Height</span>
                      <span className="text-sm font-medium">{patient.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Weight</span>
                      <span className="text-sm font-medium">{patient.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">BMI</span>
                      <span className="text-sm font-medium">{patient.bmi}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Phone</span>
                      <span className="text-sm font-medium">{patient.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm font-medium">{patient.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Address</span>
                      <span className="text-sm font-medium text-right">{patient.address}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Emergency Contact</span>
                      <p className="text-sm font-medium mt-1">{patient.emergencyContact}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 rounded-lg border">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Regular Checkup</h3>
                        <Badge variant="outline">Scheduled</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {patient.appointments[0].date}, {patient.appointments[0].time}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                        <Button size="sm">Confirm</Button>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    View All Appointments
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quick Notes</CardTitle>
                <CardDescription>Add notes about this patient</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Add your notes here..."
                    className="min-h-[100px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <Button className="w-full">Save Notes</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="health">Health Records</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="birth-plan">Birth Plan</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Calendar className="h-6 w-6 text-blue-700" />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-blue-700">{patient.week}</p>
                          <p className="text-sm text-blue-600">Weeks Pregnant</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <Clock className="h-6 w-6 text-purple-700" />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-purple-700">12</p>
                          <p className="text-sm text-purple-600">Weeks Until Due</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <Heart className="h-6 w-6 text-green-700" />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-green-700">4</p>
                          <p className="text-sm text-green-600">Appointments</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Medical History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Medical History</h3>
                        <p className="mt-1">{patient.medicalHistory}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Allergies</h3>
                        <p className="mt-1">{patient.allergies}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Current Medications</h3>
                        <p className="mt-1">{patient.medications}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Recent Health Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patient.healthMetrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="bg-primary/10 p-2 rounded-full">
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
                              className="text-primary"
                            >
                              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{metric.date}</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">Weight:</span> {metric.weight}
                              </div>
                              <div>
                                <span className="text-muted-foreground">Blood Pressure:</span> {metric.bp}
                              </div>
                              <div className="col-span-2">
                                <span className="text-muted-foreground">Notes:</span> {metric.notes}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full">
                        View All Health Records
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patient.appointments.slice(1, 3).map((appointment, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 rounded-lg border">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{appointment.type}</h3>
                              <Badge variant="outline">{appointment.status}</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {appointment.date}, {appointment.time}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline">
                                View Notes
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full">
                        View All Appointments
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="health">
                <Card>
                  <CardHeader>
                    <CardTitle>Health Records</CardTitle>
                    <CardDescription>Patient's health metrics and vitals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Vital Signs History</h3>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Export Data
                        </Button>
                      </div>

                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Date
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Weight
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Blood Pressure
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Urine Protein
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-border">
                            {patient.healthMetrics.map((metric, i) => (
                              <tr key={i}>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{metric.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{metric.weight}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{metric.bp}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">Negative</td>
                                <td className="px-4 py-3 text-sm">{metric.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Weight Trend</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center">
                              <p className="text-muted-foreground">Weight chart visualization would appear here</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Blood Pressure Trend</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center">
                              <p className="text-muted-foreground">
                                Blood pressure chart visualization would appear here
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Add New Health Record</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Date</label>
                            <input
                              type="date"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Weight (lbs)</label>
                            <input
                              type="number"
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              placeholder="Weight"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Blood Pressure</label>
                            <div className="flex gap-2">
                              <input
                                type="number"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Systolic"
                              />
                              <span className="flex items-center">/</span>
                              <input
                                type="number"
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Diastolic"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <label className="text-sm font-medium">Notes</label>
                          <Textarea placeholder="Add notes about this health record" />
                        </div>
                        <Button>Save Health Record</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment History</CardTitle>
                    <CardDescription>All appointments for this patient</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Schedule New Appointment</h3>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          New Appointment
                        </Button>
                      </div>

                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Date & Time
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Notes
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-border">
                            {patient.appointments.map((appointment, i) => (
                              <tr key={i}>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                  {appointment.date}, {appointment.time}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{appointment.type}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                  <Badge
                                    variant="outline"
                                    className={
                                      appointment.status === "Completed"
                                        ? "border-green-200 bg-green-50 text-green-700"
                                        : "border-blue-200 bg-blue-50 text-blue-700"
                                    }
                                  >
                                    {appointment.status}
                                  </Badge>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                  {appointment.status === "Completed"
                                    ? "Regular checkup, all vitals normal"
                                    : "Upcoming appointment"}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                  {appointment.status === "Completed" ? (
                                    <Button variant="outline" size="sm">
                                      View Details
                                    </Button>
                                  ) : (
                                    <div className="flex gap-2">
                                      <Button variant="outline" size="sm">
                                        Reschedule
                                      </Button>
                                      <Button size="sm">Confirm</Button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="birth-plan">
                <Card>
                  <CardHeader>
                    <CardTitle>Birth Plan</CardTitle>
                    <CardDescription>Patient's preferences for labor and delivery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg border bg-muted/30">
                        <p className="italic text-muted-foreground">
                          Sarah has expressed interest in a water birth if possible. She would like her husband and
                          mother present during delivery. She prefers minimal medical interventions unless necessary for
                          safety.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Labor Preferences</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Freedom to move around during labor</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Use of birthing ball and other comfort measures</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Dim lighting and calming music</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-red-600 font-medium">✗</span>
                              </div>
                              <span>Continuous electronic fetal monitoring</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Delivery Preferences</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Water birth if possible</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Husband to cut umbilical cord</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-primary font-medium">✓</span>
                              </div>
                              <span>Immediate skin-to-skin contact</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                                <span className="text-xs text-amber-600 font-medium">?</span>
                              </div>
                              <span>Delayed cord clamping (to be discussed)</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Pain Management</h3>
                        <p className="mb-4">
                          Sarah prefers to try natural pain management techniques first, but is open to epidural if
                          needed.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <span className="text-xs text-primary font-medium">1</span>
                            </div>
                            <span>Breathing techniques and visualization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <span className="text-xs text-primary font-medium">2</span>
                            </div>
                            <span>Hydrotherapy (shower or bath)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <span className="text-xs text-primary font-medium">3</span>
                            </div>
                            <span>Massage and counter-pressure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <span className="text-xs text-primary font-medium">4</span>
                            </div>
                            <span>Epidural if natural methods are insufficient</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <p className="text-sm text-muted-foreground">Last updated: March 10, 2025</p>
                        <div className="flex gap-2">
                          <Button variant="outline">
                            <Printer className="h-4 w-4 mr-2" />
                            Print
                          </Button>
                          <Button>
                            <FileText className="h-4 w-4 mr-2" />
                            Edit Birth Plan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Documents</CardTitle>
                    <CardDescription>Medical records and documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Upload New Document</h3>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>

                      <div className="rounded-md border">
                        <table className="min-w-full divide-y divide-border">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Document Name
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Type
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Date Added
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Added By
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-border">
                            {[
                              {
                                name: "Initial Pregnancy Assessment",
                                type: "Medical Record",
                                date: "Jan 15, 2025",
                                addedBy: "Dr. Emily Wilson",
                              },
                              {
                                name: "20-Week Ultrasound Results",
                                type: "Imaging",
                                date: "Feb 10, 2025",
                                addedBy: "Dr. James Lee",
                              },
                              {
                                name: "Blood Work Results",
                                type: "Lab Results",
                                date: "Mar 1, 2025",
                                addedBy: "Rebecca Taylor",
                              },
                              {
                                name: "Birth Plan Document",
                                type: "Patient Form",
                                date: "Mar 10, 2025",
                                addedBy: "Sarah Johnson",
                              },
                            ].map((doc, i) => (
                              <tr key={i}>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{doc.name}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{doc.type}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{doc.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">{doc.addedBy}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                      View
                                    </Button>
                                    <Button variant="outline" size="sm">
                                      <Download className="h-3 w-3 mr-1" />
                                      Download
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Home, MessageCircle, Phone, User } from "lucide-react"
import { PregnancyProgress } from "@/components/pregnancy-progress"
import { BabyIcon, HeartbeatIcon, MidwifeIcon, NutritionIcon, PregnantWomanIcon } from "@/components/pregnancy-icons"

export default function Dashboard() {
  const [userRole] = useState("patient") // In a real app, this would come from auth state

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-accent/20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/dashboard" className="font-bold text-xl text-primary flex items-center">
            <PregnantWomanIcon className="mr-2" />
            MaternalConnect
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
            </Link>
            <Link href="/profile">
              <Avatar className="transition-all hover:ring-2 hover:ring-primary/50">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card className="overflow-hidden border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
              <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4 ring-4 ring-secondary/20">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">Sarah Johnson</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {userRole === "patient" ? "Pregnant Woman" : "Certified Midwife"}
                  </p>
                  {userRole === "patient" && (
                    <Badge variant="secondary" className="mb-2 animate-pulse">
                      28 weeks
                    </Badge>
                  )}
                  {userRole === "midwife" && (
                    <Badge variant="secondary" className="mb-2">
                      Hospital Midwife
                    </Badge>
                  )}
                  <Button variant="outline" size="sm" className="w-full mt-2 rounded-full">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <nav>
              <div className="space-y-1">
                <Link href="/dashboard">
                  <Button variant="secondary" className="w-full justify-start rounded-full">
                    <Home className="h-4 w-4 mr-2" />
                    Dashboard
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
                {userRole === "patient" && (
                  <Link href="/health-tracker">
                    <Button variant="ghost" className="w-full justify-start rounded-full">
                      <HeartbeatIcon className="h-4 w-4 mr-2" />
                      Health Tracker
                    </Button>
                  </Link>
                )}
              </div>
            </nav>

            {userRole === "patient" && <PregnancyProgress currentWeek={28} className="hover-lift" />}
          </div>

          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6 flex items-center">
              {userRole === "patient" ? (
                <>
                  <BabyIcon className="mr-2 text-primary" />
                  My Maternal Care
                </>
              ) : (
                <>
                  <PregnantWomanIcon className="mr-2 text-primary" />
                  My Patients
                </>
              )}
            </h1>

            <Tabs defaultValue="upcoming">
              <TabsList className="mb-4 bg-white p-1 rounded-full">
                <TabsTrigger
                  value="upcoming"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Recent Activity
                </TabsTrigger>
                {userRole === "patient" && (
                  <TabsTrigger
                    value="midwives"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    Find Midwives
                  </TabsTrigger>
                )}
                {userRole === "midwife" && (
                  <TabsTrigger
                    value="patients"
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    My Patients
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                <Card className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 text-primary" />
                      Upcoming Appointments
                    </CardTitle>
                    <CardDescription>Your scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-xl border bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 transition-colors duration-300">
                        <div className="bg-secondary/30 p-3 rounded-full">
                          <Calendar className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Prenatal Checkup</h3>
                            <Badge
                              variant="outline"
                              className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                            >
                              In-person
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Tomorrow, 10:00 AM
                            </div>
                            {userRole === "patient" ? (
                              <div className="mt-1">With Dr. Emily Wilson</div>
                            ) : (
                              <div className="mt-1">With Sarah Johnson</div>
                            )}
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline" className="rounded-full">
                              Reschedule
                            </Button>
                            {userRole === "patient" && (
                              <Button size="sm" variant="outline" className="rounded-full">
                                <Phone className="h-3 w-3 mr-1" />
                                Call
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl border bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-colors duration-300">
                        <div className="bg-accent/30 p-3 rounded-full">
                          <MessageCircle className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Virtual Consultation</h3>
                            <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/30">
                              Virtual
                            </Badge>
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
                            <Button size="sm" variant="outline" className="rounded-full">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="maternal" className="rounded-full">
                              Join Call
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {userRole === "patient" && (
                  <Card className="hover-lift">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <NutritionIcon className="mr-2 text-primary" />
                        Health Reminders
                      </CardTitle>
                      <CardDescription>Important tasks for your pregnancy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                          <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-secondary-foreground">1</span>
                          </div>
                          <span>Take prenatal vitamins daily</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                          <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-secondary-foreground">2</span>
                          </div>
                          <span>Complete your third trimester blood work</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                          <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-secondary-foreground">3</span>
                          </div>
                          <span>Update your birth plan</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                <Card className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 text-primary" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>Your recent interactions and updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                        <div className="bg-secondary/20 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                          <MessageCircle className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">New message received</p>
                          <p className="text-sm text-muted-foreground">
                            {userRole === "patient"
                              ? "Midwife Rebecca sent you information about your upcoming appointment"
                              : "Sarah asked a question about her diet plan"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                        <div className="bg-secondary/20 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">Appointment confirmed</p>
                          <p className="text-sm text-muted-foreground">
                            Your appointment for Friday, 2:30 PM has been confirmed
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                        </div>
                      </div>

                      {userRole === "patient" && (
                        <div className="flex gap-4 items-start p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                          <div className="bg-secondary/20 rounded-full p-2 h-10 w-10 flex items-center justify-center">
                            <HeartbeatIcon className="h-5 w-5 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">Health tracker updated</p>
                            <p className="text-sm text-muted-foreground">You logged your weight and blood pressure</p>
                            <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {userRole === "patient" && (
                <TabsContent value="midwives" className="space-y-4">
                  <Card className="hover-lift">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <MidwifeIcon className="mr-2 text-primary" />
                        Available Midwives
                      </CardTitle>
                      <CardDescription>Connect with qualified midwives in your area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex gap-4 p-4 rounded-xl border hover:bg-secondary/10 transition-colors duration-300 hover-lift"
                          >
                            <Avatar className="h-14 w-14 ring-2 ring-secondary/20">
                              <AvatarImage src={`/placeholder.svg?height=56&width=56`} alt="Midwife" />
                              <AvatarFallback>MW</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">
                                  {i === 1 ? "Rebecca Taylor" : i === 2 ? "Maria Rodriguez" : "Jennifer Lee"}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className="bg-accent/20 text-accent-foreground border-accent/30"
                                >
                                  {i === 1 ? "Hospital" : i === 2 ? "Clinic" : "Private Practice"}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {i === 1
                                  ? "Certified Nurse-Midwife with 8 years of experience"
                                  : i === 2
                                    ? "Specialized in high-risk pregnancies, 12 years experience"
                                    : "Holistic approach to maternal care, 5 years experience"}
                              </p>
                              <div className="flex gap-2 mt-3">
                                <Button size="sm" variant="outline" className="rounded-full">
                                  View Profile
                                </Button>
                                <Button size="sm" variant="maternal" className="rounded-full">
                                  Connect
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {userRole === "midwife" && (
                <TabsContent value="patients" className="space-y-4">
                  <Card className="hover-lift">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center">
                        <PregnantWomanIcon className="mr-2 text-primary" />
                        My Patients
                      </CardTitle>
                      <CardDescription>Pregnant women under your care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex gap-4 p-4 rounded-xl border hover:bg-secondary/10 transition-colors duration-300 hover-lift"
                          >
                            <Avatar className="h-14 w-14 ring-2 ring-secondary/20">
                              <AvatarImage src={`/placeholder.svg?height=56&width=56`} alt="Patient" />
                              <AvatarFallback>PT</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">
                                  {i === 1 ? "Sarah Johnson" : i === 2 ? "Emily Parker" : "Michelle Wong"}
                                </h3>
                                <Badge variant="secondary">
                                  {i === 1 ? "28 weeks" : i === 2 ? "35 weeks" : "16 weeks"}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {i === 1
                                  ? "Next appointment: Tomorrow, 10:00 AM"
                                  : i === 2
                                    ? "Next appointment: Monday, 2:00 PM"
                                    : "Next appointment: Next Thursday, 11:30 AM"}
                              </p>
                              <div className="flex gap-2 mt-3">
                                <Button size="sm" variant="outline" className="rounded-full">
                                  View Records
                                </Button>
                                <Button size="sm" variant="maternal" className="rounded-full">
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
              )}
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}


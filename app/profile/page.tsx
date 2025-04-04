"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Camera, LogOut, Settings, Shield, User } from "lucide-react"

export default function ProfilePage() {
  const [userRole] = useState("patient") // In a real app, this would come from auth state
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Link href="/dashboard" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-bold text-xl">My Profile</h1>
          <div className="ml-auto">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>{userRole === "patient" ? "SJ" : "RT"}</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-2xl font-semibold">
                  {userRole === "patient" ? "Sarah Johnson" : "Rebecca Taylor"}
                </h2>
                <p className="text-muted-foreground">
                  {userRole === "patient" ? "Pregnant Woman • 28 weeks" : "Certified Nurse-Midwife"}
                </p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                  <Button variant="outline" className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="personal">
            <TabsList className="mb-6">
              <TabsTrigger value="personal">
                <User className="h-4 w-4 mr-2" />
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="security">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              {userRole === "patient" && <TabsTrigger value="medical">Medical Info</TabsTrigger>}
              {userRole === "midwife" && <TabsTrigger value="professional">Professional</TabsTrigger>}
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    {isEditing ? "Update your personal details below" : "Your personal information and contact details"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue={userRole === "patient" ? "Sarah" : "Rebecca"} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue={userRole === "patient" ? "Johnson" : "Taylor"} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue={`${userRole === "patient" ? "sarah" : "rebecca"}@example.com`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="Springfield" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">Postal/Zip Code</Label>
                          <Input id="zip" defaultValue="12345" />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                          <p>{userRole === "patient" ? "Sarah Johnson" : "Rebecca Taylor"}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                          <p>{`${userRole === "patient" ? "sarah" : "rebecca"}@example.com`}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                          <p>+1 (555) 000-0000</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Date of Birth</h3>
                          <p>{userRole === "patient" ? "May 15, 1990" : "June 22, 1985"}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                        <p>123 Main Street, Springfield, 12345</p>
                      </div>
                      {userRole === "patient" && (
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Emergency Contact</h3>
                          <p>John Johnson (Husband) - +1 (555) 000-0001</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    {isEditing ? (
                      <div className="space-y-4">
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
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Last updated 3 months ago</p>
                        </div>
                        <Button variant="outline">Change Password</Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about appointments and messages
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive text message reminders for upcoming appointments
                          </p>
                        </div>
                        <Switch id="sms-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="app-notifications">App Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
                        </div>
                        <Switch id="app-notifications" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {userRole === "patient" && (
              <TabsContent value="medical">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Information</CardTitle>
                    <CardDescription>Your pregnancy and health information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="due-date">Expected Due Date</Label>
                            <Input id="due-date" type="date" defaultValue="2025-06-15" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pregnancy-week">Current Week of Pregnancy</Label>
                            <Input id="pregnancy-week" type="number" defaultValue="28" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="medical-conditions">Pre-existing Medical Conditions</Label>
                          <Textarea id="medical-conditions" defaultValue="None" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="allergies">Allergies</Label>
                          <Input id="allergies" defaultValue="Penicillin" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="medications">Current Medications</Label>
                          <Textarea id="medications" defaultValue="Prenatal vitamins, Iron supplement" />
                        </div>
                        <div className="flex justify-end">
                          <Button>Save Changes</Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Expected Due Date</h3>
                            <p>June 15, 2025</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Current Week of Pregnancy</h3>
                            <p>28 weeks</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Pre-existing Medical Conditions</h3>
                          <p>None</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Allergies</h3>
                          <p>Penicillin</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Current Medications</h3>
                          <p>Prenatal vitamins, Iron supplement</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Blood Type</h3>
                          <p>O+</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {userRole === "midwife" && (
              <TabsContent value="professional">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                    <CardDescription>Your professional credentials and practice details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="license">License/Certification Number</Label>
                          <Input id="license" defaultValue="CNM-12345" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialization">Specialization</Label>
                          <Input id="specialization" defaultValue="High-Risk Pregnancies" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Input id="experience" type="number" defaultValue="8" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hospital">Hospital/Clinic Affiliation</Label>
                          <Input id="hospital" defaultValue="Central Hospital" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Professional Bio</Label>
                          <Textarea
                            id="bio"
                            defaultValue="Certified Nurse-Midwife with 8 years of experience specializing in high-risk pregnancies. Passionate about providing personalized care to expectant mothers."
                          />
                        </div>
                        <div className="flex justify-end">
                          <Button>Save Changes</Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">License/Certification</h3>
                          <p>Certified Nurse-Midwife (CNM-12345)</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Specialization</h3>
                          <p>High-Risk Pregnancies</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Years of Experience</h3>
                          <p>8 years</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Hospital/Clinic Affiliation</h3>
                          <p>Central Hospital</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">Professional Bio</h3>
                          <p>
                            Certified Nurse-Midwife with 8 years of experience specializing in high-risk pregnancies.
                            Passionate about providing personalized care to expectant mothers.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </main>
    </div>
  )
}


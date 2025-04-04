"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [role, setRole] = useState("patient") // In a real app, this would come from auth state
  const [isLoading, setIsLoading] = useState(false)

  const handleComplete = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 flex items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>Let&apos;s set up your account to get the most out of MaternalConnect</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > i
                      ? "bg-primary text-primary-foreground"
                      : step === i
                        ? "bg-primary/20 border-2 border-primary text-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > i ? <CheckCircle className="h-5 w-5" /> : i}
                </div>
                <span className="text-xs mt-2 text-muted-foreground">
                  {i === 1 ? "Basic Info" : i === 2 ? "Health Details" : "Preferences"}
                </span>
              </div>
            ))}
          </div>

          {role === "patient" ? (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Postal/Zip Code</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">Emergency Contact Name</Label>
                    <Input id="emergency-contact" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-phone">Emergency Contact Phone</Label>
                    <Input id="emergency-phone" type="tel" required />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="due-date">Expected Due Date</Label>
                      <Input id="due-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pregnancy-week">Current Week of Pregnancy</Label>
                      <Select defaultValue="28">
                        <SelectTrigger id="pregnancy-week">
                          <SelectValue placeholder="Select week" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 42 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              Week {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Is this your first pregnancy?</Label>
                    <RadioGroup defaultValue="yes">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="first-yes" />
                        <Label htmlFor="first-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="first-no" />
                        <Label htmlFor="first-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medical-conditions">Pre-existing Medical Conditions</Label>
                    <Textarea
                      id="medical-conditions"
                      placeholder="Please list any pre-existing medical conditions (e.g., diabetes, hypertension, etc.)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies</Label>
                    <Input id="allergies" placeholder="List any allergies" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current-medications">Current Medications</Label>
                    <Textarea
                      id="current-medications"
                      placeholder="Please list any medications you are currently taking"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Appointment Type</Label>
                    <RadioGroup defaultValue="both">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="in-person" id="in-person" />
                        <Label htmlFor="in-person">In-person only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="virtual" id="virtual" />
                        <Label htmlFor="virtual">Virtual only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both in-person and virtual</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Communication Method</Label>
                    <RadioGroup defaultValue="app">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="app" id="app" />
                        <Label htmlFor="app">App messages</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="sms" />
                        <Label htmlFor="sms">SMS text messages</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone">Phone call</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birth-preferences">Birth Preferences</Label>
                    <Textarea
                      id="birth-preferences"
                      placeholder="Share any preferences you have for your birth experience"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Is there anything else you'd like your midwife to know?"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Work Address</Label>
                    <Input id="address" placeholder="Hospital or clinic address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Postal/Zip Code</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license">License/Certification Number</Label>
                    <Input id="license" required />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select defaultValue="5-10">
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Select defaultValue="general">
                      <SelectTrigger id="specialization">
                        <SelectValue placeholder="Select specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Midwifery</SelectItem>
                        <SelectItem value="high-risk">High-Risk Pregnancies</SelectItem>
                        <SelectItem value="water-birth">Water Birth</SelectItem>
                        <SelectItem value="home-birth">Home Birth</SelectItem>
                        <SelectItem value="postpartum">Postpartum Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Hospital/Clinic Affiliation</Label>
                    <Input id="hospital" placeholder="Where do you practice?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education & Certifications</Label>
                    <Textarea
                      id="education"
                      placeholder="List your relevant education, degrees, and certifications"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Services Offered</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Prenatal Care",
                        "Labor & Delivery",
                        "Postpartum Care",
                        "Lactation Support",
                        "Childbirth Education",
                        "Newborn Care",
                        "Family Planning",
                        "Virtual Consultations",
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <input type="checkbox" id={service.toLowerCase().replace(/\s+/g, "-")} className="rounded" />
                          <Label htmlFor={service.toLowerCase().replace(/\s+/g, "-")}>{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <Tabs defaultValue="weekdays">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="weekdays">Weekdays</TabsTrigger>
                        <TabsTrigger value="weekends">Weekends</TabsTrigger>
                      </TabsList>
                      <TabsContent value="weekdays" className="space-y-4 pt-4">
                        <div className="grid grid-cols-5 gap-2">
                          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                            <div key={day} className="flex flex-col items-center">
                              <Label htmlFor={day.toLowerCase()}>{day}</Label>
                              <input type="checkbox" id={day.toLowerCase()} className="mt-2" defaultChecked />
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="start-time">Start Time</Label>
                            <Input id="start-time" type="time" defaultValue="09:00" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-time">End Time</Label>
                            <Input id="end-time" type="time" defaultValue="17:00" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="weekends" className="space-y-4 pt-4">
                        <div className="grid grid-cols-2 gap-2">
                          {["Sat", "Sun"].map((day) => (
                            <div key={day} className="flex flex-col items-center">
                              <Label htmlFor={day.toLowerCase()}>{day}</Label>
                              <input type="checkbox" id={day.toLowerCase()} className="mt-2" />
                            </div>
                          ))}
                        </div>
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
                      </TabsContent>
                    </Tabs>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell expectant mothers about yourself and your approach to midwifery"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
            Back
          </Button>
          <Button
            onClick={() => {
              if (step < 3) {
                setStep(step + 1)
              } else {
                handleComplete()
              }
            }}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : step < 3 ? "Continue" : "Complete Setup"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


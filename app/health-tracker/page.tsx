"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus } from "lucide-react"

export default function HealthTrackerPage() {
  const [weight, setWeight] = useState("")
  const [systolic, setSystolic] = useState("")
  const [diastolic, setDiastolic] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the data to the backend
    alert("Health data saved successfully!")
    setWeight("")
    setSystolic("")
    setDiastolic("")
    setNote("")
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Link href="/dashboard" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="font-bold text-xl">Health Tracker</h1>
        </div>
      </header>

      <main className="container py-6 px-4">
        <Tabs defaultValue="log">
          <TabsList className="mb-4">
            <TabsTrigger value="log">Log Health Data</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="log">
            <Card>
              <CardHeader>
                <CardTitle>Log Today's Health Data</CardTitle>
                <CardDescription>Track your pregnancy health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Enter your weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Blood Pressure (mmHg)</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Systolic"
                          type="number"
                          value={systolic}
                          onChange={(e) => setSystolic(e.target.value)}
                        />
                        <span className="flex items-center">/</span>
                        <Input
                          placeholder="Diastolic"
                          type="number"
                          value={diastolic}
                          onChange={(e) => setDiastolic(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="note">Notes</Label>
                    <Input
                      id="note"
                      placeholder="Any symptoms or concerns?"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>

                  <Button type="submit">Save Health Data</Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Quick Symptoms</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Nausea", "Fatigue", "Headache", "Swelling", "Back Pain", "Cramps", "Insomnia", "Mood Changes"].map(
                  (symptom) => (
                    <Button key={symptom} variant="outline" className="justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      {symptom}
                    </Button>
                  ),
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Health History</CardTitle>
                <CardDescription>Your recorded health data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "Today",
                      weight: "68.5 kg",
                      bp: "118/75",
                      notes: "Feeling good, slight fatigue in the afternoon",
                    },
                    { date: "Yesterday", weight: "68.3 kg", bp: "120/78", notes: "Mild back pain" },
                    { date: "2 days ago", weight: "68.4 kg", bp: "115/76", notes: "Slept well, no issues" },
                    { date: "3 days ago", weight: "68.2 kg", bp: "122/80", notes: "Some swelling in ankles" },
                  ].map((entry, i) => (
                    <div key={i} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{entry.date}</h3>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Weight:</span> {entry.weight}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Blood Pressure:</span> {entry.bp}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                          <span className="text-muted-foreground">Notes:</span> {entry.notes}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="charts">
            <Card>
              <CardHeader>
                <CardTitle>Health Trends</CardTitle>
                <CardDescription>Visualize your health data over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Weight Trend</h3>
                    <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Weight chart visualization would appear here</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Blood Pressure Trend</h3>
                    <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Blood pressure chart visualization would appear here</p>
                    </div>
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


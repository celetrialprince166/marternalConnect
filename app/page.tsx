import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedWave } from "@/components/animated-wave"
import { BabyIcon, BirthIcon, FamilyIcon, MidwifeIcon, PregnantWomanIcon, PregnantWomanIconLight } from "@/components/pregnancy-icons"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-secondary/30 to-accent/30">
      <header className="px-4 py-6 bg-white shadow-sm relative z-10">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <PregnantWomanIcon className="" />
            MaternityConnect
          </h1>
          <Link href="/login">
            <Button variant="outline" className="rounded-full">
              Login
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-8 px-4">
        <section className="max-w-3xl mx-auto text-center mb-12 relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Connecting Pregnant Women in Rural Areas to Hospital Midwives
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get professional maternal care support, schedule appointments, and receive guidance throughout your
              pregnancy journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register?role=patient">
                <Button size="lg" variant="maternal" className="w-full sm:w-auto hover-lift group gap-2">
                  <PregnantWomanIconLight className="mr-5 group-hover:animate-pulse" />
                  I'm Pregnant
                </Button>
              </Link>
              <Link href="/register?role=midwife">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto hover-lift">
                  <MidwifeIcon className="mr-2" />
                  I'm a Midwife
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="overflow-hidden hover-lift">
            <div className="h-3 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FamilyIcon className="mr-2 text-primary" />
                Connect
              </CardTitle>
              <CardDescription>Find qualified midwives near you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-primary/10 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <FamilyIcon className="text-primary/60 h-16 w-16 float-animation" />
              </div>
              <p className="text-sm text-muted-foreground">
                Browse profiles of certified midwives and connect with professionals who can provide the care you need.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <div className="h-3 bg-secondary"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MidwifeIcon className="mr-2 text-primary" />
                Consult
              </CardTitle>
              <CardDescription>Get expert maternal care advice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <MidwifeIcon className="text-primary/60 h-16 w-16 float-animation" />
              </div>
              <p className="text-sm text-muted-foreground">
                Chat with midwives, ask questions, and receive personalized guidance throughout your pregnancy journey.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <div className="h-3 bg-accent"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BirthIcon className="mr-2 text-primary" />
                Schedule
              </CardTitle>
              <CardDescription>Book appointments easily</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-accent/30 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <BirthIcon className="text-primary/60 h-16 w-16 float-animation" />
              </div>
              <p className="text-sm text-muted-foreground">
                Schedule in-person or virtual appointments with your midwife based on your availability and needs.
              </p>
            </CardContent>
          </Card>
        </div>

        <AnimatedWave className="my-12" color="#CCBD9A" height={100} />

        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-12 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <BabyIcon className="mr-2 text-primary" />
            How It Works
          </h3>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-medium text-white shadow-md">
                1
              </span>
              <div className="mt-1">
                <h4 className="font-medium text-lg">Create an account</h4>
                <p className="text-muted-foreground">Sign up as a pregnant woman or a midwife</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-medium text-white shadow-md">
                2
              </span>
              <div className="mt-1">
                <h4 className="font-medium text-lg">Complete your profile</h4>
                <p className="text-muted-foreground">Add your details, location, and preferences</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-medium text-white shadow-md">
                3
              </span>
              <div className="mt-1">
                <h4 className="font-medium text-lg">Connect with midwives</h4>
                <p className="text-muted-foreground">Browse and connect with qualified midwives in your area</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-medium text-white shadow-md">
                4
              </span>
              <div className="mt-1">
                <h4 className="font-medium text-lg">Schedule appointments</h4>
                <p className="text-muted-foreground">Book consultations and receive ongoing care</p>
              </div>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12 px-4 relative">
        <AnimatedWave className="absolute top-0 left-0 right-0 transform rotate-180" color="white" height={50} />
        <div className="container text-center">
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <PregnantWomanIcon className="text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">MaternalConnect</h3>
          <p className="text-muted-foreground mb-6">
            Connecting pregnant women with professional midwives for better maternal care.
          </p>
          <p className="text-sm text-muted-foreground">© 2025 MaternalConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


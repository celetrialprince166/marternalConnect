import Image from "next/image"
import logo from "@/public/pregnantlogo.svg"
import logolight from "@/public/pregnantlogolight.svg"

export const BabyIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 12h.01" />
    <path d="M15 12h.01" />
    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
  </svg>
)

export const PregnantWomanIcon = ({ className = "", size = 48, ...props }) => (
<Image src={logo} alt="logo" width={size} height={size} {...props} />
)

export const PregnantWomanIconLight = ({ className = "", size = 24, ...props }) => (
<Image src={logolight} alt="logo" color="#fff" width={size} height={size} {...props} />
)

export const MidwifeIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M9.1 12a2.1 2.1 0 0 1 0-4.2" />
    <path d="M14.9 12a2.1 2.1 0 0 0 0-4.2" />
    <path d="M9.1 12h6.8" />
    <path d="M12 16a4 4 0 0 0 4-4" />
  </svg>
)

export const UltrasoundIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 12h2" />
    <path d="M6 12h2" />
    <path d="M10 12h2" />
    <path d="M18 6l-6 6" />
    <path d="M6 6h12" />
    <path d="M12 18v-6" />
    <rect x="14" y="12" width="8" height="10" rx="2" />
  </svg>
)

export const FamilyIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 3h5v5" />
    <path d="M2 3h5v5" />
    <path d="M7 21H2v-5" />
    <path d="M21 16v5h-5" />
    <path d="M12 7v4" />
    <path d="M9 10h6" />
    <circle cx="12" cy="5" r="2" />
    <path d="M15 10a2 2 0 0 1 2 2c0 2.5-5 2.5-5 5" />
    <path d="M9 10a2 2 0 0 0-2 2c0 2.5 5 2.5 5 5" />
  </svg>
)

export const HeartbeatIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)

export const BirthIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M8 11h8" />
    <path d="M12 15a3 3 0 0 0 0-6" />
  </svg>
)

export const NutritionIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 2v20h20" />
    <path d="M6 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
)

export const PregnancyProgressIcon = ({ className = "", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10" />
  </svg>
)


# LASIK Landing Page: "About Doctor" UI Replication Plan

This plan details how to replicate the **exact UI** from the Envision Cataract "About the Doctor" section (Cataract version) into your LASIK landing page, while preserving your **existing LASIK-specific content**.

## 1. Visual Specification (Pixel Perfect Guide)

To achieve the exact look of the Cataract project, use these specific Tailwind values and structural elements:

### A. Layout & Container
- **Outer Section**: `py-20 bg-white overflow-hidden`
- **Heading Style**: 
  - Main Title: `text-3xl md:text-5xl font-bold text-[#3b7dba] mb-3` — Format: `— About the Surgeon —`
  - Tagline: `text-gray-700 font-semibold text-lg md:text-[1.5rem] mt-4 md:mt-7 leading-relaxed`
  - Use the `<Highlight>` component for key LASIK phrases (e.g., "SMILE Specialist").

### B. The Portrait (Left Side)
- **Container**: `w-[90%] md:w-[85%] h-[500px] md:h-[600px] rounded-t-[300px] overflow-hidden shadow-2xl relative bg-gray-200`
- **Image**: `fill`, `className="object-cover object-top"`
- **Asset**: `/assets/surgeon.png` (or existing LASIK doc image).

### C. The Overlapping Card (Right Side)
- **Positioning**: `w-full md:w-[55%] md:-ml-12 mt-8 md:mt-0 relative z-10`
- **Background**: `bg-[#3b7dba]` (Brand Blue)
- **Accent**: `h-1.5 w-full bg-[#a6c516]` (Top border line)
- **Padding**: `p-10 md:p-14`

## 2. Content Mapping (Preserving LASIK Data)

Replace the Cataract-specific strings in `DoctorSection.tsx` with your **existing LASIK content**:

| Element | Cataract Content | LASIK Content (Replacement) |
| :--- | :--- | :--- |
| **Section Title** | — About the Doctor — | — About the Surgeon — |
| **Intro Highlight** | Advanced Cataract Surgery | LASIK & SMILE Specialist |
| **Bio Title** | Meet Dr. Vaishalli Sathe | Meet Your LASIK Surgeon |
| **Bio Body** | "...doesn't just perform cataract surgery — she listens first..." | "...pioneer-trained surgeon who brings precision and care to every SMILE procedure..." |
| **Credential 1** | Fellowship In Pediatric Ophthalmology | Trained under SMILE Pioneers in India |
| **Stat 1** | 5,000+ Surgeries | 3,000+ LASIK Procedures |

## 3. Implementation Code Structure

Copy this structure into your `src/components/sections/DoctorSection.tsx` in the LASIK project. Ensure you have the `Highlight` component and `CountUp` package available.

```tsx
import { Highlight } from "@/components/ui/Highlight";
import CountUp from "react-countup";
import { CheckCircle } from "lucide-react";

export default function DoctorSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3b7dba] mb-3">
            — About the Surgeon —
          </h2>
          <p className="text-gray-700 font-semibold text-lg md:text-[1.5rem] max-w-5xl mx-auto mt-4 md:mt-7 leading-relaxed md:leading-[2.5rem]">
            Meet{" "}
            <span className="font-[900] text-[#3b7dba] text-xl md:text-[2rem]">Dr. Vaishalli Sathe</span>
            {" "}—{" "}
            <br className="hidden md:inline" />
            <Highlight>SMILE & LASIK Specialist</Highlight>
            {" "}trained under India's pioneers in{" "}
            <Highlight variant="secondary">Vision Correction</Highlight>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
            {/* Arch Image */}
            <div className="w-full md:w-1/2 relative z-0 flex justify-center md:justify-end">
                <div className="w-[90%] md:w-[85%] h-[500px] md:h-[600px] rounded-t-[300px] overflow-hidden shadow-2xl relative bg-gray-200">
                    <Image 
                        src="/assets/doctor.png" 
                        fill 
                        className="object-cover object-top" 
                        alt="Dr. Vaishalli Sathe – LASIK Surgeon" 
                    />
                </div>
            </div>

            {/* Overlapping Content Card */}
            <div className="w-full md:w-[55%] md:-ml-12 mt-8 md:mt-0 relative z-10">
                <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-[#3b7dba]">
                    <div className="h-1.5 w-full bg-[#a6c516]" />
                    <div className="p-10 md:p-14">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                            Meet <span style={{ color: "#c8e830" }}>Dr. Vaishalli Sathe</span>
                        </h2>
                        
                        <p className="text-[17px] md:text-lg text-white mb-7 font-semibold leading-relaxed">
                            {/* Insert your existing LASIK Bio Description here */}
                        </p>

                        <ul className="space-y-5 md:space-y-3 mb-8">
                            {/* Map through your LASIK credentials */}
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#c8e830" }} />
                                <span className="text-[16px] md:text-base font-semibold text-white">
                                    Trained in LASIK/SMILE under pioneers of SMILE surgery in India
                                </span>
                            </li>
                        </ul>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
                            <div>
                                <div className="text-2xl md:text-3xl font-black text-[#c8e830]">
                                    <CountUp end={3000} suffix="+" duration={2.5} enableScrollSpy />
                                </div>
                                <div className="text-xs md:text-sm uppercase tracking-wider font-bold text-white/70">
                                    LASIK Success Stories
                                </div>
                            </div>
                            {/* Add more stats... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
```

## 4. Technical Checklist
- [ ] **Colors**: Ensure `#3b7dba` (Blue), `#a6c516` (Green), and `#c8e830` (Light Green) are used consistently.
- [ ] **Fonts**: Use `font-black` for numbers in `CountUp` and `font-extrabold` for section headers.
- [ ] **Responsive**: Check the `-ml-12` overlap at `md` (768px) and `mid` (992px) breakpoints.
- [ ] **Icons**: Use `CheckCircle` from `lucide-react` with `color: "#c8e830"`.


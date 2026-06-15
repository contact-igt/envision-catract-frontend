# DoctorSection UI - Pixel Perfect Implementation Plan

## 1. Visual Structure Overview

The new Doctor Section UI consists of **4 main sections** stacked vertically:

```
┌─────────────────────────────────────────────────────────┐
│         "About the Doctor" (Centered Heading)            │
├─────────────────────────────────────────────────────────┤
│  Left Part:              │  Right Part:                  │
│  • "Meet"                │  • Credentials Card           │
│  • "Dr. Vaishalli Sathe" │  • Specialization Card        │
│  • Arrow (decorative)    │  (Both with green left border)│
├─────────────────────────────────────────────────────────┤
│  Doctor Image (Left) │ Blue Bio Card (Right, Overlapped) │
└─────────────────────────────────────────────────────────┘
```

## 2. Component Breakdown

### A. Section Heading
```
Layout: Full width, centered
Text: "About the Doctor"
Styling:
  - Font: Bold, Large
  - Color: #3b7dba (Brand Blue)
  - Size: text-4xl md:text-5xl
  - Class: "text-center mb-12 md:mb-16"
```

### B. Top Section (Meet & Credentials/Specialization)

#### Left Column: "Meet Dr. Name"
```
Layout: flex-col, center aligned
Content:
  - "Meet" (regular text, gray)
  - "Dr. Vaishalli Sathe" (bold, large, GREEN #a6c516)
  - Decorative Arrow Icon (blue, pointing down-right)
  
Structure:
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center relative">
    <p className="text-gray-600 font-semibold">Meet</p>
    <h3 className="text-3xl md:text-4xl font-bold text-[#a6c516]">
      Dr. Vaishalli Sathe
    </h3>
    <!-- Arrow Icon Here -->
  </div>
```

#### Right Column: Credentials & Specialization Cards (2-Column Grid)
```
Layout: grid-cols-2, gap between cards
Each Card:
  - Background: #f9faf7 (Light Off-White)
  - Border Left: 4px solid #a6c516 (Green)
  - Border Radius: rounded-lg
  - Padding: p-6
  
Card 1 - Credentials:
  - Title: "Credentials" (blue, bold)
  - Content: Badges (green background with white text)
    • "Trained at renowned Institutes"
    • "India"
    • "London"
    
Card 2 - Specialization:
  - Title: "Specialization" (blue, bold)
  - Content: Badges (green background with white text)
    • "LASIK"
    • "Advanced Cataract Surgery"
    • "Personalised Eye Care"

Structure:
  <div className="w-full md:w-1/2">
    <div className="grid grid-cols-2 gap-6">
      {/* Credentials Card */}
      <div className="border-l-4 border-[#a6c516] bg-[#f9faf7] rounded-lg p-6">
        <h4 className="text-[#3b7dba] font-bold mb-4">Credentials</h4>
        <div className="space-y-3">
          {/* Badges Here */}
        </div>
      </div>
      
      {/* Specialization Card */}
      <div className="border-l-4 border-[#a6c516] bg-[#f9faf7] rounded-lg p-6">
        <h4 className="text-[#3b7dba] font-bold mb-4">Specialization</h4>
        <div className="space-y-3">
          {/* Badges Here */}
        </div>
      </div>
    </div>
  </div>
```

### C. Badge Styling (Within Cards)
```
Badge Style:
  - Background: #a6c516 (Green)
  - Text Color: white
  - Border Radius: rounded-full
  - Padding: px-3 py-1.5
  - Font: font-semibold, text-sm
  - Icon: (if applicable) placed before text
  
Example Classes:
  "inline-flex items-center gap-2 bg-[#a6c516] text-white rounded-full px-3 py-1.5 font-semibold text-sm"
```

### D. Decorative Arrow
```
Position: Below "Dr. Vaishalli Sathe" on left side
Icon: Use lucide-react "ArrowDown" or "ArrowDownRight"
Color: #3b7dba (Brand Blue)
Size: 48px or md:w-12 md:h-12
Styling: Rotate for diagonal appearance
Animation: Optional subtle bounce or pulse
```

### E. Doctor Image Section (Bottom Left)
```
Same as current implementation:
  - Container: w-full md:w-1/2
  - Image Div: w-[90%] md:w-[85%] h-[500px] md:h-[600px]
  - Border Radius: rounded-t-[300px]
  - Shadow: shadow-2xl
  - Image: object-cover object-top
```

### F. Bio Card (Bottom Right, Overlapping)
```
Same as current implementation:
  - Container: w-full md:w-[55%] md:-ml-12
  - Background: bg-[#3b7dba]
  - Green Top Border: h-1.5 bg-[#a6c516]
  - Padding: p-10 md:p-14
  - Doctor Name: font-extrabold with color #c8e830 (Light Green)
  - Credentials list with CheckCircle icons
  - Stats grid (2 columns)
```

## 3. Responsive Breakpoints

| Element | Mobile (< 768px) | Tablet (768px - 992px) | Desktop (> 992px) |
|---------|-----------------|----------------------|------------------|
| Main Heading | text-2xl | text-4xl | text-5xl |
| "Meet" Section | Full width, center | 50% width, center | 50% width, left |
| Cards Grid | 1 column (stacked) | 2 columns | 2 columns |
| Doctor Image | Full width | 50% | 50% |
| Bio Card | Full width, overlap | 55% width, overlap | 55% width, overlap |

## 4. Color Palette (Final)

```
Primary Blue: #3b7dba
Brand Green: #a6c516
Light Green (Highlight): #c8e830
Light Background: #f9faf7
White: #ffffff
Gray (Text): #666666
```

## 5. Full Page Layout Structure

```tsx
<section className="py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* 1. Section Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#3b7dba] text-center mb-12 md:mb-16">
      About the Doctor
    </h2>

    {/* 2. Meet & Cards Section */}
    <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
      
      {/* Left: Meet Doctor Name */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        {/* Content here */}
      </div>

      {/* Right: Credentials & Specialization Cards */}
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credentials Card */}
          {/* Specialization Card */}
        </div>
      </div>
    </div>

    {/* 3. Image & Bio Section */}
    <div className="flex flex-col md:flex-row items-center">
      {/* Doctor Image */}
      {/* Bio Card */}
    </div>

  </div>
</section>
```

## 6. Badge Content Mapping

### Credentials Card
- Title: "Credentials" (blue, bold)
- Items:
  - "Trained at renowned Institutes" (badge)
  - "India" (smaller badge)
  - "London" (smaller badge)

### Specialization Card
- Title: "Specialization" (blue, bold)
- Items:
  - "LASIK" (with eye icon)
  - "Advanced Cataract Surgery" (with eye icon)
  - "Personalised Eye Care" (with heart icon)

## 7. Implementation Checklist

- [ ] Add Credentials and Specialization cards above image section
- [ ] Implement green left border (border-l-4) on cards
- [ ] Create badge styling with green background
- [ ] Add decorative arrow icon between text and image
- [ ] Adjust spacing and gaps for all breakpoints
- [ ] Ensure responsive behavior (1 column mobile, 2 columns desktop)
- [ ] Verify color accuracy (#3b7dba, #a6c516, #c8e830, #f9faf7)
- [ ] Test font sizes and weights
- [ ] Validate shadow and overlap behavior
- [ ] Cross-check with screenshot for pixel-perfect match

## 8. Files to Modify

1. **src/components/sections/DoctorSection.tsx** - Main implementation
2. **src/constants/siteData.ts** - Add credential and specialization data structure (if not already present)

## 9. Data Structure Required (siteData.ts)

```typescript
export const doctorData = {
  // ... existing data ...
  credentials: [
    "Trained at renowned Institutes",
    "India",
    "London"
  ],
  specializations: [
    { icon: "Eye", label: "LASIK" },
    { icon: "Eye", label: "Advanced Cataract Surgery" },
    { icon: "Heart", label: "Personalised Eye Care" }
  ]
};
```

## 10. Key Differences from Current Implementation

| Current | New (Screenshot) |
|---------|------------------|
| No credentials/specialization cards | Displays Credentials & Specialization cards side-by-side |
| Single column layout initially | Two-column grid for cards |
| No decorative arrow | Blue decorative arrow added |
| Credentials in blue card only | Credentials shown in separate card section |
| Simpler layout | More structured, information-rich layout |


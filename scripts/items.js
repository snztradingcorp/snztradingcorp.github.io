// Last item missing asin value
const items = [
    {
        name:"Magneto Speed Rifle Kuhl Barrel Cooler",
        brand: "MagnetoSpeed",
        // model: "RIFLEKüHL",
        category:"Barrel",
        asin: "B07TLF4KKY",
        description: "Red Rifle Barrel Cooling, Chamber Flag during Shooting, uses for activities",
        details: [
            "Chamber seal for increased cooling efficiency", 
            "Turbocharger inspired impeller pushes ambient air down barrel",
            "Replaceable built-in 50 Micron air filter",
            "Belt/Pocket clip included for easy carrying",
            "Strong neodymium magnet to secure device"
        ],
        price: 60.00
    },
    {
        name:"Spyderco Tri-Angle Sharpmaker",
        brand: "Spyderco",
        category:"Other",
        asin: "B000Q9C4AE",
        description: "Knife Sharpening System with Medium Grit and Fine Ceramic Stones for Professional-Grade Finishing - Compact, Easy-to-Use Design - 204MF",
        details: [
            "Complete Sharpening System - Includes medium and fine grit ceramic stones for both edge maintenance and precision sharpening of knives and tools.",
            "Versatile Performance - Perfect for sharpening knives, awls, scissors, and and many other tools, making it an all-in-one solution for your sharpening needs.",
            "Effortless Sharpening - The Tri-Angle Sharpmaker makes sharpening easy, removing steel at the edge while maintaining consistent angles for precise results every time.",
            "Two Grit Options - Comes with medium-grit (brown) ceramic stones for aggressive sharpening and fine-grit (white) stones for a professional-grade, polished finish.",
            "Safe & Compact Design - Includes aluminum safety rods to protect your hands during use, and all components snap into the durable ABS plastic base for convenient storage. Complete with an instructional book and DVD for guided sharpening."
        ],
        condition: "New",
        price: 88.00,
        stock: 0
    },
    {
        name:"Crimson Trace RAD Micro Compact Open Reflex Pistol Sight",
        brand: "Crimson Trace",
        // model: "",
        category:"Scope",
        asin: "B08Q39GM75",
        description: "Pistol Sight with Integrated Co-Witness for Compact and Subcompact Handguns, Defensive Shooting and Competition",
        details: [
            "RUNTIME: 20,000 hours of battery life that runs on 1 CR1632 battery",
            "EASE OF USE: CT Radiant ambient light sensor adjusts reticle brightness and CT Motion shake-to-wake sensor automatically activates reticle when drawn",
            "ACCURACY: Sight features 3 MOA red dot reticle for easy target acquisition and integrated co-witness sight for added confidence",
            "DURABLE: Constructed from aerospace grade aluminum with recessed optic lens for added protection – IPX4 water resistant"
        ],
        price: 175.00
    },
    {
        name:"SureFire X300U-B X300 Ultra LED",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B016J0EITS",
        description: "LED WeaponLights with TIR Lens",
        details: [
            "Special off-white high-performance LED produces 600 lumens, biased in the yellowish-green spectrum optimal for human vision",
            "Precision TIR lens creates a smooth, tight beam with enough surround light for peripheral illumination",
            "Switching-Ambidextrous push/toogle, integral, ergonomic one-finger ambidextrous momentary - and constant -on switching",
            "Integral aluminum T-slot mounting system offers rock-solid attachment to railed hand guns and long guns equipped with MIL-STD 1913 rails",
            "Construction: High-strength aerospace aluminum with Mil-Spec anodizing; coated, tempered window"
        ],
        price: 271.00
    },
    {
        name:"Surefire Ultra High Output LED",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B00999CBJ6",
        description: "LED WeaponLights with TIR Lens",
        details: [
            "Special off-white high-performance LED produces 600 lumens biased in the yellowish-green spectrum optimal for human vision",
            "Precision TIR lens creates a smooth, tight beam with enough surround light for peripheral illumination",
            "Integral, ergonomic one-finger ambidextrous momentary and constant on switching",
            "Instantly attaches to both Universal and Picatinny accessory rails. FITS: The new T-slot mounting system fits most railed handguns (and rail-equipped long guns) but adapter mounts are available for some non-railed handguns",
            "Accepts optional pressure-activated switches for precision control without altering grip on weapon",
            "High-strength aerospace aluminum body is Mil-Spec hard anodized for extreme durability. Permits rapid attachment to and removal from rails on pistols or rifles"
        ],
        price: 291.00
    },
    {
        name:"Keson P110 Octoganal Chalk Line Reel",
        brand: "Keson",
        category:"Other",
        asin: "B0001VNY4M",
        description: "1.5mm String, 2-4-Ounce Capacity, 100-Foot ",
        details: [
            "Unique shape great for corner work",
            "Heavy-duty steel crank for long life",
            "Holds 3-Ounces of chalk",
            "100 Foot bold cord",
            "Self-sealing grommet for spill-free refills"
        ],
        price: 14.99
    },
    {
        name:"Spyderco Tenacious Folding Utility Pocket Knife",
        brand: "Spyderco",
        category:"Knife",
        asin: "B007CK46RO",
        description: "3.39'' Black Stainless Steel Blade and Durable G-10 Handle - Everyday Carry",
        details: [
            "Game Changer: Being tenacious means you are persistent and cohesive. It's being tough and tireless in achieving your best performance; all worthy descriptive words for a hard-use knife.",
            "Superior Blade Steel: The 3.39'' 8Cr13MoV stainless blade is coated in a non-reflective black coating and ground-flat from spine to cutting-edge for non-stop cutting.",
            "A Secure Grip: It has a black G-10 laminate handle, Ergonomically milled with prolonged fatigue-free cutting in mind.",
            "Easy-To-Use: The blade's shape coupled with an oversized Spyderco Round Hole and textured spine jimping allows you to open the blade and position your thumb on the spine in slip-proof confidence ready for work.",
            "Pocket-Friendly: The Tenacious includes a Walker Linerlock and a 4-way pocket clip lets the folder be set in a variety of carry and draw positions: Tip-up/tip-down left-hand/right-hand."
        ],
        price: 57.98
    },
    {
        name:"Competition Electronics ProTimer",
        brand: "Competition Electronics",
        category:"Other",
        asin: "B09NMNQPRX",
        description: "ProTimerBT Shot Timer Blue, One Size",
        details: [
            "Bluetooth capability with a free mobile app for Apple, Android, and Kindle devices to catalog data, and provide an enhanced user interface",
            "Bright LED indicator to signal the start, which can be useful for those with hearing loss",
            "Headset jack, for a private practice session, when the beeper may be a nuisance to others",
            "Built in shot string memory of up to 50 strings for later review on screen; Built in “hit factor” scoring calculator for USPSA shooters",
            "Increased sensitivity capability that can pick up the snap of a finger"
        ],
        price: 164.00
    },
    {
        name:"SureFire X300 Ultra Series LED WeaponLights with TIR Lens",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B00NCAD1J2",
        description: "Night Vision, Precision Beam with Peripheral Illumination, Tan color, Battery Powered",
        details: [
            "Special off-white high-performance LED produces 600 lumens, biased in the yellowish-green spectrum optimal for human vision",
            "Precision TIR lens creates a smooth, tight beam with enough surround light for peripheral illumination",
            "Integral, ergonomic one-finger ambidextrous momentary - and constant -on switching",
            "Features quick-detach Rail-Lock system for rapid and secure attachment/detachment",
            "Accepts optional pressure-activated switches for precision control without altering grip on weapon",
            "NOTE: Refer the User Manual before use.",
            "Special off-white high-performance LED produces 600 lumens, biased in the yellowish-green spectrum optimal for human vision"
        ],
        price: 279.00
    },
    {
        name:"SUREFIRE X300U Turbo Thumbsc",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B0B96XXVGN",
        description: "High-Candela LED Handgun WeaponLights",
        details: [
            "Hand Orientation: Ambidextrous",
            "Plastic Material, Black COlor"
        ],
        price: 269.50
    },
    {
        name:"SUREFIRE XSC-A 350LUM LED BLK",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B08KJSJ4XZ",
        description: "Micro-Compact Handgun Lights",
        details: [
            "Battery Powered LED",
            "Rechargeable, Black color, Plastic Material"
        ],
        price: 269.90
    },
    {
        name:"CRKT CEO Flipper EDC Folding Pocket Knife",
        category:"Knife",
        asin: "B08KDRVSD4",
        description: "Low Profile Gentleman's Knife, Everyday Carry, Satin Blade, IKBS Ball Bearing Pivot, Liner Lock, Glass Reinforced Fiber Handle, Deep Carry Pocket Clip",
        details: [
            "Smooth Opening: IKBS ball bearing pivot deploys the blade smooth",
            "Easy To Sharpen: High carbon stainless steel blade takes an edge well",
            "Fast Opening: Flipper deploys the blade fast",
            "Strong And Lightweight: Glass-reinforced nylon handle is durable and lightweight",
            "Easy Closing: Liner lock can be easily closed with one hand",
            "Carry Options: Adjustable clip for left or right hand carry"
        ],
        price: 45.98
    },
    {
        name:"SureFire unisex adult UE-SR07-BK Equipment",
        brand: "SureFire",
        category:"Other",
        asin: "B01B5E5NBK",
        description: "hunting and shooting equipment, Black, SWITCH-SOCKET ASSEMBLY US",
        details: [
            "The Black UE07 provides reliable remote activation for any Scout Light WeaponLight; The switch, cable, and connector are an integral unit that plugs into the tailcap socket",
            "Provides remote momentary-on and constant-on WeaponLight activation",
            "Switch platform with 7'' cable Snap-on to to Picatinny rail without tools",
            "Waterproof o-ring sealed housing",
            "Fits most Scout Light WeaponLights (excludes Micro Scout Light Pro)"
        ],
        price: 124.70
    },
    {
        name:"SureFire Scout Light Pro Ultra-High",
        brand: "SureFire",
        category:"Weapons Light",
        asin: "B086OO4295",
        description: "Ultra-High-Output LED WeaponLight",
        details: [
            "Good product",
            "Black color, plastic material, LED light"
        ],
        price: 310.00
    },
    {
        name:"Surefire Sonic Defenders Ear Plugs",
        brand: "SureFire",
        category:"Earbuds",
        asin: "B010TT1VO0",
        description: "",
        details: [
            "Black earbuds (1 pair)",
            "Noise Protection, plastic material"
        ],
        price: 16.99
    },
    {
        name:"SureFire G2X Tactical Single-Out",
        brand: "SureFire",
        category:"Flashlight",
        asin: "B009F7J8RA",
        description: "LED Flashlight with Tactical tailcap click switch, Black",
        details: [
            "Virtually indestructible LED emitter regulated to maximize light output and runtimex",
            "Single high output level of 600 lumens for maximum light",
            "Tactical tailcap click switch—partially press for momentary-on; push further until it clicks for constant-on",
            "Precision micro-textured reflector creates smooth, optimized beam",
            "Tough Nitrolon body, anodized aluminum bezel, Tough polycarbonate window resists impact"
        ],
        price: 78.69
    },
    {
        name:"SureFire EP7 Sonic Defenders Ultra",
        brand: "SureFire",
        category:"Earbuds",
        asin: "",
        description: "filtered Earplugs w/ Comply Canal Tips, reusable",
        details: [
            "28dB Noise Reduction Rating (NRR) with filter caps inserted, Hear safe sound levels (with filter caps out) as if you weren't wearing ear plugs",
            "Soft memory-foam Canal Comply Tips provide secure seals in ear canals and all-day comfort (additional pair of Comply Canal tips included)",
            "Low-profile design allows you to keep them in place while wearing a mask, helmet, hat, or while using supplemental hearing muffs",
            "Patented EarLock retention rings utilize seven contact points to lock earpieces in place and fit the same way every time",
            "Made in USA from hypoallergenic, medical-grade polymer that's soft, durable, and long-lasting"
        ],
        price: 0.00
    }
];
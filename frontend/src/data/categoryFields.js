export const CATEGORIES = [
    { key: "warehouse", label: "Warehouse", icon: "🏭" },
    { key: "industrial_plot", label: "Industrial Plot", icon: "🏗️" },
    { key: "industrial_workshop", label: "Industrial Workshop", icon: "⚙️" },
    { key: "shop", label: "Shop", icon: "🏪" },
    { key: "house", label: "House", icon: "🏠" },
];

const generalFields = [
    { name: "ownerName", label: "Owner Name", type: "text", placeholder: "John Doe" },
    { name: "ownerContact", label: "Owner Contact", type: "tel", placeholder: "+91 98765 43210" },
    { name: "totalArea", label: "Total Area", type: "text", placeholder: "e.g. 1200 sq ft" },
];

const warehouseSections = [
    {
        title: "📌 General Details",
        fields: generalFields,
    },
    {
        title: "🏗️ Structure Related",
        fields: [
            { name: "buildingAge", label: "Building Age", type: "number" },
            { name: "length", label: "Length", type: "number" },
            { name: "width", label: "Width", type: "number" },
            { name: "height", label: "Height Clearance", type: "number" },
            { name: "floors", label: "No. of floors", type: "number" },
            { name: "flooringType", label: "Flooring Type", type: "text", placeholder: "e.g. RCC, Epoxy" },
            { name: "floorLoading", label: "Floor Loading (ton/sq. m)", type: "number" },
            { name: "floorSlope", label: "Floor Slope (Yes/No)", type: "select", options: ["Yes", "No"] },
            { name: "ceilingType", label: "Ceiling type", type: "text", placeholder: "e.g. Concrete, False Ceiling" },
            { name: "trussCapacity", label: "Truss Capacity", type: "text", placeholder: "e.g. 5 Ton" },
            { name: "parkingSize", label: "Parking size (if any)", type: "text", placeholder: "e.g. 2 Cars" },
            { name: "dockLevellers", label: "Availability of dock levellers", type: "checkbox" },
            { name: "boundaryWall", label: "Boundary wall details", type: "text", placeholder: "e.g. 8ft compound wall" },
            { name: "overheadCrane", label: "Overhead crane", type: "checkbox" },
        ],
    },
    {
        title: "⚡ Utilities",
        fields: [
            { name: "powerConnection", label: "Power Connection Availability", type: "checkbox" },
            { name: "powerLoad", label: "Sanctioned Power loading KVA", type: "number" },
            { name: "smokeDetector", label: "Smoke detector/ Fire alarm", type: "checkbox" },
            { name: "sprinkler", label: "Fire Extinguisher/ Sprinkler", type: "checkbox" },
            { name: "fans", label: "Ventilation/ Exhaust Fans", type: "checkbox" },
            { name: "hvac", label: "Air-conditions (HVAC/ Air Washer/ Panel)", type: "checkbox" },
            { name: "toilets", label: "Toilets (Gents/ Ladies/ Indian/ Western)", type: "text", placeholder: "e.g. 2 Gents, 2 Ladies" },
            { name: "drainageSewage", label: "Drainage/ Sewage Connection", type: "checkbox" },
            { name: "internet", label: "Availability of Internet (wired connection)", type: "checkbox" },
            { name: "officeCabin", label: "Office cabin", type: "checkbox" },
            { name: "waterConnection", label: "Water connection", type: "checkbox" },
            { name: "hiBayLights", label: "Hi-bay lights/ Halogens/ Tubes", type: "checkbox" },
            { name: "dgAvailability", label: "DG availability", type: "checkbox" },
        ],
    },
    {
        title: "🚗 Access",
        fields: [
            { name: "accessRoad", label: "Access/ approach road availability", type: "text", placeholder: "e.g. 40ft road" },
            { name: "truckSpace", label: "Truck maneuvering space", type: "text", placeholder: "e.g. Available for 40ft trailer" },
            { name: "nearestHighway", label: "Distance of nearest Highway", type: "text", placeholder: "e.g. 2 km" },
        ],
    },
    {
        title: "🛡️ Security",
        fields: [
            { name: "cctv", label: "CCTV System", type: "checkbox" },
            { name: "gateLocking", label: "Gate locking", type: "checkbox" },
            { name: "guard", label: "Guard Availability", type: "checkbox" },
            { name: "wireFencing", label: "Wire fencing over boundary wall", type: "checkbox" },
        ],
    },
    {
        title: "⚖️ Legal",
        fields: [
            { name: "licenseNoc", label: "License & NOC", type: "checkbox" },
            { name: "propertyTaxNdc", label: "Property Tax Status / NDC", type: "checkbox" },
            { name: "buildingCompletion", label: "Building completion certificate", type: "checkbox" },
            { name: "litigationFree", label: "Litigation Free", type: "checkbox" },
            { name: "occupancyCert", label: "Occupancy Certificate", type: "checkbox" },
            { name: "nocEnvironment", label: "NOC from environment", type: "checkbox" },
            { name: "zonningApproval", label: "Zonning Approval", type: "checkbox" },
        ],
    },
];

const industrialPlotSections = [
    {
        title: "📌 General Details",
        fields: generalFields,
    },
    {
        title: "⚡ Utilities",
        fields: [
            { name: "powerLoad", label: "Sanctioned Power connection (KVA)", type: "number" },
            { name: "waterConnection", label: "Water Connection", type: "checkbox" },
            { name: "drainageSewage", label: "Drainage/ Sewage", type: "checkbox" },
        ],
    },
    {
        title: "🏗️ Structure",
        fields: [
            { name: "slope", label: "Slope", type: "text", placeholder: "e.g. Flat, Gentle slope" },
            { name: "elevation", label: "Elevation from ground level", type: "text", placeholder: "e.g. 2ft above road" },
            { name: "boundaryWall", label: "Boundary wall / fence", type: "text", placeholder: "e.g. Chain link fence" },
        ],
    },
    {
        title: "⚖️ Legal",
        fields: [
            { name: "ownershipDetails", label: "Ownership details", type: "text", placeholder: "e.g. Freehold, Leasehold" },
            { name: "litigationFree", label: "Litigation Free", type: "checkbox" },
            { name: "nocMunicipal", label: "NOC from municipal", type: "checkbox" },
            { name: "nocEnvironment", label: "NOC from environment", type: "checkbox" },
            { name: "zonningApproval", label: "Zonning Approval", type: "checkbox" },
        ],
    },
    {
        title: "🚗 Access",
        fields: [
            { name: "accessRoad", label: "Access/ approach road availability", type: "text", placeholder: "e.g. 40ft road" },
            { name: "truckSpace", label: "Truck maneuvering space", type: "text", placeholder: "e.g. Available" },
            { name: "nearestHighway", label: "Distance of nearest Highway", type: "text", placeholder: "e.g. 2 km" },
        ],
    },
    {
        title: "🛡️ Security",
        fields: [
            { name: "cctv", label: "CCTV System", type: "checkbox" },
            { name: "gateLocking", label: "Gate locking", type: "checkbox" },
            { name: "guard", label: "Guard Availability", type: "checkbox" },
        ],
    },
];

const industrialWorkshopSections = [
    {
        title: "📌 General Details",
        fields: generalFields,
    },
    {
        title: "🏗️ Structure Related",
        fields: [
            { name: "buildingAge", label: "Building Age", type: "number" },
            { name: "length", label: "Length", type: "number" },
            { name: "width", label: "Width", type: "number" },
            { name: "height", label: "Height Clearance", type: "number" },
            { name: "floors", label: "No. of floors", type: "number" },
            { name: "flooringType", label: "Flooring Type", type: "text", placeholder: "e.g. RCC, Epoxy" },
            { name: "floorLoading", label: "Floor Loading (ton/sq. m)", type: "number" },
            { name: "floorSlope", label: "Floor Slope (Yes/No)", type: "select", options: ["Yes", "No"] },
            { name: "ceilingType", label: "Ceiling type", type: "text", placeholder: "e.g. Concrete, False Ceiling" },
            { name: "trussCapacity", label: "Truss Capacity", type: "text", placeholder: "e.g. 5 Ton" },
            { name: "parkingSize", label: "Parking size (if any)", type: "text", placeholder: "e.g. 2 Cars" },
            { name: "overheadCrane", label: "Overhead crane", type: "checkbox" },
            { name: "naturalLight", label: "Natural light availability", type: "checkbox" },
            { name: "boundaryWall", label: "Boundary wall details", type: "text", placeholder: "e.g. 8ft compound wall" },
        ],
    },
    {
        title: "⚡ Utilities",
        fields: [
            { name: "powerConnection", label: "Power Connection Availability", type: "checkbox" },
            { name: "powerLoad", label: "Sanctioned Power loading KVA", type: "number" },
            { name: "smokeDetector", label: "Smoke detector/ Fire alarm", type: "checkbox" },
            { name: "sprinkler", label: "Fire Extinguisher/ Sprinkler", type: "checkbox" },
            { name: "fans", label: "Ventilation/ Exhaust Fans", type: "checkbox" },
            { name: "hvac", label: "Air-conditions (HVAC/ Air Washer/ Panel)", type: "checkbox" },
            { name: "toilets", label: "Toilets (Gents/ Ladies/ Indian/ Western)", type: "text", placeholder: "e.g. 2 Gents, 2 Ladies" },
            { name: "drainageSewage", label: "Drainage/ Sewage Connection", type: "checkbox" },
            { name: "internet", label: "Availability of Internet (wired connection)", type: "checkbox" },
            { name: "officeCabin", label: "Office cabin", type: "checkbox" },
            { name: "waterConnection", label: "Water connection", type: "checkbox" },
            { name: "hiBayLights", label: "Hi-bay lights/ Halogens/ Tubes", type: "checkbox" },
            { name: "dgAvailability", label: "DG availability", type: "checkbox" },
            { name: "drainageSewageExtra", label: "Drainage/ Sewage", type: "checkbox" },
        ],
    },
    {
        title: "⚖️ Legal",
        fields: [
            { name: "buildingCompletion", label: "Building completion certificate", type: "checkbox" },
            { name: "litigationFree", label: "Litigation Free", type: "checkbox" },
            { name: "occupancyCert", label: "Occupancy Certificate", type: "checkbox" },
            { name: "nocEnvironment", label: "NOC from environment", type: "checkbox" },
            { name: "zonningApproval", label: "Zonning Approval", type: "checkbox" },
        ],
    },
    {
        title: "🚗 Access",
        fields: [
            { name: "accessRoad", label: "Access/ approach road availability", type: "text", placeholder: "e.g. 40ft road" },
            { name: "truckSpace", label: "Truck maneuvering space", type: "text", placeholder: "e.g. Available" },
            { name: "nearestHighway", label: "Distance of nearest Highway", type: "text", placeholder: "e.g. 2 km" },
        ],
    },
    {
        title: "🛡️ Security",
        fields: [
            { name: "cctv", label: "CCTV System", type: "checkbox" },
            { name: "gateLocking", label: "Gate locking", type: "checkbox" },
            { name: "guard", label: "Guard Availability", type: "checkbox" },
        ],
    },
];

const shopSections = [
    {
        title: "📌 General Details",
        fields: generalFields,
    },
    {
        title: "🏗️ Structure Related",
        fields: [
            { name: "buildingAge", label: "Building Age", type: "number" },
            { name: "length", label: "Length", type: "number" },
            { name: "width", label: "Width", type: "number" },
            { name: "height", label: "Height Clearance", type: "number" },
            { name: "floors", label: "No. of floors", type: "number" },
            { name: "ceilingType", label: "Ceiling type", type: "text", placeholder: "e.g. Concrete, False Ceiling" },
            { name: "parkingSize", label: "Parking size (if any)", type: "text", placeholder: "e.g. 2 Cars" },
        ],
    },
    {
        title: "⚡ Utilities",
        fields: [
            { name: "powerConnection", label: "Power Connection Availability", type: "checkbox" },
            { name: "powerLoad", label: "Sanctioned Power loading KVA", type: "number" },
            { name: "smokeDetector", label: "Smoke detector/ Fire alarm", type: "checkbox" },
            { name: "sprinkler", label: "Fire Extinguisher/ Sprinkler", type: "checkbox" },
            { name: "fans", label: "Ventilation/ Exhaust Fans", type: "checkbox" },
        ],
    },
    {
        title: "⚖️ Legal",
        fields: [
            { name: "commercialZoning", label: "Commercial zonning", type: "checkbox" },
            { name: "litigationFree", label: "Litigation Free", type: "checkbox" },
            { name: "occupancyCert", label: "Occupancy Certificate", type: "checkbox" },
            { name: "taxPaid", label: "Property Tax Paid", type: "checkbox" },
        ],
    },
    {
        title: "👀 Visibility",
        fields: [
            { name: "footfall", label: "Footfall", type: "select", options: ["Low", "Medium", "High"] },
            { name: "signage", label: "Space for signage /poster", type: "checkbox" },
            { name: "displayWindows", label: "Display windows", type: "checkbox" },
        ],
    },
    {
        title: "🛡️ Security",
        fields: [
            { name: "shutter", label: "Shutter", type: "checkbox" },
            { name: "guard", label: "Guard Availability", type: "checkbox" },
        ],
    },
];

const houseSections = [
    {
        title: "📌 General Details",
        fields: [
            ...generalFields,
            { name: "houseType", label: "Type", type: "select", options: ["Floor", "Flat", "Villa", "Independent House", "Plot"] },
            { name: "carpetArea", label: "Carpet Area", type: "text", placeholder: "e.g. 1000 sq ft" },
            { name: "builtUpArea", label: "Built Up Area", type: "text", placeholder: "e.g. 1200 sq ft" },
        ],
    },
    {
        title: "🏗️ Structure Related",
        fields: [
            { name: "buildingAge", label: "Building Age", type: "number", placeholder: "e.g. 5" },
            { name: "totalFloors", label: "No. of floors in building", type: "number", placeholder: "e.g. 12" },
            { name: "floorNo", label: "Floor No", type: "text", placeholder: "e.g. 2nd" },
            { name: "configuration", label: "Configuration", type: "select", options: ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK"] },
            { name: "bathrooms", label: "No of Bathrooms", type: "number", placeholder: "e.g. 2" },
            { name: "flooringType", label: "Flooring", type: "select", options: ["Tile", "Italian", "Marble", "Wooden", "Other"] },
            { name: "houseView", label: "View", type: "select", options: ["Park", "Pool", "Garden", "Road", "Other"] },
            { name: "facing", label: "Facing", type: "select", options: ["North", "North East", "East", "South East", "South", "South West", "West", "North West"] },
            { name: "parking", label: "Parking", type: "text", placeholder: "e.g. 2 covered" },
            { name: "locality", label: "Locality", type: "select", options: ["Society", "High Rise", "Sector", "Independent"] },
            { name: "powerBackup", label: "Power Backup", type: "checkbox" },
            { name: "cornerHouse", label: "Corner House", type: "checkbox" },
        ],
    },
    {
        title: "🛋️ Furnishing",
        fields: [
            { name: "curtains", label: "Curtains", type: "checkbox" },
            { name: "houseFans", label: "Fans", type: "checkbox" },
            { name: "geyser", label: "Geyser", type: "checkbox" },
            { name: "ac", label: "AC", type: "checkbox" },
            { name: "chimney", label: "Chimney", type: "checkbox" },
            { name: "houseSmoke", label: "Smoke Detectors", type: "checkbox" },
            { name: "modularKitchen", label: "Modular Kitchen", type: "checkbox" },
            { name: "ro", label: "RO", type: "checkbox" },
        ],
    },
    {
        title: "🏢 Facility",
        fields: [
            { name: "facilityPowerBackup", label: "Power Backup", type: "checkbox" },
            { name: "lift", label: "Lift", type: "checkbox" },
            { name: "maintenanceStaff", label: "Maintenance Staff", type: "checkbox" },
            { name: "securityGuard", label: "Security Guard", type: "checkbox" },
            { name: "park", label: "Park", type: "checkbox" },
            { name: "clubHouse", label: "Club House", type: "checkbox" },
            { name: "pipedGasSupply", label: "Piped Gas Supply", type: "checkbox" },
            { name: "gym", label: "Gym", type: "checkbox" },
        ],
    },
];

export const CATEGORY_SECTIONS = {
    warehouse: warehouseSections,
    industrial_plot: industrialPlotSections,
    industrial_workshop: industrialWorkshopSections,
    shop: shopSections,
    house: houseSections,
};

export const CATEGORY_TO_SUBTYPES = {
    Residential: ["house"],
    Warehouse: ["warehouse"],
    "Industrial Plot": ["industrial_plot"],
    "Industrial Workshop": ["industrial_workshop"],
    Shop: ["shop"],
};

export const ALL_FIELD_NAMES = (() => {
    const names = new Set();
    Object.values(CATEGORY_SECTIONS).forEach(sections => {
        sections.forEach(section => {
            section.fields.forEach(f => names.add(f.name));
        });
    });
    return [...names];
})();

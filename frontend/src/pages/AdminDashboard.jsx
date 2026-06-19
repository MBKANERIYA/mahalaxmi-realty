import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Home,
    Building,
    Factory,
    Hammer,
    Store,
    Save,
    Upload,
    X,
    MapPin,
    Crosshair,
} from "lucide-react";
import { cn } from "../lib/utils";
import {
    CATEGORY_SECTIONS,
    CATEGORY_TO_SUBTYPES,
    ALL_FIELD_NAMES,
} from "../data/categoryFields";
import "../admin.css";

export default function AdminDashboard() {
    const formRef = useRef(null);
    const fileInputRef = useRef(null);
    const [type, setType] = useState("Sale");
    const [category, setCategory] = useState("Residential");
    const [subType, setSubType] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    // Category-specific form data
    const [categoryData, setCategoryData] = useState({});

    // Custom extra fields per section
    const [customSectionFields, setCustomSectionFields] = useState({});

    // Location detection state
    const [locationAddress, setLocationAddress] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [mapLink, setMapLink] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [isDetectingLocation, setIsDetectingLocation] = useState(false);
    const [locationError, setLocationError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('isAdmin') !== 'true') {
            window.location.hash = '#/admin';
        }
    }, []);

    const detectLocation = async () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser");
            return;
        }

        setIsDetectingLocation(true);
        setLocationError(null);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setLatitude(lat.toString());
                setLongitude(lng.toString());
                setMapLink(`https://www.google.com/maps?q=${lat},${lng}`);

                try {
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`,
                        { headers: { 'Accept-Language': 'en' } }
                    );
                    const data = await res.json();
                    if (data.address) {
                        const addr = data.address;
                        const fullAddress = data.display_name || "";
                        setLocationAddress(fullAddress);
                        setCity(addr.city || addr.town || addr.village || addr.state_district || "");
                        setPinCode(addr.postcode || "");
                    }
                } catch {
                    setLocationError("Could not detect address. Please fill manually.");
                }
                setIsDetectingLocation(false);
            },
            (error) => {
                setIsDetectingLocation(false);
                setLocationError("Failed to detect location.");
            },
            { enableHighAccuracy: true, timeout: 15000 }
        );
    };

    const getActiveSections = () => {
        const subtypes = CATEGORY_TO_SUBTYPES[category] || [];
        if (subtypes.length === 0) return [];
        return CATEGORY_SECTIONS[subtypes[0]] || [];
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCategoryData({});
    };

    const handleCategoryFieldChange = (fieldName, value) => {
        setCategoryData(prev => ({ ...prev, [fieldName]: value }));
    };

    const addCustomField = (sectionTitle) => {
        const id = Math.random().toString(36).substring(2, 9);
        const isAccess = sectionTitle.includes("Access");
        setCustomSectionFields(prev => ({
            ...prev,
            [sectionTitle]: [...(prev[sectionTitle] || []), { id, name: "", value: isAccess ? "" : "Yes" }]
        }));
    };

    const updateCustomField = (sectionTitle, id, field, val) => {
        setCustomSectionFields(prev => ({
            ...prev,
            [sectionTitle]: prev[sectionTitle].map(cf => cf.id === id ? { ...cf, [field]: val } : cf)
        }));
    };

    const removeCustomField = (sectionTitle, id) => {
        setCustomSectionFields(prev => ({
            ...prev,
            [sectionTitle]: prev[sectionTitle].filter(cf => cf.id !== id)
        }));
    };

    const handleFileSelect = async (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setIsUploading(true);
        
        try {
            const formData = new FormData();
            Array.from(files).forEach(file => {
                formData.append('images', file);
            });

            const res = await fetch('http://localhost:5001/api/upload', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            
            if (res.ok && data.urls) {
                setUploadedImages(prev => [...prev, ...data.urls]);
            } else {
                alert(data.error || 'Failed to upload images to Cloudinary');
            }
        } catch (err) {
            console.error('Upload error:', err);
            alert('Error connecting to upload server');
        }

        setIsUploading(false);
        e.target.value = '';
    };

    const removeImage = (index) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
    };

    const removeVideo = (index) => {
        const newVideos = uploadedVideos.filter((_, i) => i !== index);
        setUploadedVideos(newVideos);
        setVideoUrl(newVideos[0] || "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(formRef.current);
        const payload = Object.fromEntries(formData.entries());

        // Convert checkbox "on" to true
        Object.keys(payload).forEach(key => {
            if (payload[key] === 'on') payload[key] = true;
        });

        payload.type = type;
        payload.category = category;
        payload.imageUrls = uploadedImages;
        payload.image = uploadedImages[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80';
        payload.videoUrl = videoUrl;

        const finalCategoryData = {
            ...categoryData,
            customFields: customSectionFields
        };
        payload.categoryData = finalCategoryData;
        
        // Map common fields back to the old schema if they exist to keep frontend working
        payload.society = payload.crmLocation || payload.area || "Unknown Location";
        payload.pricePerSqYd = payload.priceUnit ? `${payload.price} ${payload.priceUnit}` : payload.price;

        try {
            const res = await fetch('http://localhost:5001/api/properties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (res.ok) {
                alert("Property added successfully!");
                formRef.current.reset();
                setUploadedImages([]);
                window.location.hash = '#/';
            } else {
                setError(data.error || "Failed to add property");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        }
        setIsSubmitting(false);
    };

    const renderCategoryField = (field) => {
        const value = categoryData[field.name];

        if (field.type === "checkbox") {
            return (
                <label
                    key={field.name}
                    className="flex items-center gap-3 p-3 rounded-lg metallic-border bg-card-bg cursor-pointer hover:border-gold-accent transition-colors"
                >
                    <input
                        type="checkbox"
                        checked={!!value}
                        onChange={(e) => handleCategoryFieldChange(field.name, e.target.checked)}
                        className="w-4 h-4 accent-gold-accent"
                    />
                    <span className="text-sm text-platinum">{field.label}</span>
                </label>
            );
        }

        if (field.type === "select") {
            return (
                <div key={field.name}>
                    <label className="block text-sm text-muted mb-2">{field.label}</label>
                    <select
                        value={value || (field.options?.[0] || "")}
                        onChange={(e) => handleCategoryFieldChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors cursor-pointer"
                    >
                        {field.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            );
        }

        return (
            <div key={field.name}>
                <label className="block text-sm text-muted mb-2">
                    {field.label}
                </label>
                <input
                    type={field.type || "text"}
                    value={value || ""}
                    onChange={(e) => handleCategoryFieldChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                    placeholder={field.placeholder || ""}
                />
            </div>
        );
    };

    const renderCategorySection = (section, idx) => {
        const checkboxFields = section.fields.filter(f => f.type === "checkbox");
        const otherFields = section.fields.filter(f => f.type !== "checkbox");

        const targetSections = ["Furnishing", "Facility", "Utilities", "Access", "Security", "Legal"];
        const canAddCustom = targetSections.some(t => section.title.includes(t));
        const sectionCustomFields = customSectionFields[section.title] || [];
        const isAccessSection = section.title.includes("Access");

        return (
            <div key={idx} className="glass-card p-6">
                <h2 className="heading-display text-lg text-platinum mb-6">
                    {section.title}
                </h2>
                <div className="space-y-4">
                    {otherFields.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {otherFields.map(renderCategoryField)}
                        </div>
                    )}
                    {checkboxFields.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {checkboxFields.map(renderCategoryField)}
                        </div>
                    )}
                </div>

                {/* Custom Fields */}
                {(canAddCustom || sectionCustomFields.length > 0) && (
                    <div className="mt-6 pt-6 border-t border-card-border">
                        {sectionCustomFields.length > 0 && (
                            <div className="space-y-3 mb-4">
                                {sectionCustomFields.map((cf) => (
                                    <div key={cf.id} className="flex gap-3 items-center">
                                        <input
                                            type="text"
                                            placeholder={isAccessSection ? "Field Name (e.g. Nearest Metro)" : "Feature Name (e.g. WiFi)"}
                                            value={cf.name}
                                            onChange={(e) => updateCustomField(section.title, cf.id, 'name', e.target.value)}
                                            className="flex-1 px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors text-sm"
                                        />
                                        {isAccessSection ? (
                                            <input
                                                type="text"
                                                placeholder="Value (e.g. 2 km)"
                                                value={cf.value}
                                                onChange={(e) => updateCustomField(section.title, cf.id, 'value', e.target.value)}
                                                className="flex-1 px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors text-sm"
                                            />
                                        ) : (
                                            <div className="flex-1 px-4 py-3 rounded-lg bg-card-bg border border-card-border text-platinum flex items-center gap-3">
                                                <input type="checkbox" checked readOnly className="w-5 h-5 accent-gold-accent cursor-default pointer-events-none" />
                                                <span className="text-sm">Included</span>
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => removeCustomField(section.title, cf.id)}
                                            className="p-3 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors flex-shrink-0"
                                            title="Remove Field"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        {canAddCustom && (
                            <button
                                type="button"
                                onClick={() => addCustomField(section.title)}
                                className="text-sm text-gold-accent hover:text-gold-accent/80 font-medium flex items-center gap-1 transition-colors"
                            >
                                + Add Extra Field
                            </button>
                        )}
                    </div>
                )}
            </div>
        );
    };

    const activeSections = getActiveSections();
    const subtypes = CATEGORY_TO_SUBTYPES[category] || [];

    return (
        <div className="min-h-screen bg-background pb-20 pt-4">
            <header className="glass-card mx-4 mt-4 md:mx-8 p-4 mb-8">
                <div className="flex items-center gap-4">
                    <a
                        href="#/"
                        className="flex items-center gap-2 text-muted hover:text-gold-accent transition-colors text-decoration-none"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Website
                    </a>
                    <button 
                        className="btn btn-outline-danger ms-auto btn-sm"
                        onClick={() => { localStorage.removeItem('isAdmin'); window.location.hash = '#/admin'; }}
                    >Logout</button>
                </div>
            </header>

            <main className="container-custom" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="heading-display text-2xl md:text-3xl text-platinum mb-8">
                        Add New Property
                    </h1>

                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                            {error}
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="glass-card p-6">
                            <h2 className="heading-display text-lg text-platinum mb-6">
                                Basic Information
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Property Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="e.g., Luxury Villa in Greater Noida"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors resize-none"
                                        placeholder="Describe the property..."
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Price <span className="text-xs text-muted">(leave blank if not specified)</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            step="0.01"
                                            min="0"
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="e.g., 45 or 1.5"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Price Unit
                                        </label>
                                        <select
                                            name="priceUnit"
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors cursor-pointer"
                                        >
                                            <option value="Lac">Lac (₹ Lakh)</option>
                                            <option value="Cr">Cr (₹ Crore)</option>
                                            <option value="Month">/Month (Rent)</option>
                                            <option value="Lac/Acre">Lac/Acre</option>
                                            <option value="">No Unit</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Type & Category */}
                        <div className="glass-card p-6">
                            <h2 className="heading-display text-lg text-platinum mb-6">
                                Type & Category
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm text-muted mb-3">
                                        Listing Type
                                    </label>
                                    <div className="flex gap-3">
                                        {["Sale", "Rent"].map((t) => (
                                            <button
                                                key={t}
                                                type="button"
                                                onClick={() => setType(t)}
                                                className={cn(
                                                    "flex-1 py-3 rounded-lg font-medium transition-all",
                                                    type === t
                                                        ? "bg-gold-accent text-white"
                                                        : "metallic-border bg-card-bg text-platinum hover:border-gold-accent"
                                                )}
                                            >
                                                For {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-3">
                                        Category
                                    </label>
                                    <div className="flex gap-3 flex-wrap">
                                        {[
                                            { value: "Residential", icon: Home },
                                            { value: "Warehouse", icon: Building },
                                            { value: "Industrial Plot", icon: Factory },
                                            { value: "Industrial Workshop", icon: Hammer },
                                            { value: "Shop", icon: Store },
                                        ].map(({ value, icon: Icon }) => (
                                            <button
                                                key={value}
                                                type="button"
                                                onClick={() => handleCategoryChange(value)}
                                                className={cn(
                                                    "flex-1 min-w-[120px] py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2",
                                                    category === value
                                                        ? "bg-brushed-silver text-matte-black"
                                                        : "metallic-border bg-card-bg text-platinum hover:border-gold-accent"
                                                )}
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span className="text-sm">{value}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {subtypes.length > 1 && (
                                <div className="mt-6 pt-6 border-t border-card-border">
                                    <label className="block text-sm text-muted mb-3">
                                        Sub-Type
                                    </label>
                                    <div className="flex gap-3 flex-wrap">
                                        {subtypes.map((st) => {
                                            const config = {
                                                warehouse: { label: "🏭 Warehouse" },
                                                industrial_plot: { label: "🏗️ Industrial Plot" },
                                                industrial_workshop: { label: "⚙️ Industrial Workshop" },
                                            };
                                            return (
                                                <button
                                                    key={st}
                                                    type="button"
                                                    onClick={() => { setSubType(st); setCategoryData({}); }}
                                                    className={cn(
                                                        "px-4 py-3 rounded-lg font-medium transition-all",
                                                        subType === st
                                                            ? "bg-gold-accent text-white"
                                                            : "metallic-border bg-card-bg text-platinum hover:border-gold-accent"
                                                    )}
                                                >
                                                    {config[st]?.label || st}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 pt-6 border-t border-card-border">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        className="w-5 h-5 rounded border-card-border bg-card-bg text-gold-accent focus:ring-gold-accent focus:ring-offset-0 cursor-pointer"
                                    />
                                    <div>
                                        <span className="text-platinum font-medium">Featured Property</span>
                                        <p className="text-xs text-muted mt-0.5">Show this property on the homepage</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <MapPin className="w-5 h-5 text-gold-accent" />
                                <h2 className="heading-display text-lg text-platinum mb-0">
                                    Location Details
                                </h2>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={detectLocation}
                                        disabled={isDetectingLocation}
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-accent text-white font-medium hover:bg-gold-accent/90 transition-all disabled:opacity-50 border-0"
                                    >
                                        {isDetectingLocation ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Detecting...
                                            </>
                                        ) : (
                                            <>
                                                <Crosshair className="w-4 h-4" />
                                                Detect Location
                                            </>
                                        )}
                                    </button>
                                    <span className="text-xs text-muted">Auto-detect address & pin code</span>
                                </div>

                                {locationError && (
                                    <p className="text-sm text-red-400">{locationError}</p>
                                )}

                                <div>
                                    <label className="block text-sm text-platinum mb-2">
                                        Location name for CRM <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="crmLocation"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="Location name to show in CRM (Compulsory)"
                                    />
                                    <p className="text-xs text-muted mt-1">This exact name will be sent to the CRM inventory location fetch.</p>
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={locationAddress}
                                        onChange={(e) => setLocationAddress(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="Detected address will appear here"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="e.g. Dharuhera"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Pin Code
                                        </label>
                                        <input
                                            type="text"
                                            name="pinCode"
                                            value={pinCode}
                                            onChange={(e) => setPinCode(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="e.g. 123110"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Area/Locality
                                    </label>
                                    <input
                                        type="text"
                                        name="area"
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="e.g. Sector 5, IMT"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Google Maps Link
                                    </label>
                                    <input
                                        type="url"
                                        name="mapLink"
                                        value={mapLink}
                                        onChange={(e) => setMapLink(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="https://maps.google.com/..."
                                    />
                                </div>

                                <input type="hidden" name="latitude" value={latitude} />
                                <input type="hidden" name="longitude" value={longitude} />

                                {latitude && longitude && (
                                    <p className="text-xs text-muted">
                                        📍 Coordinates: {parseFloat(latitude).toFixed(6)}, {parseFloat(longitude).toFixed(6)}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Property Media */}
                        <div className="glass-card p-6">
                            <h2 className="heading-display text-lg text-platinum mb-6">
                                Property Media
                            </h2>

                            <div className="space-y-4">
                                {uploadedImages.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                        {uploadedImages.map((url, index) => (
                                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                                <img
                                                    src={url}
                                                    alt={`Property image ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity border-0"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileSelect}
                                        accept="image/*,video/*"
                                        multiple
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        disabled={isUploading}
                                        className="w-full py-8 rounded-lg border-2 border-dashed border-card-border hover:border-gold-accent transition-colors flex flex-col items-center justify-center gap-3 text-muted hover:text-platinum bg-transparent"
                                    >
                                        {isUploading ? (
                                            <>
                                                <div className="w-8 h-8 border-2 border-gold-accent border-t-transparent rounded-full animate-spin" />
                                                <span>Uploading...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="w-8 h-8" />
                                                <span>Click to upload images & videos</span>
                                                <span className="text-xs">Images: JPG, PNG, WebP (max 10MB) • Videos: MP4, WebM, MOV (max 100MB)</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-xs text-muted">
                                    {uploadedImages.length} images uploaded
                                </p>
                            </div>
                        </div>

                        {/* Category-Specific Sections */}
                        {activeSections.length > 0 && (
                            <>
                                {activeSections.map((section, idx) => {
                                    if (section.title === "🏗️ Structure Related" && categoryData.houseType === "Plot") {
                                        return null;
                                    }
                                    return renderCategorySection(section, idx);
                                })}
                            </>
                        )}

                        {activeSections.length === 0 && (
                            <div className="glass-card p-6">
                                <h2 className="heading-display text-lg text-platinum mb-6">
                                    Property Features
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Bedrooms
                                        </label>
                                        <input
                                            type="number"
                                            name="bedrooms"
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Bathrooms
                                        </label>
                                        <input
                                            type="number"
                                            name="bathrooms"
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-muted mb-2">
                                            Area Size
                                        </label>
                                        <input
                                            type="text"
                                            name="areaSize"
                                            className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                            placeholder="e.g., 2500 sq.ft"
                                        />
                                    </div>
                                </div>

                                <label className="block text-sm text-muted mb-3">Amenities</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                                    {[
                                        { name: "parking", label: "Parking" },
                                        { name: "furnished", label: "Furnished" },
                                        { name: "powerBackup", label: "Power Backup" },
                                        { name: "waterSupply", label: "Water Supply" },
                                        { name: "security", label: "Security" },
                                        { name: "lift", label: "Lift" },
                                        { name: "garden", label: "Garden" },
                                        { name: "gym", label: "Gym" },
                                        { name: "swimmingPool", label: "Swimming Pool" },
                                    ].map(({ name, label }) => (
                                        <label
                                            key={name}
                                            className="flex items-center gap-3 p-3 rounded-lg metallic-border bg-card-bg cursor-pointer hover:border-gold-accent transition-colors"
                                        >
                                            <input
                                                type="checkbox"
                                                name={name}
                                                className="w-4 h-4 accent-gold-accent"
                                            />
                                            <span className="text-sm text-platinum">{label}</span>
                                        </label>
                                    ))}
                                </div>

                                <div>
                                    <label className="block text-sm text-muted mb-2">
                                        Additional Amenities (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        name="customAmenities"
                                        className="w-full px-4 py-3 rounded-lg bg-card-bg text-platinum border border-card-border focus:border-gold-accent outline-none transition-colors"
                                        placeholder="e.g., Clubhouse, Tennis Court, Children's Play Area"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-gold flex items-center gap-2 disabled:opacity-50"
                            >
                                <Save className="w-4 h-4" />
                                {isSubmitting ? "Saving..." : "Save Property"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </main>
        </div>
    );
}

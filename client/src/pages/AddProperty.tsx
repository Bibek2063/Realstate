/**
 * Add Property Page
 * Modern Luxury Minimalism: Multi-step form for property listing
 */

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ChevronRight, Upload, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';

type FormStep = 1 | 2 | 3 | 4 | 5;

interface PropertyFormData {
  title: string;
  price: number;
  type: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  parking: boolean;
  water: boolean;
  internet: boolean;
  garden: boolean;
  security: boolean;
  images: File[];
  description: string;
}

export default function AddProperty() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<Partial<PropertyFormData>>({});
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleStepChange = (newStep: FormStep) => {
    if (newStep > step && step < 5) {
      setStep(newStep);
    } else if (newStep < step) {
      setStep(newStep);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit_ = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep((step + 1) as FormStep);
    } else {
      console.log('Form submitted:', formData);
      alert('Property listed successfully!');
    }
  };

  const steps = [
    { number: 1, title: 'Basic Info' },
    { number: 2, title: 'Details' },
    { number: 3, title: 'Amenities' },
    { number: 4, title: 'Media' },
    { number: 5, title: 'Review' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">List Your Property</h1>
          <p className="text-muted-foreground">
            Follow these steps to list your property and reach millions of buyers
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((s, idx) => (
              <div key={s.number} className="flex items-center flex-1">
                <button
                  onClick={() => handleStepChange(s.number as FormStep)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                    s.number <= step
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s.number < step ? <Check size={20} /> : s.number}
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-all ${
                      s.number < step ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            {steps.map(s => (
              <span key={s.number}>{s.title}</span>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit_} className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl mb-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground">Basic Information</h2>

                <div>
                  <label className="block font-semibold text-foreground mb-2">
                    Property Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g., Luxury Modern Estate with Pool"
                    value={formData.title || ''}
                    onChange={handleInputChange}
                    className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="2500000"
                      value={formData.price || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Property Type
                    </label>
                    <select
                      name="type"
                      value={formData.type || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Address, city, state"
                    value={formData.location || ''}
                    onChange={handleInputChange}
                    className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Physical Details */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground">Physical Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Area (sqft)
                    </label>
                    <input
                      type="number"
                      name="area"
                      placeholder="8500"
                      value={formData.area || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      name="bedrooms"
                      placeholder="5"
                      value={formData.bedrooms || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      placeholder="3"
                      value={formData.bathrooms || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-foreground mb-2">
                      Floors
                    </label>
                    <input
                      type="number"
                      name="floors"
                      placeholder="2"
                      value={formData.floors || ''}
                      onChange={handleInputChange}
                      className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Amenities */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground">Amenities</h2>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'parking', label: 'Parking' },
                    { name: 'water', label: 'Water Supply' },
                    { name: 'internet', label: 'Internet' },
                    { name: 'garden', label: 'Garden' },
                    { name: 'security', label: 'Security' },
                  ].map(amenity => (
                    <label key={amenity.name} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name={amenity.name}
                        checked={(formData as any)[amenity.name] || false}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded"
                      />
                      <span className="font-medium text-foreground">{amenity.label}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block font-semibold text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe your property..."
                    value={formData.description || ''}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-input rounded-lg px-4 py-3 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Media */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground">Upload Media</h2>

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                  <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
                  <p className="font-semibold text-foreground mb-1">
                    Drag and drop images here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                  <button className="btn-secondary text-sm">
                    Select Images
                  </button>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <strong>💡 Tip:</strong> Upload at least 5 high-quality images for better visibility
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-foreground">Review Your Listing</h2>

                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Title</p>
                    <p className="font-semibold text-foreground">{formData.title}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Price</p>
                      <p className="font-semibold text-accent text-lg">
                        ${formData.price?.toLocaleString()}
                      </p>
                    </div>
                    <div className="glass-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Type</p>
                      <p className="font-semibold text-foreground capitalize">
                        {formData.type}
                      </p>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-foreground">{formData.location}</p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <strong>✓ Ready to list!</strong> Click submit to publish your property
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((step - 1) as FormStep)}
                className="btn-secondary flex-1"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {step === 5 ? 'List Property' : 'Next'}
              {step < 5 && <ChevronRight size={18} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

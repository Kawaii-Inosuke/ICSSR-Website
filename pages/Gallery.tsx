import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { X, ZoomIn, Filter } from 'lucide-react';

type Category = 'All' | 'Events' | 'Workshops';

export const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const workshopTitle = "National Workshop On Ethics of AI in E-Governance: Trust, Fairness and Accountability Over Time";

    // Combined images from the single folder
    const workshopImages = [
        '/assets/gallery/Workshop/DSC00349.JPG',
        '/assets/gallery/Workshop/DSC00405.JPG',
        '/assets/gallery/Workshop/DSC00414.JPG',
        '/assets/gallery/Workshop/DSC00450.JPG',
        '/assets/gallery/Workshop/DSC00457.JPG',
        '/assets/gallery/Workshop/DSC00470.JPG',
        '/assets/gallery/Workshop/IMG_0107.JPG',
        '/assets/gallery/Workshop/IMG_0111.JPG',
        '/assets/gallery/Workshop/IMG_0119.JPG',
        '/assets/gallery/Workshop/IMG_0142.JPG',
        '/assets/gallery/Workshop/IMG_0161.JPG',
        '/assets/gallery/Workshop/IMG_0174.JPG',
        '/assets/gallery/Workshop/IMG_0197.JPG',
        '/assets/gallery/Workshop/IMG_0211.JPG',
        '/assets/gallery/Workshop/IMG_0276.JPG',
    ];

    const categories: Category[] = ['All', 'Events', 'Workshops'];

    // Filter logic: For now, we only have workshop images.
    // 'All' and 'Workshops' will show the workshop images.
    // 'Events' and 'Team' will be empty for this specific event.
    const shouldShowWorkshop = activeCategory === 'All' || activeCategory === 'Workshops';

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery Full View"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Page Header */}
            <SectionHeading
                title="Gallery"
                subtitle="Capturing moments from our workshops, conferences, and events."
            />

            {/* Filter Pills */}
            <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
                <Filter className="text-gray-400 w-5 h-5 flex-shrink-0" />
                <div className="flex gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category
                                ? 'bg-navy-900 text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-navy-900'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="min-h-[400px]">
                {shouldShowWorkshop ? (
                    <section className="mb-20 animate-fade-in">
                        <div className="border-b border-gray-200 pb-6 mb-10">
                            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-900 leading-tight">
                                {workshopTitle}
                            </h2>
                            <p className="text-bronze-500 font-medium mt-2">Workshop</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workshopImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md cursor-pointer"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Workshop Image ${index + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                        <div className="bg-gray-100 p-6 rounded-full mb-4">
                            <ZoomIn className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">No Images Found</h3>
                        <p className="text-gray-500">We couldn't find any images for the "{activeCategory}" category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

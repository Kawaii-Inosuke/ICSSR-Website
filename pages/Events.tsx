import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Calendar, MapPin, Users, Target, Mic, X } from 'lucide-react';

interface ResourcePerson {
    name: string;
    designation: string;
}

interface Event {
    id: string;
    title: string;
    sponsor: string;
    dateRange: string;
    location: string;
    description: string[];
    targetAudience: string;
    resourcePersons: ResourcePerson[];
    brochureUrls?: string[];
    status: 'upcoming' | 'ongoing' | 'past';
}

export const Events: React.FC = () => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    const upcomingEvents: Event[] = [
        {
            id: '1',
            title: 'National Workshop On Ethics of AI in E-Governance: Trust, Fairness and Accountability Over Time',
            sponsor: 'ICSSR',
            dateRange: '05 - 06 February 2026',
            location: 'SRM Institute of Science & Technology, Chennai',
            description: [
                'The workshop focuses on the growing use of Artificial Intelligence in e-governance and the ethical challenges it presents in digital governance systems. As AI increasingly influences public decision-making and service delivery, issues of trust, transparency, fairness, and data privacy become critical.',
                'The workshop highlights key concerns such as algorithmic bias, accountability in automated decisions, and long-term societal impact of AI-enabled governance. It aims to encourage critical discussions on ethical frameworks, regulatory mechanisms, and best practices that promote fairness and public trust.'
            ],
            targetAudience: 'Students, Research Scholars, Faculties & Industry Professionals',
            resourcePersons: [
                { name: 'Mr. Nagaraj Nagabushanam', designation: 'Vice President - Data and Analytics | Designated AI Officer, The Hindu Group of Publications' },
                { name: 'Dr. Papia Sen Gupta', designation: 'Assistant Professor, Centre for Political Studies, JNU, Delhi' },
                { name: 'Dr. Neela Ganguly', designation: 'Assistant Professor and Head, Political Science, School of Humanities, Guru Nanak College, Velachery' },
                { name: 'Prof. Geoffery Rockwell', designation: 'University of Alberta, Canada & Canada CIFAR AI Chair' },
                { name: 'Mr. Shivam', designation: 'AI Architect, ZS Associates' },
                { name: 'Dr. Venkat Raman', designation: 'UNESCO' }
            ],
            brochureUrls: [
                '/assets/events/brochure/brochure1.jpeg',
                '/assets/events/brochure/brochure2.jpeg'
            ],
            status: 'upcoming'
        }
    ];

    const pastEvents: Event[] = [];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Fullscreen Modal */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setFullscreenImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={fullscreenImage}
                        alt="Brochure Full View"
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}

            {/* Page Header */}
            <SectionHeading
                title="Events"
                subtitle="Workshops, seminars, and conferences advancing AI ethics research and discourse."
            />

            {/* Upcoming Events Section */}
            <section className="mb-20">
                <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
                    Upcoming Events
                </h3>

                {upcomingEvents.length > 0 ? (
                    <div className="space-y-12">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="bg-cream-50 rounded-lg overflow-hidden shadow-lg border border-cream-200">
                                {/* Header with Title and Status */}
                                <div className="bg-navy-900 p-6 lg:p-8">
                                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Upcoming
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                                        {event.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                    {/* Event Details - 3 columns */}
                                    <div className="lg:col-span-3 p-8 lg:p-10">
                                        {/* Quick Info */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-lg border border-cream-200">
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <Calendar size={20} className="text-bronze-500" />
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                                                    <p className="font-semibold">{event.dateRange}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <MapPin size={20} className="text-bronze-500" />
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Venue</p>
                                                    <p className="font-semibold text-sm">{event.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <Users size={20} className="text-bronze-500" />
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sponsor</p>
                                                    <p className="font-semibold">{event.sponsor}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mb-8">
                                            <h4 className="text-lg font-serif font-bold text-navy-900 mb-4">About the Workshop</h4>
                                            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                                                {event.description.map((para, index) => (
                                                    <p key={index}>{para}</p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Target Audience */}
                                        <div className="mb-8 p-4 bg-bronze-50 rounded-lg border-l-4 border-bronze-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Target size={18} className="text-bronze-600" />
                                                <h4 className="font-bold text-navy-900">Target Audience</h4>
                                            </div>
                                            <p className="text-gray-700">{event.targetAudience}</p>
                                        </div>

                                        {/* Resource Persons */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Mic size={18} className="text-bronze-500" />
                                                <h4 className="text-lg font-serif font-bold text-navy-900">Resource Persons</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {event.resourcePersons.map((person, index) => (
                                                    <div key={index} className="bg-white p-4 rounded-lg border border-cream-200 hover:shadow-md transition-shadow">
                                                        <p className="font-semibold text-navy-900">{person.name}</p>
                                                        <p className="text-sm text-gray-600 mt-1">{person.designation}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brochure - 2 columns */}
                                    {event.brochureUrls && event.brochureUrls.length > 0 && (
                                        <div className="lg:col-span-2 bg-gray-100 p-6 lg:p-8 flex flex-col items-center justify-start">
                                            <h4 className="text-lg font-serif font-bold text-navy-900 mb-4 self-start">Event Brochure</h4>
                                            <div className="flex flex-col gap-4">
                                                {event.brochureUrls.map((url, index) => (
                                                    <div key={index} className="relative group cursor-pointer" onClick={() => setFullscreenImage(url)}>
                                                        <img
                                                            src={url}
                                                            alt={`${event.title} Brochure - Page ${index + 1}`}
                                                            className="max-h-[500px] w-auto rounded-lg shadow-md object-contain transition-transform group-hover:scale-[1.02]"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-navy-900 shadow-lg">
                                                                Click to view full screen
                                                            </span>
                                                        </div>
                                                        <div className="absolute bottom-2 right-2 bg-navy-900/80 text-white text-xs px-2 py-1 rounded">
                                                            Page {index + 1}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-cream-50 rounded-lg p-12 text-center border border-cream-200">
                        <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
                        <p className="text-gray-400 mt-2">Check back soon for new announcements!</p>
                    </div>
                )}
            </section>

            {/* Past Events Section */}
            <section>
                <h3 className="text-xl font-serif font-bold text-gray-400 border-b border-gray-200 pb-4 mb-8">
                    Past Events
                </h3>

                {pastEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pastEvents.map((event) => (
                            <div key={event.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <span className="inline-block bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-medium mb-3">
                                    Completed
                                </span>
                                <h3 className="text-lg font-serif font-bold text-gray-700 mb-2">{event.title}</h3>
                                <p className="text-gray-500 text-sm">{event.dateRange}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                        <p className="text-gray-400">No past events yet. This is our first event!</p>
                    </div>
                )}
            </section>
        </div>
    );
};

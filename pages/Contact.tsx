import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-left mb-12">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg font-sans leading-relaxed text-gray-600 italic">
                        Get in Touch
                    </p>
                    <div className="h-1 w-20 bg-bronze-500 mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-7 bg-white p-8 border-l-4 border-bronze-500" style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-navy-900 font-serif font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-bronze-500"
                                />
                            </div>
                            <div>
                                <label className="block text-navy-900 font-serif font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-bronze-500"
                                />
                            </div>
                            <div>
                                <label className="block text-navy-900 font-serif font-bold mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-bronze-500"
                                />
                            </div>
                            <div>
                                <label className="block text-navy-900 font-serif font-bold mb-2">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-bronze-500 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-navy-900 text-white font-bold py-3 px-6 text-sm hover:bg-navy-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Institutional Addresses */}
                    <div className="lg:col-span-5 space-y-8 lg:pl-8">
                        {/* Address 1 - SRM */}
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Institutional Address</h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                SRM Institute of Science and Technology,<br />
                                Kattankulathur, Chennai - 603203<br />
                                Tamil Nadu, India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Email</h3>
                            <p className="text-gray-600 font-sans">icssr2025srmist@gmail.com</p>
                        </div>

                        {/* Address 2 - JNU */}
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Institutional Address</h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                G5Q8+WHC, New Mehrauli Road,<br />
                                JNU Ring Rd,<br />
                                New Delhi, India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Email</h3>
                            <p className="text-gray-600 font-sans">papiasg@jnu.ac.in</p>
                        </div>

                        {/* Address 3 - Velachery */}
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Institutional Address</h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                Guru Nanak Salai, Anna Garden,<br />
                                Velachery, Chennai,<br />
                                Tamil Nadu, India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Email</h3>
                            <p className="text-gray-600 font-sans">neelaganguly@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

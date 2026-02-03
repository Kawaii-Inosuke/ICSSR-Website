import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProfileCard } from '../components/ProfileCard';
import { TeamMember } from '../types';

export const People: React.FC = () => {
  const leadership: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Divya Mohan',
      role: 'PI',
      institution: 'SRM Institute of Science & Technology',
      bio: 'Professor of Computer Science specializing in Algorithmic Fairness and AI Ethics. Leading the technical audit component of the study.',
      imageUrl: '/assets/PI and CO Pi/dr divya mohan.jpg'
    },
  ];

  const researchers: TeamMember[] = [
    {
      id: '3',
      name: 'Vikram Singh',
      role: 'Researcher',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=3'
    },
    {
      id: '4',
      name: 'Priya Venkatesh',
      role: 'Researcher',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=4'
    },
    {
      id: '5',
      name: 'Rahul Mehta',
      role: 'Intern',
      institution: 'Panjab University',
      imageUrl: 'https://picsum.photos/300/400?random=5'
    },
    {
      id: '6',
      name: 'Sneha Gupta',
      role: 'Intern',
      institution: 'SRM Institute',
      imageUrl: 'https://picsum.photos/300/400?random=6'
    }
  ];

  const coLeadership: TeamMember[] = [
    {
      id: 'co-1',
      name: 'Dr. Neela Ganguly',
      role: 'Co-PI',
      institution: 'Guru Nanak College',
      imageUrl: '/assets/PI and CO Pi/dr neela ganguly.jpg'
    },
    {
      id: 'co-2',
      name: 'Dr. P.Selvaraj',
      role: 'Co-PI',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/PI and CO Pi/dr selvaraj p.jpg'
    },
    {
      id: 'co-3',
      name: 'Dr. Papia Sen Gupta',
      role: 'Co-PI',
      institution: 'JNU University',
      imageUrl: '/assets/PI and CO Pi/papia sen gupta.jpg'
    },
    {
      id: 'co-4',
      name: 'Dr. Mathew Arumai M',
      role: 'Co-PI',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/PI and CO Pi/mathew.jpg'
    },
    {
      id: 'co-5',
      name: 'Edward Prathap Singh. K',
      role: 'Co-PI',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/PI and CO Pi/edward.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title="The Team" subtitle="Meet the interdisciplinary team behind the project." />

      {/* Leadership Section */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Principal Investigators
        </h3>
        <div className="grid grid-cols-1 gap-10 max-w-3xl">
          {leadership.map(member => (
            <ProfileCard key={member.id} member={member} variant="compact-horizontal" />
          ))}
        </div>
      </div>

      {/* Co-Principal Investigators Section */}
      <div className="mb-20">
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Co-Principal Investigators
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coLeadership.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Researchers Grid */}
      <div>
        <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-gray-200 pb-4 mb-8">
          Research Associates & Interns
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {researchers.map(member => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
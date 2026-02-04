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
      bio: 'Assistant Professor of Computer Science and Principal Investigator leading research in AI Ethics and Algorithmic Fairness. Drives strategic project management to ensure technical innovation and excellence.',
      imageUrl: '/assets/PI and CO Pi/dr divya mohan.jpg'
    },
  ];

  const researchers: TeamMember[] = [
    {
      id: '3',
      name: 'Rishiraj Sen',
      role: 'Research Assistant',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/research ass and field/Rishiraj Sen.jpg'
    },
    {
      id: '4',
      name: 'Arkaprava Banerjee',
      role: 'Field Investigator',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/research ass and field/Arkaprava Banerjee.jpg'
    },
    {
      id: '5',
      name: 'Harish Karthi K',
      role: 'Field Investigator',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/research ass and field/HARISH KARTHI K.jpg'
    },
  ];

  const coLeadership: TeamMember[] = [
    {
      id: 'co-1',
      name: 'Dr. Papia Sen Gupta',
      role: 'Co-PI',
      institution: 'JNU University',
      imageUrl: '/assets/PI and CO Pi/papia sen gupta.jpg'
    },
    {
      id: 'co-2',
      name: 'Dr. Neela Ganguly',
      role: 'Co-PI',
      institution: 'Guru Nanak College',
      imageUrl: '/assets/PI and CO Pi/dr neela ganguly.jpg'
    },
    {
      id: 'co-3',
      name: 'Dr. Mathew Arumai M',
      role: 'Co-PI',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/PI and CO Pi/mathew.jpg'
    },
    {
      id: 'co-4',
      name: 'Dr. P.Selvaraj',
      role: 'Co-PI',
      institution: 'SRM Institute of Science & Technology',
      imageUrl: '/assets/PI and CO Pi/dr selvaraj p.jpg'
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
          Research Assistants and Field Investigators
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
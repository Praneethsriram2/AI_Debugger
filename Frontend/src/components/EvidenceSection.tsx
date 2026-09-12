import React from 'react';
import { Search } from 'lucide-react';

interface EvidenceSectionProps {
  evidence: string[];
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ evidence }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-indigo-600 font-semibold text-base">
        <Search className="w-5 h-5" />
        <span>Evidence from Input</span>
      </div>

      <ul className="space-y-2 pl-2">
        {evidence && evidence.length > 0 ? (
          evidence.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
              <span className="font-mono text-xs md:text-sm text-slate-800">{item}</span>
            </li>
          ))
        ) : (
          <li className="text-xs text-slate-400 italic">No explicit evidence found.</li>
        )}
      </ul>
    </div>
  );
};

export default EvidenceSection;


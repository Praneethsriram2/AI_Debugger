import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface PossibleCausesProps {
  causes: string[];
}

export const PossibleCauses: React.FC<PossibleCausesProps> = ({ causes }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-amber-500 font-semibold text-base">
        <AlertTriangle className="w-5 h-5" />
        <span>Possible Causes</span>
      </div>

      <ol className="space-y-2 text-sm text-slate-700">
        {causes && causes.length > 0 ? (
          causes.map((cause, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="font-semibold text-slate-600 shrink-0">{idx + 1}.</span>
              <span>{cause}</span>
            </li>
          ))
        ) : (
          <li className="text-xs text-slate-400 italic">No possible causes listed.</li>
        )}
      </ol>
    </div>
  );
};

export default PossibleCauses;


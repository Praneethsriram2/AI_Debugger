import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import type { AnalysisResponse } from '../types/debugging';
import ResultSummary from './ResultSummary';
import EvidenceSection from './EvidenceSection';
import PossibleCauses from './PossibleCauses';
import RecommendedFixes from './RecommendedFixes';

interface AnalysisResultProps {
  result: AnalysisResponse;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/70">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Analysis Complete</h3>
            <p className="text-xs text-slate-600">Here's what I found based on the provided logs.</p>
          </div>
        </div>

        {result.timestamp && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0">
            <Clock className="w-3.5 h-3.5" />
            <span>Analyzed on {result.timestamp}</span>
          </div>
        )}
      </div>

      {/* 4 Summary Cards */}
      <ResultSummary result={result} />

      {/* Details Grid: Left (Evidence + Causes), Right (Fixes + Note) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        <div className="p-5 rounded-xl bg-slate-50/60 border border-slate-200/60 space-y-6">
          <EvidenceSection evidence={result.evidence} />
          <hr className="border-slate-200/80" />
          <PossibleCauses causes={result.possibleCauses} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50/60 border border-slate-200/60">
          <RecommendedFixes fixes={result.possibleFixes} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;


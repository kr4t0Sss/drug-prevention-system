import React, { createContext, useContext, useState, useCallback } from 'react';

export interface AssessmentResult {
  id: string;
  type: 'ASSIST' | 'CRAFFT';
  date: string;
  score: number;
  riskLevel: string;
  recommendations: string[];
}

interface AssessmentContextType {
  results: AssessmentResult[];
  addResult: (result: Omit<AssessmentResult, 'id' | 'date'>) => void;
  deleteResult: (id: string) => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};

export const AssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [results, setResults] = useState<AssessmentResult[]>([]);

  const addResult = useCallback((result: Omit<AssessmentResult, 'id' | 'date'>) => {
    const newResult: AssessmentResult = {
      ...result,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
    };
    setResults(prev => [newResult, ...prev]);
  }, []);

  const deleteResult = useCallback((id: string) => {
    setResults(prev => prev.filter(result => result.id !== id));
  }, []);

  return (
    <AssessmentContext.Provider value={{ results, addResult, deleteResult }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext; 
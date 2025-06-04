import React, { createContext, useContext, useState, useCallback } from 'react';
import dayjs from 'dayjs';

export interface CounselingSession {
  id: string;
  counselorId: string;
  sessionType: 'video' | 'in-person';
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  concerns?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface CounselingContextType {
  sessions: CounselingSession[];
  addSession: (session: Omit<CounselingSession, 'id' | 'status'>) => void;
  updateSessionStatus: (id: string, status: CounselingSession['status']) => void;
  cancelSession: (id: string) => void;
  getUpcomingSessions: () => CounselingSession[];
}

const CounselingContext = createContext<CounselingContextType | undefined>(undefined);

export const useCounseling = () => {
  const context = useContext(CounselingContext);
  if (!context) {
    throw new Error('useCounseling must be used within a CounselingProvider');
  }
  return context;
};

export const CounselingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<CounselingSession[]>([]);

  const addSession = useCallback((sessionData: Omit<CounselingSession, 'id' | 'status'>) => {
    const newSession: CounselingSession = {
      ...sessionData,
      id: Date.now().toString(),
      status: 'scheduled',
    };
    setSessions(prev => [newSession, ...prev]);
  }, []);

  const updateSessionStatus = useCallback((id: string, status: CounselingSession['status']) => {
    setSessions(prev =>
      prev.map(session =>
        session.id === id ? { ...session, status } : session
      )
    );
  }, []);

  const cancelSession = useCallback((id: string) => {
    updateSessionStatus(id, 'cancelled');
  }, [updateSessionStatus]);

  const getUpcomingSessions = useCallback(() => {
    const now = dayjs();
    return sessions
      .filter(session => {
        const sessionDateTime = dayjs(`${session.date}T${session.time}`);
        return sessionDateTime.isAfter(now) && session.status === 'scheduled';
      })
      .sort((a, b) => {
        const dateA = dayjs(`${a.date}T${a.time}`);
        const dateB = dayjs(`${b.date}T${b.time}`);
        return dateA.unix() - dateB.unix();
      });
  }, [sessions]);

  return (
    <CounselingContext.Provider
      value={{
        sessions,
        addSession,
        updateSessionStatus,
        cancelSession,
        getUpcomingSessions,
      }}
    >
      {children}
    </CounselingContext.Provider>
  );
};

export default CounselingContext; 
import React, { createContext, useContext, useState, useCallback } from 'react';
import dayjs from 'dayjs';

export const CounselingContext = createContext();

export const useCounseling = () => {
  const context = useContext(CounselingContext);
  if (!context) {
    throw new Error('useCounseling must be used within a CounselingProvider');
  }
  return context;
};

export const CounselingProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const addSession = useCallback((session) => {
    setSessions((prev) => [...prev, { ...session, id: Date.now() }]);
  }, []);

  const updateSession = useCallback((id, updates) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id ? { ...session, ...updates } : session
      )
    );
  }, []);

  const deleteSession = useCallback((id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  }, []);

  const getUpcomingSessions = useCallback(() => {
    const now = dayjs();
    return sessions
      .filter((session) => dayjs(`${session.date} ${session.time}`).isAfter(now))
      .sort((a, b) => {
        const dateA = dayjs(`${a.date} ${a.time}`);
        const dateB = dayjs(`${b.date} ${b.time}`);
        return dateA.diff(dateB);
      });
  }, [sessions]);

  const getPastSessions = useCallback(() => {
    const now = dayjs();
    return sessions
      .filter((session) => dayjs(`${session.date} ${session.time}`).isBefore(now))
      .sort((a, b) => {
        const dateA = dayjs(`${a.date} ${a.time}`);
        const dateB = dayjs(`${b.date} ${b.time}`);
        return dateB.diff(dateA);
      });
  }, [sessions]);

  const value = {
    sessions,
    addSession,
    updateSession,
    deleteSession,
    getUpcomingSessions,
    getPastSessions,
  };

  return (
    <CounselingContext.Provider value={value}>
      {children}
    </CounselingContext.Provider>
  );
}; 
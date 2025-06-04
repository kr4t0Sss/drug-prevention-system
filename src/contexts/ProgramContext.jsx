import React, { createContext, useState, useContext } from 'react';

const ProgramContext = createContext();

export const useProgram = () => useContext(ProgramContext);

export const ProgramProvider = ({ children }) => {
  const [programs, setPrograms] = useState([]);

  const addProgram = (program) => {
    setPrograms([...programs, program]);
  };

  const removeProgram = (id) => {
    setPrograms(programs.filter(program => program.id !== id));
  };

  return (
    <ProgramContext.Provider value={{ programs, addProgram, removeProgram }}>
      {children}
    </ProgramContext.Provider>
  );
};

export default ProgramContext; 
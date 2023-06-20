import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { mockData } from './mock/index.js';
import { fetchMockData } from './utils/service.js';
import useFetch from './hooks/useFetch.js';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper  />
    </div>
  );
}

export default App;
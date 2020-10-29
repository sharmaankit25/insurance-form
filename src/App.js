import React from 'react'
import './App.css';
import InsuranceForm from './components/InsuranceForm'
import InsurancePeriodSelector from './components/InsurancePeriodSelector'

function App() {
  return (
    <div className="App">
      <InsuranceForm />
      <InsurancePeriodSelector />
    </div>
  );
}

export default App;

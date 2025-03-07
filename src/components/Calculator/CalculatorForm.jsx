import React, { useState } from "react";
import styled from "styled-components";
import useCarbonStore from "../../store/carbonStore";
import api from "../../services/api";

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #0f172a;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const CalculatorForm = () => {
  const { transportType, distance, frequency, updateFormField } =
    useCarbonStore();
  const setResults = useCarbonStore((state) => state.setResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!distance || distance <= 0) {
      setError("Please enter a valid distance");
      return;
    }

    const data = {
      transportType,
      distance: parseFloat(distance),
      frequency,
    };

    setLoading(true);

    try {
      const result = await api.calculateFootprint(data);
      setResults(result);
    } catch (err) {
      setError("Failed to calculate carbon footprint. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Carbon Footprint Calculator</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="transportType">Transport Type</Label>
          <Select
            id="transportType"
            value={transportType}
            onChange={(e) => updateFormField("transportType", e.target.value)}
          >
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="plane">Plane</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="distance">Distance (km)</Label>
          <Input
            id="distance"
            type="number"
            min="0"
            step="0.1"
            value={distance}
            onChange={(e) => updateFormField("distance", e.target.value)}
            placeholder="Enter distance in kilometers"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="frequency">Frequency</Label>
          <Select
            id="frequency"
            value={frequency}
            onChange={(e) => updateFormField("frequency", e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="once">Once</option>
          </Select>
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" disabled={loading}>
          {loading
            ? "Calculating... Processing your request."
            : "Calculate Carbon Footprint"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default CalculatorForm;

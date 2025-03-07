import React from "react";
import styled from "styled-components";
import useCarbonStore from "../../store/carbonStore";

const HistoryContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const HistoryTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #0f172a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = styled.button`
  padding: 6px 12px;
  font-size: 0.875rem;
  background-color: #ef4444;

  &:hover {
    background-color: #dc2626;
  }
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HistoryItem = styled.div`
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const HistoryDate = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`;

const HistoryValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
`;

const HistoryDetails = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const HistoryRecommendations = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  font-size: 0.875rem;
`;

const RecommendationItem = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  background-color: #f0fdf4;
  border-radius: 4px;
  border-left: 2px solid #10b981;
`;

const NoHistory = styled.div`
  text-align: center;
  padding: 2rem;
  color: #64748b;
  font-style: italic;
`;

const HistoryView = () => {
  const { calculationHistory, clearHistory } = useCarbonStore();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <HistoryContainer>
      <HistoryTitle>
        Calculation History
        {calculationHistory.length > 0 && (
          <ClearButton onClick={clearHistory}>Clear History</ClearButton>
        )}
      </HistoryTitle>

      {calculationHistory.length > 0 ? (
        <HistoryList>
          {calculationHistory.map((entry) => (
            <HistoryItem key={entry.id}>
              <HistoryHeader>
                <HistoryDate>{formatDate(entry.timestamp)}</HistoryDate>
                <HistoryValue>
                  {entry.footprint.totalEmissions.toLocaleString()} kg CO₂e
                </HistoryValue>
              </HistoryHeader>

              <HistoryDetails>
                {entry.footprint.transportType}, {entry.footprint.distance} km,{" "}
                {entry.footprint.frequency}
              </HistoryDetails>

              <HistoryRecommendations>
                {entry.recommendations.slice(0, 2).map((rec, index) => (
                  <RecommendationItem key={index}>{rec}</RecommendationItem>
                ))}
                {entry.recommendations.length > 2 && (
                  <RecommendationItem>
                    And {entry.recommendations.length - 2} more recommendations
                  </RecommendationItem>
                )}
              </HistoryRecommendations>
            </HistoryItem>
          ))}
        </HistoryList>
      ) : (
        <NoHistory>No calculation history available</NoHistory>
      )}
    </HistoryContainer>
  );
};

export default HistoryView;

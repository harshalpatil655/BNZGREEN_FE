import React from "react";
import styled from "styled-components";
import useCarbonStore from "../../store/carbonStore";

const ResultsContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ResultsTitle = styled.h2`
  margin-bottom: 1rem;
  color: #0f172a;
`;

const FootprintCard = styled.div`
  background-color: #f8fafc;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #2563eb;
`;

const FootprintValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const FootprintUnit = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #64748b;
`;

const FootprintDetails = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const DetailItem = styled.div`
  margin-bottom: 0.5rem;
`;

const DetailLabel = styled.span`
  font-weight: 500;
  color: #64748b;
`;

const DetailValue = styled.span`
  font-weight: 500;
  color: #0f172a;
  margin-left: 0.5rem;
`;

const RecommendationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const RecommendationItem = styled.li`
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: #f0fdf4;
  border-radius: 6px;
  border-left: 3px solid #10b981;
  display: flex;
  align-items: flex-start;

  &:before {
    content: "💡";
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: #64748b;
  font-style: italic;
`;

const FootprintResults = () => {
  const { footprintData, recommendations } = useCarbonStore();

  if (!footprintData) {
    return null;
  }

  return (
    <ResultsContainer>
      <ResultsTitle>Your Carbon Footprint Results</ResultsTitle>

      <FootprintCard>
        <FootprintValue>
          {footprintData.totalEmissions.toLocaleString()}
          <FootprintUnit> kg CO₂e {footprintData.timeframe}</FootprintUnit>
        </FootprintValue>

        <FootprintDetails>
          <DetailItem>
            <DetailLabel>Transport Type:</DetailLabel>
            <DetailValue>{footprintData.transportType}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Distance:</DetailLabel>
            <DetailValue>{footprintData.distance} km</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Frequency:</DetailLabel>
            <DetailValue>{footprintData.frequency}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Emission Factor:</DetailLabel>
            <DetailValue>{footprintData.emissionFactor} kg CO₂e/km</DetailValue>
          </DetailItem>
        </FootprintDetails>
      </FootprintCard>

      <ResultsTitle>AI Recommendations</ResultsTitle>
      {recommendations && recommendations.length > 0 ? (
        <RecommendationsList>
          {recommendations.map((recommendation, index) => (
            <RecommendationItem key={index}>
              {recommendation}
            </RecommendationItem>
          ))}
        </RecommendationsList>
      ) : (
        <NoResults>No recommendations available</NoResults>
      )}
    </ResultsContainer>
  );
};

export default FootprintResults;

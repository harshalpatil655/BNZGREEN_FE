import React from "react";
import Layout from "./components/Layout/Layout";
import CalculatorForm from "./components/Calculator/CalculatorForm";
import FootprintResults from "./components/Results/FootprintResults";
import HistoryView from "./components/Results/HistoryView";
import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";

const AppTitle = styled.h1`
  text-align: center;
  margin: 2rem 0;
  color: #0f172a;
`;

const AppDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: #64748b;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AppTitle>CarbonTrackr</AppTitle>
        <AppDescription>
          Calculate your carbon footprint and get AI-powered recommendations to
          reduce your environmental impact.
        </AppDescription>

        <TwoColumnLayout>
          <div>
            <CalculatorForm />
            <FootprintResults />
          </div>
          <div>
            <HistoryView />
          </div>
        </TwoColumnLayout>
      </Layout>
    </>
  );
}

export default App;

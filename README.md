# CarbonTrackr - Carbon Offset AI Platform

A minimal proof-of-concept web application that helps users track and offset their carbon footprint using AI recommendations.

## Features

- Carbon footprint calculator for travel emissions
- AI-powered recommendations for reducing carbon footprint
- Local storage persistence of calculations and recommendations
- History tracking of previous calculations

## Live Demo

https://carbontrackr.netlify.app/

## Technologies Used

- **Frontend**: React with styled-components for styling
- **State Management**: Zustand for persistent state
- **Backend**: Integration with RESTful API at https://bnzgreentech-be.onrender.com/api/calculate
- **Deployment**: Render

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/harshalpatil655/BNZGreenTech_FE.git
   cd carbon-trackr
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

git clone https://github.com/harshalpatil655/BNZGreenTech_BE.git

```bash
npm start
```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: UI components organized by feature
- `src/store`: Zustand store for state management
- `src/services`: API service for backend integration
- `src/styles`: Global styling with styled-components

## API Integration

The application integrates with an existing backend API at:
`https://bnzgreen-be.onrender.com/api/calculate`

The API expects a POST request with the following data structure:

```json
{
  "transportType": "car",
  "distance": 50,
  "frequency": "daily"
}
```

And returns a response with:

```json
{
  "footprint": {
    "transportType": "car",
    "distance": 50,
    "frequency": "daily",
    "emissionFactor": 0.12,
    "totalEmissions": 2190,
    "timeframe": "per year"
  },
  "recommendations": [
    "Consider carpooling or public transport to reduce emissions.",
    "Try combining trips to minimize total distance traveled.",
    "Look into electric or hybrid vehicle options for lower emissions.",
    "Consider remote work options when possible to reduce commuting."
  ]
}
```

## Deployment

Instructions for deploying to [your chosen platform]:

1. Create an account on Render
2. Connect your GitHub repository
3. Configure build settings
4. Deploy!

## Future Improvements

- Add more carbon calculation factors (home energy, food, etc.)
- Implement user accounts for long-term tracking
- Enhance the UI with data visualizations

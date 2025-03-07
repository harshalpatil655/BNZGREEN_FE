import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  button {
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #2563eb;
    color: white;
    font-weight: 500;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #1d4ed8;
    }
    
    &:disabled {
      background-color: #9ca3af;
      cursor: not-allowed;
    }
  }

  input, select {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    margin-bottom: 1rem;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
    }
  }

  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .error {
    color: #ef4444;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }

  .success {
    color: #10b981;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`;

export default GlobalStyle;

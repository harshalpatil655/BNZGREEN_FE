import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCarbonStore = create(
  persist(
    (set, get) => ({
      // these are the form state
      transportType: "car",
      distance: 0,
      frequency: "daily",

      // Results will be saved under this
      footprintData: null,
      recommendations: [],
      calculationHistory: [],

      // Methods to set value based on key
      updateFormField: (field, value) => {
        set({ [field]: value });
      },

      setResults: (data) => {
        set({
          footprintData: data.footprint,
          recommendations: data.recommendations,
        });

        // this will add to history
        const history = get().calculationHistory;
        set({
          calculationHistory: [
            {
              id: Date.now(),
              timestamp: new Date().toISOString(),
              footprint: data.footprint,
              recommendations: data.recommendations,
            },
            ...history,
          ].slice(0, 10), // Keep only the latest 10 entries
        });
      },

      resetForm: () => {
        set({
          transportType: "car",
          distance: 0,
          frequency: "daily",
        });
      },

      clearHistory: () => {
        set({ calculationHistory: [] });
      },
    }),
    {
      name: "carbon-trackr-storage",
    }
  )
);

export default useCarbonStore;

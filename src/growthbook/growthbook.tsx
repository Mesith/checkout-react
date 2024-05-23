import { GrowthBook } from "@growthbook/growthbook-react"

export const growthbook = new GrowthBook({
  apiHost: import.meta.env.VITE_GB_HOST,
  clientKey: import.meta.env.VITE_GB_CLIENT_KEY,
  enableDevMode: true,
  attributes: {
    id: Math.random(), // simulate all veriants for same use when browser refresh by generating random id
  },
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    })
  },
})

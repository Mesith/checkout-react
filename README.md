
# Checkout App

The Checkout app streamlines the e-commerce checkout process for your customers, offering a user-friendly, three-step experience:

 #### 1. Seamless Navigation:

Deep linking ensures a smooth checkout journey. Users can conveniently leave the process at any point and resume later on the same device, picking up right where they left off. This eliminates frustration and abandonment, leading to higher conversion rates.
#### 2. Flexible Customization:
 
Empower your marketing team to tailor each checkout step according to your brand and promotional goals. This level of control allows you to create a personalized experience that resonates with your customers and optimizes conversion.
### Key Features:

- Dynamic Form Generator: Effortlessly create and modify checkout forms to fit your changing needs, ensuring you capture the essential information at every step.

- Deep Link Navigator: Deep linking technology provides users with a seamless checkout journey, allowing them to resume later on the same device.

- User Data Persistence: User data is securely stored and automatically retrieved when they return to the checkout process, eliminating the need for repetitive input.




https://github.com/Mesith/checkout-react/assets/5463037/52299a87-bf58-416c-af44-f8c30891af3e






## Installation Guide:

#### 2. Installation:

Clone the repository from GitHub.
Navigate to the project directory.
Run `npm install` or `yarn install` to install the project dependencies.

#### 3. Usage:

Start the development server by running `npm run dev` or `yarn dev`.
Launch the app on an `http://localhost:5173`

## Project Structure
`src/app`-  directory Contains redux store implementations and hooks implementation for redux.

`src/components/` -  directory Contains reusable components used throughout the app.

`src/features/` - directory Contains the main screens of the app,

`src/router` defined all the route related components
## Technology Used

- Build Tool: **Vite** (https://vitejs.dev/) - for fast development and build performance.
- State Management: **Redux** (https://redux.js.org/) - for predictable and maintainable state management.
- Data Persistence: **Redux-Persist** (https://github.com/topics/redux-persist) - to save and restore user data across sessions.
- UI Framework: **React 18.2** (https://react.dev/) - for building dynamic and interactive user interfaces.
- Responsive Design: **Tailwind CSS** (https://tailwindcss.com/) - for rapid and utility-first CSS development.
- Unit Testing: **Vitest** (https://vitest.dev/) with React Testing Library (https://testing-library.com/docs/react-testing-library/intro/) - for ensuring code quality and maintainability.
- Routing: **React Router DOM** (https://reacttraining.com/react-router) - for smooth navigation between different parts of your application.
- Dynamic Forms: **React-Hook-Forms**
- Storage engine : localForge (IndexDB)
- test Report : VI Test UI
## Unit Tests
The project includes a comprehensive set of unit tests, covering various aspects of the codebase. These tests can be found in the `__test__` folder under some packages, which includes unit tests.

**Running Unit Tests:**

To run the unit tests, execute the following command:

```
npm run test
```

This command will trigger the test runner, which will run all the unit tests in the "test" folder. The test runner will provide feedback on the test results, including the number of tests passed and any failures or errors encountered during testing.


## A/B Testing
    * Integrated Growthbook, an open-source A/B testing tool, allowing us to conduct marketing experiments by altering feature variants.
    * Form metadata is now acquired as JSON from the Growthbook API, enabling dynamic form structure and A/B testing on each onboarding step. (Credentials removed for security)
    * By modifying the form-feature content JSON, we can introduce new form fields and conduct A/B tests on each onboarding segment, offering greater product flexibility and marketing testing power.
Below is Growth book credentials to Test the functionality

	URL : https://app.growthbook.io/  
	Username: Mesith.wettasinghe@gmail.com
	Password: Abc123$$

For the demo purpose, I have added the id attribute as a random number. This is to help change different user attributes with browser refresh. So same user can experiment with all variants by reloading the page.

# Merchant Management Dashboard (Frontend Assessment)

A mid-level Merchant Management Dashboard built for a fintech-style application. This portal allows administrators to select merchants, view their physical POS locations, and manage digital QR code distribution.

## 🛠 Core Requirements Implemented
- **Next.js 14+ (App Router)**: Utilizing functional components, hooks, and localized state.
- **TypeScript**: Full type safety for Merchant and Branch entities.
- **Merchant Selection (Screen 1)**:
  - Select input labeled **"Select Merchant"**.
  - **"Fetch POS Branch"** button (disabled until selection).
  - Simulated API fetching with loading states.
- **POS Branch List (Screen 2)**:
  - Dynamic Routing (`/merchants/[id]`).
  - Responsive Table with required columns: **Location**, **Address**, **Account Name**, **Account Number**, and **QR Code**.
  - QR Code image rendering per row.
  - Functional **Download** button for each QR code.
- **Data Handling**:
  - Simulated async API calls with `useEffect`.
  - Comprehensive Loading and Error states.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Production Build
To create an optimized production build:
```bash
npm run build
```

## 🧠 Assumptions & Technical Implementation

### Data & State Management
- **State**: Managed locally within components using `useState` and `useEffect`. This approach was chosen for its simplicity and efficiency in a focused two-screen application.
- **Data Handling**: API interactions are simulated in `lib/data.ts`. I implemented artificial delays using Promises to demonstrate robust handling of asynchronous loading states and error boundaries.

### Key Assumptions
- **Mock Persistence**: Since no real API was provided, data is managed in-memory.
- **Download Logic**: QR downloads are handled via a Blob-based system to ensure cross-origin compatibility and clean file naming for the user.
- **Responsive Layout**: The dashboard assumes an administrative user, so the table utilizes a horizontal scroll on mobile to maintain data integrity and readability.

## 📄 License
Assessment Exercise - Merchant Management Dashboard.

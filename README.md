# Merchant Management Dashboard

A mid-level frontend assessment project built with Next.js, TypeScript, and Tailwind CSS.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Material Symbols Outlined
- **Fonts**: Inter (Headers) & Open Sans (Body)

## 🚀 Features
- **Merchant Selection**: Choose from a list of verified merchants.
- **POS Branch Management**: View a detailed, responsive table of branches for the selected merchant.
- **QR Code Distribution**: View and download assigned QR codes for each branch.
- **Loading & Error States**: Shimmer effects and robust error handling for a smooth UX.

## 🏃 Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📝 Assumptions & Notes
- **Mock Data**: API calls are simulated using local mock data with artificial delays to demonstrate loading state handling.
- **QR Downloads**: The download functionality uses a blob-based approach to ensure the file is saved with a meaningful name.
- **Design**: Focused on a "Human-Centric" fintech aesthetic, prioritizing clarity, premium typography, and mobile-friendly layouts.

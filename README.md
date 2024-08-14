
# Budget Tracker

A full-stack budget tracking application designed to help users manage their finances efficiently. This application offers robust features such as transaction management, category statistics, historical data aggregates, and stunning data visualizations.

## Table of Contents
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Features

- **Transaction Management**: 
  - Add, edit, and delete transactions to keep track of income and expenses.
  - View and manage transactions through an intuitive interface.

- **Category Statistics**:
  - Analyze spending habits with detailed breakdowns by category.
  - Visualize spending patterns with pie charts and bar graphs.

- **Historical Data Aggregates**:
  - Track financial trends over time.
  - View aggregated data by month, quarter, or year to identify spending and saving patterns.

- **Stunning Charts**:
  - Leverage interactive charts powered by Recharts to visualize financial data.
  - Includes trend lines, category breakdowns, and more for comprehensive insights.

- **Icon Selector for Categories**:
  - Customize categories with an icon selector to easily identify different types of expenses and income.
  - Personalize the user experience with a wide selection of icons.

- **Authentication**:
  - Secure login and user management powered by Clerk.
  - Ensure user data privacy and security with robust authentication mechanisms.

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or Yarn
- PostgreSQL or SQLite

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/budget-tracker.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd budget-tracker
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Set up the environment variables**:
   - Create a `.env` file in the root directory and add the necessary environment variables.
   - Example `.env` file:
     ```env
     DATABASE_URL=your_database_url
     CLERK_SECRET_KEY=your_clerk_secret_key
     ```

5. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be running on `http://localhost:3000`.

## Usage

- **Demo**: [Live Demo]([https://your-app-url.com](https://budget-tracker-bice-two.vercel.app/))

## Technologies Used

- **Frontend**:
  - **Next.js**: Server-side rendering and API routes.
  - **React**: Component-based UI development.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Shadcn UI**: Custom UI components built on top of Tailwind CSS.
  - **Recharts**: Library for creating charts and visualizations.

- **Backend**:
  - **Next.js API Routes**: Serverless functions for handling backend logic.
  - **Prisma**: ORM for database interaction with SQLite and PostgreSQL.

- **Authentication**:
  - **Clerk**: Authentication service for user management and secure login.

- **Database**:
  - **SQLite**: Lightweight relational database for development.
  - **Vercel PostgreSQL**: Scalable database for production deployment.

- **State Management**:
  - **React-query**: Data fetching and state management for server-side data.

- **Deployment**:
  - **Vercel**: Hosting platform for seamless deployment and scalability.

## Project Structure

- `/components`: Reusable UI components.
- `/pages`: Next.js pages, including API routes.
- `/public`: Static assets like images and icons.
- `/styles`: Global styles and Tailwind configuration.
- `/utils`: Utility functions and helpers.
- `/prisma`: Database schema and migration files.

## License

This project is licensed under the MIT License.

## Contact

Created by Randall Bonilla - [LinkedIn]([https://www.linkedin.com/in/randall-bonilla/](https://www.linkedin.com/in/randall-bonilla-cordero-8653a6220/) - [Email](mailto:greetysoftwarejs@gmail.com)

<div align="center">

# 💙 WiseWallet

### Your money, made simple.

**A personal finance mobile application designed to make tracking income, expenses, and financial habits easier.**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Status:** 🚧 In development · **Started:** October 2026

</div>

---

## 📖 About

**WiseWallet** is a personal finance mobile application created to help people understand where their money goes, keep track of their transactions, and develop better financial habits through a clean and intuitive experience.

The project is being developed as part of two university mobile development courses. Rather than building two unrelated applications, the goal is to evolve WiseWallet in two stages: first, a functional offline-first expense tracker; later, a more advanced platform with cloud synchronization and AI-powered financial insights.

The interface uses a distinctive blue-and-white visual identity, with gradients, reusable UI components, and a modern mobile-first design.

---

## 🎯 Project Goals

- Make income and expense tracking straightforward.
- Give users a clear overview of their financial balance.
- Organize transactions by category and date.
- Visualize spending patterns through summaries and charts.
- Keep essential features available locally, without requiring an internet connection.
- Eventually provide useful, data-driven insights through an AI assistant.

---

## ✨ Features & Roadmap

### 📱 Phase 1 — WiseWallet 1.0 (Target: early December 2026)

Core personal finance functionality:

- [ ] Dashboard with balance, income, and expense summaries
- [ ] Create, view, edit, and delete transactions
- [ ] Income and expense categories
- [ ] Transaction history and filters
- [ ] Local persistence with SQLite
- [ ] Spending charts and statistics
- [ ] UI polish and responsive layouts

**Already underway:** project setup, React Navigation, welcome/authentication screen designs, branding, and reusable UI components.

> The initial login and registration interfaces are prototypes. Real account authentication is planned for Phase 2.

### ☁️ Phase 2 — WiseWallet 2.0 (Date to be confirmed)

Planned enhancements, subject to course requirements and available development time:

- [ ] User authentication with Supabase Auth
- [ ] Cloud storage and synchronization using Supabase/PostgreSQL
- [ ] **WiseAI**, an AI-powered personal finance assistant
- [ ] Automated spending summaries and financial insights
- [ ] Natural-language transaction entry
- [ ] Savings goals and budgets
- [ ] Recurring transactions and notifications
- [ ] Shared wallets (stretch goal)

### 🤖 WiseAI — Planned AI Assistant

WiseAI aims to help users understand their own financial data through natural-language questions such as:

- *“How much did I spend on food this month?”*
- *“Which category increased the most compared with last month?”*
- *“Can you summarize my spending habits?”*

Financial totals will be calculated by the application or backend, while the AI will focus on interpreting and explaining those results. API credentials will remain on the server, not inside the mobile application.

---

## 🛠️ Tech Stack

| Layer | Technology | Status |
|---|---|---|
| Mobile application | React Native | In use |
| Development platform | Expo | In use |
| Programming language | TypeScript | In use |
| Navigation | React Navigation (native stack) | In use |
| UI styling | React Native StyleSheet | In use |
| Gradients | expo-linear-gradient | In use |
| Local database | expo-sqlite / SQLite | Planned for Phase 1 |
| Cloud backend | Supabase | Planned for Phase 2 |
| Cloud database | PostgreSQL (Supabase) | Planned for Phase 2 |
| Authentication | Supabase Auth | Planned for Phase 2 |
| Server-side functions | Supabase Edge Functions | Planned for Phase 2 |
| Artificial intelligence | OpenAI API | Planned for Phase 2 |

**Architecture:** The first version is designed to work locally on the device. The second version will introduce a remote backend for authentication, synchronization, and secure AI requests.

---

## 📁 Project Structure

Current key files and directories:

```text
WiseWallet/
├── assets/                     # Expo app assets
├── src/
│   ├── assets/                 # Application images and branding
│   ├── components/
│   │   └── IconAppButton.tsx   # Reusable button component
│   ├── navigation/
│   │   ├── screens/
│   │   │   ├── Home.tsx
│   │   │   └── InitialScreen.tsx
│   │   └── index.tsx           # React Navigation configuration
│   └── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

The structure will evolve as new screens, database modules, and services are added.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- An Android or iOS development environment compatible with the project's Expo configuration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GuilhermeDuarteB/WiseWallet.git
   cd WiseWallet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development environment:

   ```bash
   npm start
   ```

4. Follow the terminal instructions to launch the app on a compatible emulator or device.

> This project originated from the Expo React Navigation template. Depending on the current development-client configuration, a development build may be required instead of Expo Go. Check `package.json` for the available scripts.

---

## 🔐 Security & Privacy

WiseWallet deals with sensitive financial information. As development progresses, the project will follow these principles:

- Keep secret API keys outside the distributed mobile application.
- Use a server-side function for requests to the OpenAI API.
- Restrict access to each user's cloud data through authentication and database policies.
- Request only the financial information needed to answer a question.
- Require user confirmation before AI-assisted actions modify stored transactions.

---

## 🗓️ Development Timeline

| Period | Milestone |
|---|---|
| October 2026 | Project setup, branding, navigation, and initial UI |
| October–November 2026 | Transactions, dashboard, local storage, and statistics |
| Early December 2026 | Target delivery of WiseWallet 1.0 |
| Second university course — date TBD | Cloud backend, authentication, and AI-powered features |

---

## 👨‍💻 Author

**Guilherme Duarte**  
GitHub: [@GuilhermeDuarteB](https://github.com/GuilhermeDuarteB)

---

<div align="center">
  <strong>WiseWallet</strong> — Take control of your money, one transaction at a time. 💙
</div>

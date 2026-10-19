
<div align="center">

<img src="src/assets/WiseWallet_logo.png" alt="WiseWallet Logo" width="120" />

<img src="src/assets/WiseWallet_texto.png" alt="WiseWallet" width="320" />

### 💙 Cada despesa conta.

**Your expenses, made simple.**

A modern mobile application designed to help you track expenses, understand spending habits and make more informed financial decisions.

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

![Development Status](https://img.shields.io/badge/Status-In_Development-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Platforms](https://img.shields.io/badge/Platform-Android_%7C_iOS-lightgrey?style=flat-square)

**An evolving university project with a vision for smarter personal expense management.**

[About](#-about-wiseWallet) •
[Features](#-features) •
[Roadmap](#-development-roadmap) •
[Technologies](#-technology-stack) •
[Installation](#-getting-started)

</div>

---

## 💡 About WiseWallet

**WiseWallet** is a personal expense tracking application focused on making everyday financial organization simple, accessible and intuitive.

The project started with a straightforward idea:

> Understanding where your money goes should not be complicated.

Rather than becoming another complex financial platform, WiseWallet aims to offer a clean and practical experience where users can record expenses, organize transactions and understand their spending habits.

WiseWallet is **not a bank or a payment application**. It is a personal financial organization tool focused on expense management.

The application is being developed as part of a university project, with the goal of progressively expanding its functionality while applying modern mobile development practices.

### 🎯 Our mission

Help users build better financial habits through three essential actions:

- **Track** — Easily record everyday expenses.
- **Understand** — Visualize spending patterns and categories.
- **Improve** — Make more informed decisions based on personal spending data.

---

## ✨ Features

WiseWallet is currently under active development. The following sections distinguish implemented functionality from features still being developed.

### ✅ Currently implemented

**Authentication & user accounts**

- User registration with email and password.
- Email and password sign-in.
- Google OAuth integration.
- Facebook OAuth integration.
- Authentication session management with Supabase.
- Session persistence between application launches.
- Sign-out functionality.
- Conditional navigation based on authentication status.

**Application interface**

- Welcome and onboarding screen.
- WiseWallet branding and visual identity.
- Blue gradient backgrounds and decorative elements.
- Personalized greeting using the authenticated user's name.
- Profile image support when available from the authentication provider.
- Current date displayed on the home screen.
- Reusable interface components.
- Loading screen during authentication initialization.

**Navigation**

- React Navigation native stack.
- Bottom tab navigation.
- Animated transitions between tabs.
- Dedicated routes for authenticated and unauthenticated users.

### 🚧 Currently in development

- Expense dashboard.
- Transaction history.
- Add expense screen.
- Spending statistics.
- Profile and settings.
- Category-based expense organization.

### 🧭 Main navigation

The authenticated area is organized into five main sections:

| Section | Purpose | Status |
|---------|---------|--------|
| 🏠 Início | Personal dashboard and monthly spending overview | In progress |
| 📋 Transações | View and manage recorded expenses | In progress |
| ➕ Adicionar | Quickly register a new expense | Planned |
| 📊 Estatísticas | Analyze expenses through charts and summaries | Planned |
| ⚙️ Mais | Profile, preferences and additional features | Planned |

Some sections currently contain placeholder screens while their functionality is being developed.

---

## 🗺️ Development Roadmap

WiseWallet is planned as a progressively evolving application, with each development phase introducing new capabilities.

The roadmap reflects current goals and may change as the project develops.

### 📱 Phase 1 — Expense Tracking Foundation

**Goal:** Deliver a functional and intuitive expense management experience.

- [x] Project initialization and configuration.
- [x] Application branding and visual identity.
- [x] Authentication screens.
- [x] Supabase authentication integration.
- [x] Google and Facebook OAuth integration.
- [x] User session persistence.
- [x] Bottom tab navigation.
- [x] Personalized home screen header.
- [ ] Add new expenses.
- [ ] Edit and delete existing expenses.
- [ ] Organize expenses into categories.
- [ ] Display transaction history.
- [ ] Filter expenses by category and date.
- [ ] Store expense data locally using SQLite.
- [ ] Build the monthly expense dashboard.
- [ ] Display recent transactions.
- [ ] Create spending charts and statistics.
- [ ] Improve responsiveness and accessibility.

**Expected outcome:** A practical mobile expense tracker capable of helping users manage their daily spending.

### ☁️ Phase 2 — Cloud Synchronization

**Goal:** Expand WiseWallet into a connected and more flexible application.

Planned improvements:

- [ ] Design a PostgreSQL database with Supabase.
- [ ] Store expense records in the cloud.
- [ ] Associate expenses with authenticated user accounts.
- [ ] Implement secure data access policies.
- [ ] Synchronize local and remote expense data.
- [ ] Support offline usage with later synchronization.
- [ ] Add user preferences and profile management.
- [ ] Explore data export and backup options.
- [ ] Improve application reliability, testing and performance.

**Important:** Supabase is already used for authentication. Expense storage and synchronization through Supabase PostgreSQL are future features.

### 🤖 Phase 3 — WiseAI & Intelligent Insights

**Goal:** Help users understand their spending through intelligent analysis.

The long-term vision includes **WiseAI**, a personal expense analysis assistant integrated into WiseWallet.

Potential capabilities:

- [ ] Monthly spending summaries.
- [ ] Automatic identification of spending trends.
- [ ] Comparisons between months and categories.
- [ ] Personalized observations about expenses.
- [ ] Natural-language questions about recorded spending.
- [ ] Budget monitoring and expense reminders.
- [ ] Intelligent categorization suggestions.

#### Example WiseAI interactions

> **"How much did I spend on food this month?"**

> **"Which category represents my highest spending?"**

> **"How did my expenses change compared to last month?"**

> **"Can you summarize my spending habits?"**

The objective is not to replace financial professionals, but to help users better understand their own expense data.

Any future AI integration will prioritize privacy, secure server-side credentials and transparent data handling.

---

## 🛠️ Technology Stack

WiseWallet is built using modern technologies for cross-platform mobile development.

| Technology | Purpose | Status |
|------------|---------|--------|
| React Native | Mobile application framework | In use |
| Expo | Development environment and native tooling | In use |
| TypeScript | Type-safe application development | In use |
| React Navigation 7 | Stack and bottom tab navigation | In use |
| Supabase Auth | Authentication and user sessions | In use |
| AsyncStorage | Persistent authentication sessions | In use |
| Expo LinearGradient | Gradient interface elements | In use |
| Expo Vector Icons | Icons and navigation elements | In use |
| React Native StyleSheet | Application styling | In use |
| SQLite | Local expense storage | Planned |
| Supabase PostgreSQL | Cloud expense database | Planned |
| Supabase Edge Functions | Secure server-side operations | Planned |
| WiseAI | Intelligent expense analysis | Future concept |

### 📐 Architecture

The application follows a modular structure with separate responsibilities for:

- **Screens:** User-facing application pages.
- **Navigation:** Screen transitions and access control.
- **Components:** Reusable interface elements.
- **Contexts:** Shared application state.
- **Services:** Authentication and external integrations.
- **Styles:** Shared visual properties.

This structure is intended to make the project easier to maintain and expand.

---

## 📁 Project Structure

```text
WiseWallet/
│
├── assets/
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── splash-icon.png
│
├── src/
│   │
│   ├── App.tsx
│   │
│   ├── assets/
│   │   ├── WiseWallet_logo.png
│   │   ├── WiseWallet_texto.png
│   │   └── ...
│   │
│   ├── components/
│   │   └── IconAppButton.tsx
│   │
│   ├── contexts/
│   │   └── AuthContext.tsx
│   │
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── googleAuth.ts
│   │   └── facebookAuth.ts
│   │
│   ├── navigation/
│   │   ├── index.tsx
│   │   ├── appTabs.tsx
│   │   │
│   │   └── screens/
│   │       ├── (auth)/
│   │       │   ├── InitialScreen.tsx
│   │       │   ├── Login.tsx
│   │       │   ├── LoginEmail.tsx
│   │       │   └── Register.tsx
│   │       │
│   │       ├── (panel)/
│   │       │   ├── InitialScreen.tsx
│   │       │   └── TransactionsScreen.tsx
│   │       │
│   │       └── loading.tsx
│   │
│   └── styles/
│       └── globalStyles.tsx
│
├── .env.example
├── app.json
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

The project structure will continue evolving as expense management, persistence and analytics are implemented.

---

## 🚀 Getting Started

### Prerequisites

Before running WiseWallet, make sure you have:

- Node.js installed.
- npm or Yarn.
- Git.
- Android Studio or an Android device for Android development.
- Xcode and macOS for iOS development.
- A Supabase project for authentication.
- An Expo development build for testing native authentication flows.

### 1. Clone the repository

```bash
git clone https://github.com/GuilhermeDuarteB/WiseWallet.git
cd WiseWallet
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

Add the required public Supabase configuration:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

These values can be obtained from the Supabase project settings.

For Google and Facebook authentication, configure the OAuth providers through the Supabase Dashboard and their respective developer platforms.

The application uses the following deep-link callback:

```text
wisewallet://auth/callback
```

**Security notice:** Never commit private API keys, OAuth client secrets, service-role keys or real `.env` files. OAuth provider secrets must remain in their respective secure dashboard configurations, not in the mobile application.

### 4. Run the application

Start the Expo development server:

```bash
npm start
```

Build and run on Android:

```bash
npm run android
```

Build and run on iOS (macOS required):

```bash
npm run ios
```

WiseWallet uses Expo Dev Client. A compatible development build is recommended for testing the native authentication and deep-link flows.

---

## 🔐 Security & Privacy

WiseWallet is intended to handle personal spending information responsibly.

The project follows these principles:

- Use trusted authentication providers.
- Avoid storing private credentials in the application source code.
- Maintain separate access to each user's information.
- Protect future cloud data using appropriate authorization policies.
- Minimize the data shared with external services.
- Keep future AI integrations behind secure server-side operations.
- Clearly communicate the purpose of any data processing.

As the application evolves, privacy and security will remain important development priorities.

The implementation of planned protections will be reviewed as storage and synchronization features are introduced.

---

## 🎨 Design & User Experience

WiseWallet aims to combine functionality with a clean and welcoming visual identity.

### Brand colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#0521C2` | Buttons, navigation and highlights |
| Secondary Blue | `#1B88DF` | Gradients and accent elements |
| Soft Blue | `#E2EFFF` | Decorative backgrounds |
| White | `#FFFFFF` | Main surfaces and content |

### Design principles

- Simple and intuitive navigation.
- Consistent visual hierarchy.
- Minimal distractions.
- Clear spending information.
- Accessible and readable interfaces.
- Comfortable interaction on mobile devices.

The interface will be refined continuously as more features become available.

---

## 🗓️ Project Timeline

| Period | Focus |
|--------|-------|
| October 2026 | Initial setup, branding and authentication |
| October 2026 | Navigation, welcome experience and bottom menu |
| October–November 2026 | Expense management and local persistence |
| December 2026 | Initial functional version target |
| Future development | Cloud synchronization, analytics and WiseAI |

Dates represent development targets and may change.

---

## 🎓 Academic Project

WiseWallet is being developed in an academic context to apply knowledge in:

- Mobile application development.
- TypeScript and React Native.
- Component-based architecture.
- Navigation and state management.
- Authentication systems.
- Data persistence and databases.
- API integrations.
- User interface and experience design.

The intention is to continue improving the project beyond its initial academic requirements.

---

## 🤝 Contributions & Feedback

WiseWallet is an evolving project.

Suggestions, ideas and bug reports are welcome.

You can open an issue through:

[GitHub Issues](https://github.com/GuilhermeDuarteB/WiseWallet/issues)

---

## 📄 License

This project is distributed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.

---

## 👨‍💻 Author

**Guilherme Branco**

GitHub: [@GuilhermeDuarteB](https://github.com/GuilhermeDuarteB)

Project repository: [WiseWallet](https://github.com/GuilhermeDuarteB/WiseWallet)

---

<div align="center">

<img src="src/assets/WiseWallet_logo.png" alt="WiseWallet" width="65" />

### WiseWallet

**Cada despesa conta. 💙**

*Track your expenses. Understand your habits. Build a better financial future.*

</div>

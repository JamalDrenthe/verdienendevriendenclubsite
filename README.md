# VVC - Verdienende Vrienden Club

## 🇳🇱 Nederlands

**VVC (Verdienende Vrienden Club)** is een communityplatform waar vrienden en leden samen kunnen groeien en verdienen. Het platform stelt gebruikers in staat om deel te nemen aan missies, referrals te beheren en te werken aan persoonlijke ontwikkeling.

### Features
- **Missies & Beloningen**: Voltooi taken om beloningen te verdienen.
- **Referral Systeem**: Nodig vrienden uit en groei samen.
- **Persoonlijke Groei**: Tools en resources voor zelfontwikkeling.
- **Community**: Een plek om te verbinden met gelijkgestemden.

### Tech Stack
Dit project is gebouwd met een moderne stack gericht op performance en developer experience:

- **Frontend**: 
  - [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
  - [Tailwind CSS](https://tailwindcss.com/) voor styling
  - [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) voor componenten
  - [Framer Motion](https://www.framer.com/motion/) voor animaties
  - [TanStack Query](https://tanstack.com/query/latest) voor state management

- **Backend**:
  - [Express](https://expressjs.com/) server
  - [Drizzle ORM](https://orm.drizzle.team/) voor database interacties
  - [PostgreSQL](https://www.postgresql.org/) (via Neon of lokale setup)
  - [Passport.js](https://www.passportjs.org/) voor authenticatie

### Installatie & Setup

1. **Clone de repository**
   ```bash
   git clone https://github.com/JamalDrenthe/verdienendevriendenclubsite.git
   cd verdienendevriendenclubsite
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Omgevingsvariabelen**
   Zorg ervoor dat je de benodigde environment variables hebt ingesteld (bijv. `DATABASE_URL` voor PostgreSQL).

4. **Start de applicatie**
   Voor development mode (start zowel client als server):
   ```bash
   npm run dev
   ```

5. **Build voor productie**
   ```bash
   npm run build
   npm start
   ```

---

## 🇬🇧 English

**VVC (Verdienende Vrienden Club / Earning Friends Club)** is a community platform where friends and members can grow and earn together. The platform allows users to participate in missions, manage referrals, and work on personal development.

### Features
- **Missions & Rewards**: Complete tasks to earn rewards.
- **Referral System**: Invite friends and grow together.
- **Personal Growth**: Tools and resources for self-development.
- **Community**: A place to connect with like-minded individuals.

### Tech Stack
This project is built with a modern stack focusing on performance and developer experience:

- **Frontend**: 
  - [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) for components
  - [Framer Motion](https://www.framer.com/motion/) for animations
  - [TanStack Query](https://tanstack.com/query/latest) for state management

- **Backend**:
  - [Express](https://expressjs.com/) server
  - [Drizzle ORM](https://orm.drizzle.team/) for database interactions
  - [PostgreSQL](https://www.postgresql.org/) (via Neon or local setup)
  - [Passport.js](https://www.passportjs.org/) for authentication

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/JamalDrenthe/verdienendevriendenclubsite.git
   cd verdienendevriendenclubsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Ensure you have the necessary environment variables set (e.g., `DATABASE_URL` for PostgreSQL).

4. **Start the application**
   For development mode (starts both client and server):
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

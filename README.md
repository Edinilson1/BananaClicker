# Banana Clicker

Banana Clicker is an addictive incremental game where every click brings you closer to building the ultimate banana empire.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)

## Prerequisites

- **Node.js** (v16+ recommended)
- **pnpm**

## Installation

1. Clone the repository and navigate to the project root
2. Install all dependencies:

```bash
pnpm install
```

## Configuration

Create a `.env` file:

- Server `.env` (`BananaClicker/server/.env`): used for backend settings such as database connection and ports.

Populate the file using your team's shared configuration.

## Running the Application

### Start Everything (FrontEnd + BackEnd)
```bash
pnpm run dev
```
The localhost links will be displayed in the terminal.

### Start Only FrontEnd
```bash
pnpm run client
```

### Start Only BackEnd
```bash
pnpm run server
```

## Project Structure

```
Ofaie/
├── client/        # Next.js frontend application
└── server/        # NestJS backend application
```

## Tech Stack

- **Frontend:** Next.js, React
- **Backend:** NestJS
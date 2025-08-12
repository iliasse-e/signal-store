# ⚡ Koutoubia | ⵜⴰⴽⵯⵜⴱⵉⵜ : Signal Store Angular App

This Angular application showcases the power of **Signal Store**, enabling a reactive and efficient state management system. It uses **JSON Server** as a mock backend, perfect for development and testing purposes.

## 🕌 About the Project

**Koutoubia** is an online library application offering a range of modular features. Each feature encapsulates its own logic and state using Angular's Signal Store architecture, promoting scalability and maintainability.

The name **Koutoubia** comes from the iconic **Koutoubia Mosque** in Marrakesh, Morocco. Built by the **Almoravids** and later renovated by the **Almohads**, the site once hosted a vibrant **book market**.
 

## 🚀 Features

- State management with `@ngrx/signals`
- Reactive data flow using Signals
- Seamless integration with JSON Server
- Modular and maintainable Angular components
- Full CRUD functionality

## 🧰 Technologies

- Angular 20
- Signal Store
- JSON Server

## 🚦 Signal store

To encourages a clean separation of concerns, the app is divided on features represented by a folder.
We have chosen a Feature Stores orientation.

Each feature is self-contained and includes:

- UI components

- Services

- Models

- **A dedicated Signal Store to manage local state**

As the documentation says SignalStore is a fully-featured state management solution that offers a robust way to manage application state.

## 📂 App's structure

```
src/
├── app/
│   ├── core/        
│   ├── books/       # All feature folder respects this structure
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── models/
│   │   └── books.routes.ts/
│   ├── borrowings/     
│   ├── suggestions/
│   ├── members/
│   ├── stores/     # Common stores
│   └── shared/
├── assets/
└── db.json         # Mocked database
```



## 📦 Installation

### 1. Clone project

```bash
git clone https://github.com/iliasse-e/signal-store
cd signal-store
```

### 2. Launch frontend

```bash
npm start
```

### 3. Launch backend server

```bash
json-server --watch db.json
```

Further documentation : [JSON Server](https://github.com/typicode/json-server/tree/v0)

## 📄 Feature Pages Overview

Each feature in the application has its own dedicated page, responsible for handling specific tasks. The structure follows a **feature-based design** using **standalone components** and clearly defined responsibilities.

---

### 📚 `books` – Book Management

- **Book List Page**: Displays all available books with key details like title, author, and availability.
- **Book Detail Page**: Shows full information about a selected book (summary, category, availability).
- **Book Form Page**: Used to create or edit a book entry.
- **Book Deletion**: Allows removal of a book from the library.

---

### 📖 `borrowings` – Borrowing Records

- **Borrowing History Page**: View current and past borrowings by members.
- **Borrow Book Page**: Form to assign a book to a member for borrowing.
- **Return Book Page**: Interface to mark a book as returned.

---

### 💡 `suggestions` – Book Suggestions

- **Suggestion Submission Page**: Form for users to propose new books or library improvements.
- **Suggestion Review Page**: Admin interface to validate, edit, or reject suggestions.

---

### 👥 `members` – Member Management

- **Member List Page**: Displays all registered members.
- **Member Profile Page**: Shows personal details and borrowing history of a member.
- **Member Form Page**: Create or update member information.


## 👥 User Roles & Permissions

To ensure that features are accessed appropriately, the app defines multiple user roles. Each role has specific permissions regarding viewing, editing, and managing content.

### 🧑‍💼 `Admin`
- Full access to all features
- Can manage books, members, borrowings, and suggestions
- Validates and moderates content
- Manages Signal Stores and app-wide settings

### 📚 `Librarian`
- Can view and manage books
- Handles borrowings (lend/return)
- Can access member profiles but cannot edit them
- Can view suggestions but not validate them

### 🙋‍♂️ `Member`
- Can browse and suggest books
- Can view their own borrowings and member profile
- Cannot edit books or manage other members
- Can submit suggestions

### 👤 `Guest` (optional)
- Limited access to browsing books
- Cannot borrow or suggest books
- Read-only view of public content


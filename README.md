
# Blog Application with Redux Toolkit

## Project Overview

In our previous project, we developed a blogging application for our client, Restoran, using React and state management with Context API. To enhance the scalability and maintainability of the application, we decided to refactor the codebase to use Redux Toolkit. This transition aims to improve our ability to manage complex states and centralize the logic of the application more effectively.

## Objectives

- Refactor the current application to replace Context API with Redux Toolkit.
- Ensure a smooth transition without disrupting existing features.
- Improve application performance where necessary using `useMemo`, `React.memo`, and `useCallback`.
- Manage administrator authentication (login, logout).

## Functionalities

- **Login Page**: A login page for administrator authentication.
- **Redirect for Unauthenticated Users**: Unauthenticated users will be redirected to the login page when they attempt to access private routes.
- **State Management**: Manage states with Redux Toolkit.
- **Pagination**: Implement a pagination system for articles on the home page.

## User Stories

- **Administrator**: As an administrator of the blog, I want to be able to create, edit, and delete blog posts.
- **Blog User**: As a blog user, I want to be able to search and read blog posts without needing to authenticate.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Router**: For routing.
- **Axios**: For HTTP requests.
- **React.memo**, **useMemo**, **useCallback**: For performance optimization.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact us at support@restoran.com.

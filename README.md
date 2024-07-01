## React.js Skills Matrix app

This React application that search employees by skills and experience.
It uses the search-query-builder already provided.

**Getting Started**

1. Prerequisites: Node.js (version 14 or above) and npm installed.

2. Clone the repository:

   ```bash
   git clone https://github.com/lucasocon/search-query-builder-frontend.git
   ```

3. Install dependencies:

   ```bash
   cd search-query-builder-frontend
   npm install
   ```

4. Potential Issues with React Versions:

There might be conflicts between the version of React used in your application and the version of the ReactJS module you're importing. To avoid these conflicts and the issue of multiple React instances, follow these instructions to ensure version compatibility:

https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html

5. Start the development server:

   ```bash
   npm start
   ```

   Open http://localhost:3000 in your browser to view the website.

**Usage**

The app allows filter employees by:

* Skills
* Position

**Building for Production**

1. Build the production version:

   ```bash
   npm run build
   ```

2. Deploy the contents of the `build` folder to your web server.

**Testing**

Unit tests are written using Jest and React Testing Library. Run tests with:

```bash
npm test
```

**Contribution**

Pull requests are welcome! Please follow standard coding conventions.

**License**

This project is licensed under the MIT License.
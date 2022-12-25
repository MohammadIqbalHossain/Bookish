import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;

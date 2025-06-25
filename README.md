# CS-465

# Architecture
This project incorporated two different frontend development approaches:
Server-Rendered Express with Handlebars: The public-facing portion of the site uses server-side rendering via Handlebars templates within an Express framework. This method is effective for delivering static content quickly and efficiently, making it well-suited for pages where dynamic interaction is minimal.
Angular Single-Page Application (SPA): The administrative interface is implemented as a single-page application using Angular. Unlike traditional multi-page apps, the SPA dynamically updates content within the browser without full page reloads. Angular’s capabilities in state management and conditional rendering made it ideal for complex user interactions such as managing trip records through CRUD operations.
On the backend, a NoSQL MongoDB database was selected for its flexible, schema-less structure and scalability. Its document-based design, similar to JSON, facilitates smooth integration with the frontend and simplifies data modeling with tools like Mongoose, which provides schema validation and query handling.

# Functionality
JSON (JavaScript Object Notation) played a critical role as the communication format between client and server. While it resembles JavaScript in syntax, JSON is a text-only format that carries structured data without functions. In this project, it enabled Angular components to send and receive data from Express APIs seamlessly, ensuring a consistent flow of information.
Refactoring was a key part of enhancing performance and code clarity:
Angular Reusability: Components such as TripCardComponent and TripListingComponent were modularized to support consistent UI behavior and reduce redundancy.
Centralized API Handling: The TripDataService was introduced to manage all HTTP requests, improving maintainability and organization of the frontend code.
Benefits of Reusable Components:
Scalability: Easier to extend the application with new features.
Consistency: Ensures a uniform look and feel across the UI.
Maintainability: Simplifies updates, debugging, and future development.

# Testing
Testing was an integral part of the development lifecycle to ensure stability and security:
Backend API Testing: Postman was used to simulate requests to the server. Endpoints were tested for both valid and invalid input scenarios. Secure routes were verified using JWT tokens passed in the authorization headers.
Frontend Component Testing: Angular components were manually tested to confirm:
Admin-only UI elements (like “Add Trip” and “Edit Trip”) render conditionally based on user role.
Functional interactions between UI and backend for creating, updating, and deleting trips.
Security Testing: Authentication was rigorously checked to ensure unauthorized users were blocked from accessing protected admin routes. Expired or malformed JWTs were handled securely to maintain application integrity.
Key Concepts in Full Stack Testing:
HTTP Methods (GET, POST, PUT, DELETE): Define the type of database operation being performed.
Endpoints: Represent specific API URLs mapped to particular resources, such as /api/trips.
Security Layers: JWT-based authentication ensures that sensitive operations are only accessible by authenticated users.

# Reflection
This course has been pivotal in shaping my skills as a full stack developer and aligning my capabilities with industry expectations. Through hands-on experience, I’ve developed a solid understanding of:
Building Full Stack Solutions: Integrating frontend (Angular and Express/Handlebars) with backend services and databases.
Implementing Authentication: Using JWTs to secure routes and protect sensitive data.
Database Integration: Working with MongoDB for flexible, scalable data management, coupled with Mongoose for schema control.
Developing SPAs: Leveraging Angular to build fast, responsive, and highly interactive interfaces.
Core Skills Gained:
Component-Based Architecture: Writing modular, reusable code that improves long-term scalability and development speed.
API Design and Testing: Creating and validating RESTful APIs and ensuring their functionality through tools like Postman.
Client-Server Communication: Establishing smooth data flow between frontend and backend using JSON and HTTP protocols.
Overall, this course has significantly strengthened my confidence and technical ability in full stack development. I now feel better equipped to contribute effectively to real-world projects and pursue opportunities in the software development field.

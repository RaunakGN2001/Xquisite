![Banner](https://github.com/RaunakGN2001/Xquisite/blob/246308c847d658c25ecc2ba83f97f34352b6ea98/public/Xquisite_Banner.jpeg)

# Xquisite E-Commerce

Welcome to the Xquisite E-Commerce repository! This project combines a Full Stack E-Commerce website with a comprehensive Dashboard & Content Management System (CMS). Built using Next.js 13 App Router, React, Tailwind CSS, Prisma, and MySQL, this application is designed to empower your online store management and provide an enhanced shopping experience.

Make sure you've set up the [Xquisite-admin](https://github.com/AntonioErdeljac/next13-ecommerce-admin/tree/master) first as the administrative interface for this application.


## 🛠️ Tech Stack
- <b>Next.js 13 App Router</b>
- <b>React</b>
- <b>Tailwind CSS</b>
- <b>Prisma</b>
- <b>MySQL</b>
- <b>Cloudinary (for image uploads)</b>
- <b>Zustand (for state management)</b>
- <b>Stripe (for payment processing)</b>

## 🤔 Why this Tech Stack

The chosen tech stack offers several advantages:
- **Next.js**: A framework that extends the latest React features. Provides server-side rendering, efficient routing, and a great developer experience.
- **React**: Offers a component-based UI development approach, enabling better organization and reusability.
- **Tailwind CSS**: Speeds up UI development with utility-first classes, enhancing flexibility and maintainability.
- **Prisma**: Facilitates database management through its ORM capabilities, simplifying data operations.
- **MySQL**: A reliable relational database system for storing structured data.
- **Cloudinary**: A cloud-based image and video management solution for efficient and optimized media uploads.
- **Zustand**: A lightweight state management solution for managing application state efficiently.
- **Stripe**: A robust payment processing solution, ensuring secure and seamless transactions.

## ✨ Key Features of the Application

- **Robust Admin Dashboard 📊:** Utilizing Shadcn UI, the Admin dashboard ( Xquisite Admin ) serves as both a Content Management System (CMS) and an administrative interface.

- **Multi-Vendor Support 🏬:** Manage multiple vendors and stores through a single CMS. Each vendor's store can be individually controlled, generating API routes for each.

- **Category Management 🗂️:** Create, update, and delete product categories, allowing for effective organization.

- **Product Management 📦:** Easily manage products by creating, updating, and deleting them. Multiple product images can be uploaded and modified.

- **Filter System 🔍:** Create, update, and delete filters like "Color" and "Size," and match them with products during creation.

- **Billboards 🏞️:** Generate large text banners for specific categories or standalone use. The admin dashboard generates APIs accordingly.

- **Search and Pagination  🔎:** Efficiently search through categories, products, sizes, colors, and billboards with pagination support.

- **Featured Products 🌟:** Highlight specific products as "featured" to showcase them on the homepage.

- **Order Tracking 📊 :** Monitor orders, sales, and view graphs depicting revenue.

- **Authentication  🔐:** Authentication using Clerk Auth including features like OTP based log-in and support for Google and Apple Ids.

- **Order Processing  🛒:** Implement order creation, Stripe checkout, and handle Stripe webhooks.
- **Database Management  🗄️:** Utilize MySQL via Prisma ORM and leverage the capabilities of PlanetScale for data storage.


## 📋 Prerequisites 
Make sure you have Node.js version 14 or above installed.

## 🚀 Getting Started
Follow these steps to set up the Xquisite E-Commerce Application:

1. Clone the repository first:
    ```
    git clone https://github.com/RaunakGN2001/Xquisite
    ```
2. Install necessary packages:

    ```
    npm install
    ```
3. Configure your .env file by adding:
    ```
    NEXT_PUBLIC_API_URL=
    ```
4. Start the application in development mode:
    ```
    npm run dev
    ```

## 🙌 Contributions Welcome! 
Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions help improve this application for everyone.

If you find this repository useful, don't forget to star it! ⭐

Also, follow me on GitHub for more exciting projects in the future!



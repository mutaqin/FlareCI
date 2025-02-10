# FlareCI - CodeIgniter 4 Starter with TailwindCSS & DaisyUI

FlareCI is a lightweight and modern starter template for **CodeIgniter 4**, integrating **TailwindCSS 4** and **DaisyUI 5 (Beta)** to accelerate UI development. This starter kit provides a clean and customizable foundation for building beautiful web applications with **minimal effort**.

## 🚀 Features

- **CodeIgniter 4** – A fast and lightweight PHP framework.
- **TailwindCSS 4** – Utility-first CSS for rapid UI development.
- **DaisyUI 5 (Beta)** – A TailwindCSS-based component library for modern UI elements.
- **Pre-configured Layouts** – Ready-to-use layouts and styles.
- **Dark Mode Support** – Built-in theme switching with DaisyUI.
- **Responsive & Mobile-First** – Fully optimized for all devices.
- **Easy Customization** – Modify colors, components, and layouts with ease.

## 📦 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/mutaqin/FlareCI.git
cd FlareCI
```

### 2️⃣ Install CodeIgniter Backend
Make sure you have **Composer** installed.

```sh
composer install
```

Copy the `env` file and set up your database configuration:

```sh
cp env .env
php spark key:generate
```

### 3️⃣ Install & Build Frontend (Resources)
Make sure you have **Node.js** installed.

```sh
cd resources
npm install
```

Build the frontend resources:

```sh
npm run dev  # For development
npm run build  # For production
```

### 4️⃣ Run the Application
```sh
php spark serve
```
Visit `http://localhost:8080` in your browser.


## 📜 Folder Structure
```
flareci/
│── app/               # CodeIgniter application files
│── public/            # Public assets
│── resources/         # TypeScript, Tailwind, DaisyUI styles, and frontend build tools
│   │── src/           # Frontend source code (TypeScript, components, etc.)
│   │── package.json   # Node.js dependencies
│   │── vite.config.js # Vite configuration
│   │── tsconfig.json  # TypeScript configuration
│── tests/             # PHPUnit test files
│── writable/          # Cache, logs, and session storage
│── vendor/            # Composer dependencies
│── .gitignore         # Git ignore file
│── composer.json      # Composer dependencies and autoloading
│── preload.php        # Preloading file for optimization
└── spark              # CodeIgniter CLI tool
```

## 🤝 Contributing
Feel free to **fork** this repository, create a new branch, and submit a **pull request**. Contributions are welcome!

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).

## 🌎 Links & Resources
- [CodeIgniter 4 Documentation](https://codeigniter.com/user_guide/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**FlareCI** – Ignite your CodeIgniter UI with TailwindCSS & DaisyUI! 🚀


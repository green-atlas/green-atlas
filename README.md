# 🌱 Green Atlas

![Green Atlas Banner](public/europe-logo.svg)

## 🌍 About

Green Atlas is a comprehensive directory of European organizations, initiatives, and tools focused on sustainability, environment, ESG governance, social impact, and innovation for a sustainable future. Our mission is to showcase the vibrant European green ecosystem and help users discover innovative solutions supporting EU sustainability goals and policy alignment.

**🔗 [Visit Green Atlas](https://greenatlas.eu)**

## ✨ Features

- Curated collection of European sustainability organizations and initiatives
- Focus on ESG & Governance, Social Impact & Inclusion, and Technology for Sustainability
- Categorized by focus areas (Climate Action, Circular Economy, Green Tech, Social Impact, etc.)
- Country flags indicating organization headquarters
- Clean, responsive UI for easy browsing
- Open-source and community-driven
- Aligned with EU sustainability policies and strategic frameworks

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/green-atlas/green-atlas.git
   cd green-atlas
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding a New Organization or Initiative

1. Fork the repository
2. Edit the `src/data/services.ts` file to add a new organization/initiative to the appropriate category
3. Follow this format:
   ```typescript
   {
     name: "Organization Name",
     description: "Brief description focusing on sustainability impact (max 150 characters)",
     icon: "🌱", // Choose an appropriate emoji
     country: "🇪🇺", // Country flag emoji where the organization is headquartered
     link: "https://example.com/",
   }
   ```
4. Submit a pull request with your changes

### Guidelines for Adding Organizations

- **European Focus**: The organization should be headquartered in Europe or have significant EU operations\*.
- **Active Organization**: The organization should be currently active and operational
- **Sustainability Focus**: The organization should have a clear focus on sustainability, ESG, social impact, green technology, or alignment with EU environmental/social policies
- **Accurate Description**: Provide a clear, concise description of the organization's sustainability mission and impact. Highlight their contribution to EU sustainability goals.
- **Appropriate Category**: Place the organization in the most relevant category
- **Relevant for Grant Applications**: Organizations should be relevant for EU funding and "Förderanträge" (grant applications)

If you're unsure about which category to use or need to suggest a new one, please open an issue for discussion.

\*If the organization has its headquarters in Europe but is registered somewhere else, please add separate hq and legal attributes

### Other Contributions

- Improve the UI/UX
- Fix bugs or issues
- Enhance documentation
- Add new features

1. Please create an issue first describing your proposed changes if they fall into the 'other contributions' category.
2. Include mockups, photos or sketches if possible
3. Wait for discussion and approval before submitting a PR
4. For minor fixes (typos, small CSS adjustments), PRs can be submitted directly

This helps us collaborate effectively and ensures your time is well spent.

## 📝 License

This project is licensed under the GPL License - see the LICENSE file for details.

## 🙏 Acknowledgements

- All the amazing European organizations working towards a sustainable future
- The open-source community
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- EU sustainability initiatives and policy frameworks

---

Made with 💚 for a sustainable Europe 🇪🇺🌱

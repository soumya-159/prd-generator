# 📋 PRD Template Generator

A simple, user-friendly web application that helps Product Managers create professional Product Requirements Documents (PRDs) with ease. Built with vanilla HTML, CSS, and JavaScript, styled with IBM Carbon Design System principles.

![PRD Generator](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎯 Purpose

As a Product Manager, writing comprehensive PRDs can be time-consuming and inconsistent. This tool provides:
- **Structured templates** that ensure you don't miss critical sections
- **Guided prompts** to help you think through each aspect of your product
- **Instant preview** to see how your PRD looks before exporting
- **Markdown export** for easy integration with documentation tools
- **Auto-save** functionality so you never lose your work

## ✨ Features

### Core Functionality
- ✅ **11 Comprehensive Sections** covering all aspects of a PRD
- ✅ **Real-time Preview** to visualize your document
- ✅ **Markdown Export** for compatibility with GitHub, Notion, Confluence, etc.
- ✅ **Auto-save** to browser localStorage every 30 seconds
- ✅ **Form Validation** to ensure required fields are completed
- ✅ **Responsive Design** works on desktop, tablet, and mobile
- ✅ **IBM Carbon Design** for a professional, enterprise-grade look

### PRD Sections Included
1. **Project Overview** - Name, owner, date, version
2. **Executive Summary** - High-level overview
3. **Problem Statement** - User pain points and target users
4. **Goals & Objectives** - Business goals, user goals, and KPIs
5. **User Stories** - Key user scenarios
6. **Features & Requirements** - Prioritized feature list (P0, P1, P2)
7. **Technical Considerations** - Technical requirements and dependencies
8. **Timeline & Milestones** - Project phases and dates
9. **Risks & Assumptions** - Potential risks and key assumptions
10. **Out of Scope** - What's NOT included
11. **Stakeholders** - Key team members and their roles

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/prd-generator.git
   cd prd-generator
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

### Usage

1. **Fill in the form sections**
   - Start with required fields (marked with *)
   - Use the helpful placeholder text as guidance
   - Fill in as many sections as relevant to your project

2. **Preview your PRD**
   - Click "Preview PRD" to see a formatted version
   - Review all sections before exporting

3. **Export as Markdown**
   - Click "Export as Markdown" to download your PRD
   - The file will be named: `PRD_YourProjectName_Date.md`
   - Open in any markdown editor or upload to your documentation platform

4. **Auto-save**
   - Your work is automatically saved every 30 seconds
   - Reload the page to continue where you left off

## 📁 Project Structure

```
prd-generator/
├── index.html          # Main HTML structure
├── styles.css          # IBM Carbon-inspired styling
├── script.js           # Application logic and functionality
└── README.md           # This file
```

## 🎨 Design Philosophy

This project uses **IBM Carbon Design System** principles:
- Clean, professional interface
- Consistent spacing and typography
- Accessible color contrast
- Focus on usability and clarity
- Enterprise-grade appearance

## 💡 Tips for Writing Great PRDs

1. **Be Specific**: Avoid vague language. Use concrete examples and metrics.
2. **Think User-First**: Always tie features back to user needs and business goals.
3. **Prioritize Ruthlessly**: Not everything can be P0. Be honest about priorities.
4. **Define Success**: Include measurable KPIs so you know if you've succeeded.
5. **Communicate Constraints**: Be clear about what's out of scope and why.
6. **Update Regularly**: PRDs are living documents. Keep them current.

## 🛠️ Customization

### Adding New Sections
To add a new section to the PRD template:

1. Add the HTML form section in `index.html`:
   ```html
   <section class="form-section">
       <h2>Your New Section</h2>
       <div class="form-group">
           <label for="newField">Field Label</label>
           <textarea id="newField" rows="3"></textarea>
       </div>
   </section>
   ```

2. Add the field to `script.js` in the `formFields` object:
   ```javascript
   const formFields = {
       // ... existing fields
       newField: 'newField'
   };
   ```

3. Update the `generateMarkdown()` and `generateHTMLPreview()` functions to include your new section.

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --cds-interactive: #0f62fe;  /* Primary color */
    --cds-text-primary: #161616;  /* Text color */
    /* ... other variables */
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add more PRD templates (technical PRD, one-pager, etc.)
- Export to PDF functionality
- Import existing PRDs
- Collaboration features
- Template customization options
- Dark mode support

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Inspired by best practices from leading tech companies
- Styled with [IBM Carbon Design System](https://carbondesignsystem.com/)
- Built for Product Managers, by a Product Manager

## 📧 Contact

Have questions or suggestions? Feel free to:
- Open an issue on GitHub
- Submit a pull request
- Reach out via [your contact method]

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Multiple template options (one-pager, technical spec, etc.)
- [ ] PDF export functionality
- [ ] Collaborative editing
- [ ] Version history
- [ ] Template marketplace
- [ ] Integration with project management tools

---

**Made with ❤️ for Product Managers everywhere**

*Star this repo if you find it helpful!* ⭐
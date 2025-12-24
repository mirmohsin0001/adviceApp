# Advice Generator

A beautiful, interactive web application that fetches random advice from the [Advice Slip API](https://api.adviceslip.com/) and displays it with an engaging dice animation.

## Features

- 🎲 **Interactive Dice Animation**: Click the dice button to shuffle through different dice faces while loading new advice
- 💬 **Random Advice**: Fetches unique advice from the Advice Slip API
- 🎨 **Modern UI**: Clean, minimalist design with a dark theme
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Smooth Animations**: Engaging shuffle animation while fetching new advice

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **Advice Slip API**: External API for fetching random advice

## Getting Started

### Prerequisites

No dependencies required! Just a modern web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adviceApi.git
cd adviceApi
```

2. Open `index.html` in your web browser:
   - Simply double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## Usage

1. The app automatically loads a random advice when you open the page
2. Click the green dice button to fetch a new random advice
3. Watch the dice shuffle through different faces (1-6) while loading
4. The dice stops at a random face when the new advice is displayed

## Project Structure

```
adviceApi/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # JavaScript logic and API integration
└── README.md       # Project documentation
```

## API Information

This project uses the [Advice Slip API](https://api.adviceslip.com/advice) which provides random advice in JSON format:

```json
{
  "slip": {
    "id": 25,
    "advice": "Never buy cheap cling film."
  }
}
```

The API is free to use and doesn't require authentication.

## Features in Detail

### Dice Shuffling Animation
- The dice cycles through all 6 faces (1-6 dots) while fetching advice
- Stops at a random face when the new advice is loaded
- Smooth rotation and scale animations

### Responsive Design
- Optimized for desktop and mobile screens
- Adaptive font sizes and padding
- Centered layout that works on all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Advice Slip API](https://api.adviceslip.com/) for providing the advice data
- Design inspired by modern UI/UX principles

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/adviceApi/issues).

## Author

Created with ❤️ by [Your Name]

---

**Note**: Make sure you have an active internet connection to fetch advice from the API.


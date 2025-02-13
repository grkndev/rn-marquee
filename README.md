# RN Marquee

A beautiful and performant React Native marquee animation component built with Expo.

## Demo
https://github.com/user-attachments/assets/58d56fa2-6936-4f4e-8250-66056f993a95

## Features
- Smooth marquee animations
- Customizable speed and spacing
- Support for images and other content
- Built with React Native Reanimated
- Expo compatible
- Cross-platform support (iOS, Android, Web)

## Installation

```bash
npm install @animatereactnative/marquee expo-linear-gradient react-native-reanimated
# or
yarn add @animatereactnative/marquee expo-linear-gradient react-native-reanimated
```

## Usage

```tsx
import { Marquee } from "@animatereactnative/marquee";

// Basic usage
<Marquee
  speed={0.5}
  style={{
    gap: spacing,
  }}
>
  {/* Your content here */}
</Marquee>
```

## Dependencies

- "@animatereactnative/marquee": "^0.5.2"
- "expo-linear-gradient": "~14.0.3"
- "react-native-reanimated"
- "expo": "~52.0.33"

## Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn
```
3. Start the development server:
```bash
npm start
# or
yarn start
```

## License

MIT

## Author

Created by grkndev

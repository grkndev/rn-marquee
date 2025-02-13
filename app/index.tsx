import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap:4 }}>
      <Text>Home</Text>
      <Link style={{
        fontSize: 20,
        fontWeight: 'bold'
      }} href="/Playground">Playground</Link>
    </SafeAreaView>
  )
}

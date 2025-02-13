import { View, Text, Dimensions, Image, Pressable, Platform } from 'react-native'
import React, { useMemo } from 'react'
import { mocks } from '@/mocks/mocks'
import { Marquee } from "@animatereactnative/marquee"
import { LinearGradient } from "expo-linear-gradient"
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const { width } = Dimensions.get('window')
const _itemSize = Platform.OS === "web" ? width * 0.1 : width * 0.45;
const _spacing = 8;
const _bgColor = "#0C0820"
const _buttonColor = "#8F38FE"
const _initialDelay = 200;
const _duration = 500;

function chunkArray(array: string[], size: number) {
  const chunked_arr = []
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index))
    index += size;
  }
  return chunked_arr;
}

export default function Playground() {
  const images = useMemo(
    () => chunkArray(mocks, Math.floor(mocks.length / 3)),
    []
  );
  return (
    <View style={{
      backgroundColor: _bgColor,
      flex: 1,
      overflow: 'hidden'
    }}>

      <View style={{
        flex: 1, overflow: 'hidden'
      }}>

        <View style={{
          flex: 1,
          gap: _spacing,
          transform: [{ rotate: '-4deg' }]
        }}>
          {
            images.map((column, columnIndex) => (
              <Marquee
                speed={0.5}
                spacing={_spacing}
                key={`marquee-${columnIndex}`}
                reverse={columnIndex % 2 !== 0}
              >
                <View style={{ flexDirection: 'row', gap: _spacing }}>
                  {
                    column.map((image, index) => (
                      <Animated.Image
                        key={`image-for-cloumn-${columnIndex}-${index}`}
                        source={{ uri: image }}
                        entering={
                          columnIndex % 2 === 0
                            ? FadeInRight.duration(_duration).delay(
                              _initialDelay * (columnIndex + 1) + Math.random() * 100
                            )
                            : FadeInLeft.duration(_duration).delay(
                              _initialDelay * (columnIndex + 1) + Math.random() * 100
                            )
                        }
                        style={{
                          width: _itemSize,
                          aspectRatio: 1,
                          borderRadius: _spacing
                        }}
                      />
                    ))}
                </View>
              </Marquee>
            ))}
        </View>

        <LinearGradient
          colors={['#00000000', _bgColor, _bgColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.7, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '30%'
          }}
          pointerEvents='none'
        />
        <LinearGradient
          colors={[_bgColor, _bgColor, '#00000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.3, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '15%'
          }}
          pointerEvents='none'
        />
      </View>
      <View style={{
        flex: 0.5,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: _spacing,
        gap: _spacing,

      }}>
        <Animated.Text
          entering={FadeInDown.springify().damping(12).delay(_initialDelay + 100)}
          style={{ color: "#fff", fontSize: 28, textAlign: 'center' }}>Unlock Your <Text style={{ fontWeight: 'bold' }}>Creative{"\n"}Potential</Text> with AI</Animated.Text>
        <Animated.Text
          entering={FadeInDown.springify().damping(12).delay(_initialDelay + 200)}
          style={{
            color: "rgba(255,255,255,0.5)",
            textAlign: 'center',
            paddingHorizontal: _spacing,

          }}>Imagination effortlessly crafts beautiful images in an instant.
        </Animated.Text>
        <AnimatedPressable entering={FadeInDown.springify().damping(12).delay(_initialDelay + 300)} onPress={() => { }} style={{
          marginTop: _spacing * 2
        }}>
          <View style={{
            height: 48,
            borderRadius: 32,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: _buttonColor,
            paddingHorizontal: _spacing * 3
          }}>
            <Text style={{
              color: "#fff",
              fontWeight: "600"
            }}>🪄 Start genereting images</Text></View>
        </AnimatedPressable>
      </View>
    </View>
  )
}
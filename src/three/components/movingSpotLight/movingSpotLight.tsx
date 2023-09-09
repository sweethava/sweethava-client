'use client'

import { SpotLight } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { Vector3, Color, Object3D } from 'three'
import { useRef } from 'react'

interface MovingSpotLightProps {
    position?: Vector3,
    color?: Color
}

const MovingSpotLight = ({ position = new Vector3(0, 3, 0), color = new Color('#fff') }: MovingSpotLightProps) => {
    const light = useRef(null!)
    const viewport = useThree((state) => state.viewport)

    useFrame((state) => {
        //@ts-ignore
        light.current.target.position.lerp(position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        //@ts-ignore
        light.current.target.updateMatrixWorld()
    })

    return (
        <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} position={position} color={color.getHex()} />
    )
}

export default MovingSpotLight
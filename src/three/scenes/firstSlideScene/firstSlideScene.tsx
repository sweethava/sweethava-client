'use client'

import { SoftShadows, Float, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './firstSlideScene.module.scss'
import DefaultEffects from '@/three/effects/defaultEffects/defaultEffects'
import PainterStuff from '@/three/components/painterStuff/painterStuff'

const FirstSlideScene = () => {
    return (
        <div className={styles.scene}>
            <Canvas shadows>
                <fog attach="fog" args={['#111', 5, 20]} />
                <color args={['#111']} attach={"background"} />
                <DefaultEffects />
                <Float>
                    <PainterStuff />
                </Float>
                <Sparkles scale={10} count={200} opacity={0.2} />
                <directionalLight castShadow position={[2, 2, 2]} />
                <SoftShadows />
                {/* <BakeShadows /> */}
            </Canvas>
        </div>
    )
}

export default FirstSlideScene
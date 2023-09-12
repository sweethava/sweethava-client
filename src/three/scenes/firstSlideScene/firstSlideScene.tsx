'use client'

import { SoftShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './firstSlideScene.module.scss'
import DefaultEffects from '@/three/effects/defaultEffects/defaultEffects'
import PainterStuff from '@/three/components/painterStuff/painterStuff'

const FirstSlideScene = () => {
    return (
        <div className={styles.scene}>
            <Canvas shadows>
                <fog attach="fog" args={['#0a0a0a', 5, 20]} />
                <color args={['#0a0a0a']} attach={"background"} />
                <DefaultEffects />
                <PainterStuff />
                <directionalLight castShadow position={[2, 2, 2]} intensity={1.5} />
                <ambientLight color={'#0a0a0a'} />
                <SoftShadows />
            </Canvas>
        </div>
    )
}

export default FirstSlideScene